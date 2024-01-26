import { useState } from "react";
import OrderSummary from "../../Components/OrderSummary";
import ShopLayout from "../../Components/ShopLayout";
import Card from "../../Components/card";
import Loader from "../../Components/coreComponents/Loader";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import SignInModal from "../../Components/Modal/SingInModal";

type Product = {
  _id: string;
  name: string;
  price: number;
};

type Products = {
  product: Product;
  quantity: number;
};

export type ShoppingCart = {
  products: Products;
  shipping: number;
  subtotal: number;
  total: number;
};

function Shopping() {
  const [productQuantity, setProductQuantity] = useState<number>(0);
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart | null>(null);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const productQuantityHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setProductQuantity(Number(e.target.value));

  const signInAndAddNewProductToCart = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    try {
      const productId = e.currentTarget.dataset.id;
      const res = await axios.post("http://localhost:3000/shopping-cart", [
        {
          productId,
          quantity: productQuantity,
        },
      ]);
      setShoppingCart(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addProductToCart = () => {}; //A different EndPoint!

  const { data, loading } = useFetch("/products");

  const categories = data.map((product) => product.category);
  const categoryArray = [...new Set(categories)];

  return (
    <>
      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        onClick={signInAndAddNewProductToCart}
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
                            handleNewProductToCart={() => setIsSignInOpen(true)}
                            data-id={product._id}
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
