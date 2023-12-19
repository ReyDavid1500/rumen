import Layout from "../../Components/Layout";
import { products } from "../../mockData/menu.json";

interface MockData {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
}

interface CategoryData {
  [Key: string]: MockData[];
}

const categoryData: CategoryData = products.reduce(
  (acc: CategoryData, item: MockData) => {
    if (acc[item.category]) {
      acc[item.category].push(item);
    } else {
      acc[item.category] = [item];
    }
    return acc;
  },
  {}
);

function Menu() {
  return (
    <Layout>
      <div className="pt-2 md:pt-10 xl:pt-16 pb-16 bg-[url('/wood.jpg')]">
        <div className="w-[90vw] md:w-[70vw] xl:w-[60vw] m-auto bg-white p-4 text-black font-bold">
          <h1 className="text-center text-6xl">MENÚ</h1>
          {Object.entries(categoryData).map(([category, products]) => (
            <div key={category}>
              <h2 className="text-3xl">{category.toUpperCase()}</h2>
              <ul>
                {products.map((product) => (
                  <li key={product.id}>{product.title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Menu;
