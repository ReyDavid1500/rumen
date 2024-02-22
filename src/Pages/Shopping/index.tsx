import { useContext, useEffect, useState } from "react";
import OrderSummary from "../../Components/OrderSummary";
import ShopLayout from "../../Components/ShopLayout";
import Card from "../../Components/card";
import Loader from "../../Components/coreComponents/Loader";
import SignInModal, { User } from "../../Components/Modal/SingInModal";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../../context/ShoppingCartContext";
import { useAxios } from "../../hooks/useAxios";
import { AxiosError } from "axios";
import useFetchUserData from "../../hooks/useFetchUserData";

function Shopping() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [error, setError] = useState<Error | AxiosError | null>(null);
  const [productQuantity, setProductQuantity] = useState<number | null>(null);

  const { requester } = useAxios();

  useFetchUserData();

  const {
    setShoppingCart,
    shoppingCart,
    setIsLoading,
    isLoading,
    setLoggedIn,
    products,
    setProducts,
    loggedUser,
  } = useContext(ShoppingCartContext) as ShoppingCartContextType;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const { data } = await requester.get("/products");
        setProducts(data);
      } catch (err) {
        console.log(err as Error);
      } finally {
        setIsLoading(false);
      }
    };
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
      setLoggedIn(data);
      localStorage.setItem("TOKEN", JSON.stringify(data));
      setIsSignInOpen(false);
    } catch (err) {
      setError(err as Error);
      if (error?.message === "Request failed with status code 401") {
        alert("Usuario y/o contraseña invalidos");
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
        setIsLoading(true);
        const { data } = await requester.post(
          `/shopping-cart/${loggedUser?._id}`,
          [
            {
              id,
              quantity: productQuantity,
            },
          ]
        );
        setShoppingCart(data);
      }
      if (shoppingCart && productQuantity) {
        setIsLoading(true);
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
    } finally {
      setIsLoading(false);
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
        {isLoading ? (
          <Loader className="flex items-center justify-center h-[100vh]" />
        ) : (
          <div className="md:flex md:flex-row md:justify-between p-4">
            <div className="p-4 bg-white w-[90vw] m-auto mt-4 md:w-[70vw] md:m-0">
              {categoryArray.map((category, index) => (
                <div key={index}>
                  <h1 className="text-center font-bold text-4xl mb-[50px] mt-8">
                    {category}
                  </h1>
                  <div className="card mt-4">
                    {products?.map((product) => {
                      if (product.category === category) {
                        return (
                          <Card
                            key={product._id}
                            image={product.image}
                            price={product.price}
                            name={product.name}
                            description={product.description}
                            handleProductQuantity={productQuantityHandler}
                            handleNewProductToCart={handleNewProductToCart}
                            dataId={product._id}
                          />
                        );
                      }
                    })}
                  </div>
                </div>
              ))}
            </div>
            <OrderSummary
              title="PEDIDO"
              buttonText="REVISAR PEDIDO"
              route="/cart"
            />
          </div>
        )}
      </ShopLayout>
    </>
  );
}

export default Shopping;
