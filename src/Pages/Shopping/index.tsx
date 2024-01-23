import OrderSummary from "../../Components/OrderSummary";
import ShopLayout from "../../Components/ShopLayout";
import Card from "../../Components/card";
import Loader from "../../Components/coreComponents/Loader";
import useFetch from "../../hooks/useFetch";

function Shopping() {
  const { data, loading } = useFetch("/products");

  const categories = data.map((product) => product.category);
  const categoryArray = [...new Set(categories)];

  return (
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
  );
}

export default Shopping;
