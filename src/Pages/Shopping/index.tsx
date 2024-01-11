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
    fetch(`https://rumen-server.onrender.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  const categories = products.map((product) => product.category);
  const categoryArray = [...new Set(categories)];

  return (
    <ShopLayout>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="md:flex md:flex-row md:justify-between p-4">
          <div className="p-4 bg-white w-[90vw] m-auto mt-4 md:w-[70vw] md:m-0">
            {categoryArray.map((category, index) => (
              <>
                <h1
                  key={index}
                  className="text-center font-bold text-4xl mb-[50px] mt-8"
                >
                  {category}
                </h1>
                <div className="card mt-4">
                  {products.map((product) => {
                    if (product.category === category) {
                      return (
                        <Card
                          key={product._id}
                          _id={product._id}
                          image={product.image}
                          price={product.price}
                          name={product.name}
                          description={product.description}
                        />
                      );
                    }
                  })}
                </div>
              </>
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
  );
}

export default Shopping;
