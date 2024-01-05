import { useEffect, useState } from "react";
import OrderSummary from "../../Components/OrderSummary";
import ShopLayout from "../../Components/ShopLayout";
import Card, { DataProps } from "../../Components/card";
import Loader from "../../Components/coreComponents/Loader";

function Shopping() {
  const [products, setProducts] = useState<DataProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://rumen-server.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <ShopLayout>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="md:flex md:flex-row md:justify-between p-4">
          <div className="p-4 bg-white w-[90vw] m-auto mt-4 md:w-[70vw] md:m-0">
            <h1 className="text-center font-bold text-2xl mb-[50px]">
              Carnes Ahumadas y Sandwich
            </h1>
            <div className="card mt-4">
              {products.map((product) => (
                <Card
                  key={product._id}
                  _id={product._id}
                  image={product.image}
                  price={product.price}
                  name={product.name}
                  description={product.description}
                />
              ))}
            </div>
          </div>
          <OrderSummary
            title="PEDIDO"
            buttonText="REVISAR PEDIDO"
            route="/cart"
          />
        </div>
      )}
    </ShopLayout>
  );
}

export default Shopping;
