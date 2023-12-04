import ShopLayout from "../../Components/ShopLayout";
import Card from "../../Components/card";
import fakedata from "../../mockData/fakedata.json";

const products = fakedata.data;

function Shopping() {
  return (
    <ShopLayout>
      <div className="p-4">
        <h1 className="text-center font-bold text-2xl">
          Carnes Ahumadas y Sandwich
        </h1>
        <div className="card mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {products.map((product) => (
            <ul>
              <li>
                <Card
                  key={product.id}
                  description={product.description}
                  image={product.images[0]}
                  price={product.price}
                  title={product.title}
                />
              </li>
            </ul>
          ))}
        </div>
      </div>
    </ShopLayout>
  );
}

export default Shopping;
