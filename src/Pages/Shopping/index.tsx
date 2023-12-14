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
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20")
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
                  key={product.id}
                  id={product.id}
                  images={product.images[0]}
                  price={product.price}
                  title={product.title}
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
