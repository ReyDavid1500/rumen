import { useContext, useEffect, useState } from "react";
import OrderSummary from "../../Components/OrderSummary";
import ShopLayout from "../../Components/ShopLayout";
import SignInModal, { User } from "../../Components/Modal/SingInModal";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../../context/ShoppingCartContext";
import { useAxios } from "../../hooks/useAxios";
import { AxiosError } from "axios";
import useFetchUserData from "../../hooks/useFetchUserData";
import CardSkeleton from "../../Components/CardSkeleton";
import ProductCard from "../../Components/ProductCard";

function Shopping() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [error, setError] = useState<Error | AxiosError | null>(null);
  const [productQuantity, setProductQuantity] = useState<number | null>(null);

  const { requester } = useAxios();

  useFetchUserData();

  const {
    setShoppingCart,
    shoppingCart,
    setLoggedIn,
    products,
    setProducts,
    loggedUser,
    isLoading,
    setIsLoading,
  } = useContext(ShoppingCartContext) as ShoppingCartContextType;

  const currentToken = localStorage.getItem("TOKEN") as string;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const { data } = await requester.get("/products");
        setProducts(data);
        if (!currentToken) {
          setTimeout(() => setIsSignInOpen(true), 5000);
        }
      } catch (err) {
        console.log(err as Error);
      } finally {
        setIsLoading(false);
      }
    };
    if (!products) setIsLoading(true);
    fetchProducts();
  }, []);

  const signIn = async (
    userData: User,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await requester.post(`/auth/login`, userData);
      setIsSignInOpen(false);
      localStorage.setItem("TOKEN", JSON.stringify(data));
      setLoggedIn(data);
    } catch (err) {
      setError(err as Error);
      if (error?.message === "Request failed with status code 401") {
        alert("Usuario y/o contraseña invalidos");
      }
      if (error?.message === "Request failed with status code 400") {
        alert(
          "La cuenta no esta activada, revisa tu correo o vuelve a registrarte"
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const productQuantityHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setProductQuantity(Number(e.target.value));

  const handleNewProductToCart = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const id = e.currentTarget.dataset.id;
    try {
      if (!loggedUser) {
        setIsSignInOpen(true);
      }
      if (!shoppingCart && productQuantity) {
        const { data } = await requester.post(`/shopping-cart`, [
          {
            id,
            quantity: productQuantity,
          },
        ]);
        setShoppingCart(data);
      }
      if (shoppingCart && productQuantity) {
        const { data } = await requester.patch(
          `/shopping-cart/${shoppingCart?._id}`,
          [
            {
              id,
              quantity: productQuantity,
            },
            ...shoppingCart.products,
          ]
        );
        setShoppingCart(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const categories = products?.map((product) => product.category);
  const categoryArray = [...new Set(categories)];

  return (
    <>
      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        handlerSubmit={signIn}
      />
      <ShopLayout>
        <div className="md:flex md:flex-row md:justify-between p-4">
          <div
            className={
              isLoading
                ? "p-4 bg-white w-[85vw] m-auto mt-4 md:w-[70vw] sm:mt-20"
                : "p-4 bg-white w-[85vw] m-auto mt-4 md:w-[70vw] sm:mt-0"
            }
          >
            {isLoading || !products ? (
              <CardSkeleton />
            ) : (
              <>
                {categoryArray.map((category, index) => (
                  <div key={index}>
                    <h1 className="text-center font-bold text-4xl mb-[50px] mt-8">
                      {category}
                    </h1>
                    <div className="card mt-4">
                      {products?.map((product) => {
                        if (product.category === category) {
                          return (
                            <ProductCard
                              key={product._id}
                              image={product.image}
                              price={product.price}
                              name={product.name}
                              description={product.description}
                              handleProductQuantity={productQuantityHandler}
                              handleNewProductToCart={handleNewProductToCart}
                              dataId={product._id}
                              inputDisabled={!loggedUser}
                              addedToCart={shoppingCart?.products.some(
                                (item) => item.id === product._id
                              )}
                              message={
                                <p className="text-sm bg-gray-900 p-1 rounded-sm border-gray-700 ">
                                  Has añadido {product.name}
                                </p>
                              }
                            />
                          );
                        }
                      })}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          <OrderSummary
            title="PEDIDO"
            buttonText="REVISAR PEDIDO"
            route="/cart"
          />
        </div>
      </ShopLayout>
    </>
  );
}

export default Shopping;
