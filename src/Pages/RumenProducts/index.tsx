import { useEffect, useState } from "react";
import RumenLayout from "../../Components/RumenLayout";
import { formatCurrency } from "../../assets/utils";
import { FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

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
      <form className="p-2 mb-6 mt-6 flex flex-col w-[100%] gap-2 items-center md:flex-row md:gap-4 md:justify-center">
        <label className="text-xl md:text-2xl font-bold">Buscar Producto</label>
        <input
          type="text"
          placeholder="Nombre del producto"
          className="p-2 rounded-md border-2 border-black"
        />
        <div className="flex flex-row gap-2">
          <label>Filtrar sin Stock</label>
          <input type="checkbox" placeholder="Productos sin Stock" />
        </div>
      </form>
      <ul className="p-2 text-lg sm:p-6 md:p-9">
        {productData.map((product) => (
          <li
            className="rumen-card border-2 border-gray-400 rounded-lg p-4 mb-4 flex flex-col justify-between bg-light-orange md:flex-row md:justify-between"
            key={product.id}
          >
            <div>
              <p>
                <span>Producto:</span> {product.title}
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
                  <span>Imágen URL:</span> <br /> {product.images[0]}
                </p>
              </div>
              <div className="flex flex-row items-center justify-between sm:gap-4">
                <select className="rounded-md p-2 border-2 border-gray-500">
                  <option value="">Con Stock</option>
                  <option value="">Sin Stock</option>
                </select>
                <div className="flex flex-row gap-4">
                  <FaRegEdit className="w-8 h-8 cursor-pointer" />
                  <GoTrash className="w-8 h-8 cursor-pointer" />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </RumenLayout>
  );
}

export default RumenProducts;
