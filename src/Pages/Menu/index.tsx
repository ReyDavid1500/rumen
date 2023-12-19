import Layout from "../../Components/Layout";
import { formatCurrency } from "../../assets/utils";
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
          <h1 className="text-center text-8xl mb-4">MENÚ</h1>
          <div className="menu-container">
            {Object.entries(categoryData).map(([category, products]) => (
              <div key={category}>
                <h2 className="text-4xl border-t-4 border-b-4 border-black p-2">
                  {category.toUpperCase()}
                </h2>
                <ul className="p-2 mb-2">
                  {products.map((product) => (
                    <li
                      className="flex flex-row justify-between"
                      key={product.id}
                    >
                      <div>
                        <h2 className="text-xl font-light">{product.title}</h2>
                        <p className="text-xs">{product.description}</p>
                      </div>
                      <span>{formatCurrency(product.price)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Menu;
