import { useContext, useEffect, useState } from "react";
import OrderSummary, { OrderProduct } from "../../Components/OrderSummary";
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

export type Product = {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
};

export type ShoppingCart = {
  _id: string;
  products: OrderProduct[];
  shipping: number;
  subtotal: number;
  total: number;
};

export type AuthData = {
  access_token: string;
  email: string;
  name: string;
  address: string;
};

function Shopping() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [error, setError] = useState<Error | AxiosError | null>(null);

  const { requester } = useAxios();

  const {
    setProductQuantity,
    productQuantity,
    setShoppingCart,
    shoppingCart,
    setIsLoading,
    isLoading,
    setUser,
    user,
    setAuthData,
    products,
    setProducts,
    authData,
  } = useContext(ShoppingCartContext) as ShoppingCartContextType;

  const signIn = async (
    userData: User,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const { data } = await requester.post(`/auth/login`, userData);
      setUser(userData);
      setAuthData(data);
      localStorage.setItem("TOKEN", data.access_token);
      setIsSignInOpen(false);
    } catch (err) {
      setError(err as Error);
      if (error?.message === "Request failed with status code 401") {
        alert("Usuario y/o contraseña invalidos");
      }
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
      if (!user) {
        setIsSignInOpen(true);
      } else {
        if (!shoppingCart && productQuantity !== null) {
          setIsLoading(true);
          const { data } = await requester.post("/shopping-cart", [
            {
              id,
              quantity: productQuantity,
            },
          ]);
          setShoppingCart(data);
        } else if (shoppingCart && productQuantity !== null) {
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
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
      setProductQuantity(null);
    }
  };

  const token = localStorage.getItem("TOKEN");

  const fetchShoppingCart = async () => {
    const { data } = await requester.get(`shopping-cart/${shoppingCart?._id}`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const { data } = await requester.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(data);
      } catch (err) {
        console.log(err as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
    fetchShoppingCart();
  }, []);

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
