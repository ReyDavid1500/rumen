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
  } = useContext(ShoppingCartContext) as ShoppingCartContextType;

  const productQuantityHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setProductQuantity(Number(e.target.value) || 1);

  const handleNewProductToCart = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const userToken = authData?.access_token;
    const productId = e.currentTarget.dataset.id;
    const baseUrl = "http://localhost:3000/shopping-cart";

    try {
      if (!user) {
        setIsSignInOpen(true);
      } else {
        if (!shoppingCart) {
          const { data } = await axios.post(
            baseUrl,
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
        } else {
          const { data } = await axios.patch(
            `${baseUrl}/${shoppingCart._id}`,
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
          setProductQuantity(1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const signIn = async (
    userData: User,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/auth/login",
        userData
      );
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
          <Loader />
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
