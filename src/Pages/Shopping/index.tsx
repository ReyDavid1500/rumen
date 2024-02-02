import { useContext, useState } from "react";
import OrderSummary, { OrderProduct } from "../../Components/OrderSummary";
import ShopLayout from "../../Components/ShopLayout";
import Card from "../../Components/card";
import Loader from "../../Components/coreComponents/Loader";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import SignInModal, { User } from "../../Components/Modal/SingInModal";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../../context/ShoppingCartContext";

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
};

function Shopping() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const {
    setProductQuantity,
    authData,
    productQuantity,
    setAuthData,
    setShoppingCart,
    setUser,
    shoppingCart,
    user,
    setIsLoading,
  } = useContext(ShoppingCartContext) as ShoppingCartContextType;

  const productQuantityHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setProductQuantity(Number(e.target.value) || 1);

  const baseUrl = "http://localhost:3000";

  const handleNewProductToCart = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const userToken = authData?.access_token;
    const productId = e.currentTarget.dataset.id;

    try {
      if (!user) {
        setIsSignInOpen(true);
      } else {
        if (!shoppingCart && productQuantity > 0) {
          setIsLoading(true);
          const { data } = await axios.post(
            `${baseUrl}/shopping-cart`,
            [
              {
                productId,
                quantity: productQuantity,
              },
            ],
            {
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
            }
          );
          setShoppingCart(data);
        } else if (shoppingCart && productQuantity > 0) {
          setIsLoading(true);
          const { data } = await axios.patch(
            `${baseUrl}/shopping-cart/${shoppingCart?._id}`,
            [
              {
                productId,
                quantity: productQuantity,
              },
            ],
            {
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
            }
          );
          setShoppingCart(data);
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (
    userData: User,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${baseUrl}/auth/login`, userData);
      setUser(userData);
      setAuthData(data);
      localStorage.setItem("USER_TOKEN", data.access_token);
      setIsSignInOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const { data, loading } = useFetch("/products");

  const categories = data.map((product) => product.category);
  const categoryArray = [...new Set(categories)];

  return (
    <>
      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        handlerSubmit={signIn}
      />
      <ShopLayout>
        {loading ? (
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
                    {data.map((product) => {
                      if (product.category === category) {
                        return (
                          <Card
                            key={product._id}
                            _id={product._id}
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
