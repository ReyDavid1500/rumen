import { useEffect, useState } from "react";
import RumenLayout from "../../Components/RumenLayout";
import { CiMenuKebab } from "react-icons/ci";
import { formatCurrency } from "../../assets/utils";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    name: string;
  };
  images: string;
}

function RumenProducts() {
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products?offset=0&limit=20"
        );
        const data = await response.json();
        setProductData(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <RumenLayout>
      <ul className="p-2 text-lg">
        {productData.map((product) => (
          <li
            className="rumen-card border-2 border-gray-400 rounded-lg p-4 mb-4 flex flex-col justify-between bg-light-orange md:flex-row md:justify-between"
            key={product.id}
          >
            <div>
              <p>
                <span>Item:</span> {product.title}
              </p>
              <p>
                <span>Descripción:</span> {product.description}
              </p>
              <p>
                <span>Categoria:</span> {product.category.name}
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-around sm:flex-row sm:justify-between">
              <div>
                <p>
                  <span>Precio:</span> {formatCurrency(product.price)}
                </p>
                <p>
                  <span>Imagen URL:</span> <br /> {product.images[0]}
                </p>
              </div>
              <div className="flex flex-row items-center justify-between">
                <select className="rounded-md p-2 border-2 border-gray-500">
                  <option value="">Stock</option>
                  <option value="">Sin Stock</option>
                </select>
                <CiMenuKebab className="h-8 w-8" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </RumenLayout>
  );
}

export default RumenProducts;
