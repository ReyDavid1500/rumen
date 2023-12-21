import { useEffect, useState } from "react";
import RumenLayout from "../../Components/RumenLayout";
import { formatCurrency } from "../../assets/utils";
import { FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import Button from "../../Components/coreComponents/Button";
import Loader from "../../Components/coreComponents/Loader";
import RumenDashboard from "../../Components/RumenDashboard";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      const getData = async () => {
        setIsLoading(true);
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products?offset=0&limit=20"
        );
        const data = await response.json();
        setProductData(data);
        setIsLoading(false);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <RumenLayout>
      <div className="flex flex-col items-center m-4 md:flex-row md:items-start">
        <RumenDashboard />
        <div className="md:pl-[25rem]">
          <form className="p-2 mb-6 mt-6 flex flex-col w-[100%] gap-2 items-center md:flex-row md:gap-4 md:justify-center">
            <label className="text-xl md:text-2xl font-bold">
              Buscar Producto
            </label>
            <input
              type="text"
              placeholder="Nombre del producto"
              className="p-2 rounded-md border-2 border-black"
            />
            <div className="flex flex-row gap-2">
              <label>Filtrar sin Stock</label>
              <input type="checkbox" placeholder="Productos sin Stock" />
            </div>
            <Button title="Nuevo Producto" route="/rumen-form" />
          </form>
          {isLoading ? (
            <Loader />
          ) : (
            <ul className="p-2 text-lg sm:p-6 md:p-9">
              {productData.map((product) => (
                <li
                  className="rumen-card border-2 border-gray-400 rounded-lg p-4 mb-4 flex flex-col gap-4 bg-light-orange md:flex-row md:justify-around"
                  key={product.id}
                >
                  <div className="flex flex-col gap-4 md:flex-row">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      width={150}
                      height={150}
                      className="m-auto"
                    />
                    <p>
                      <span>Producto:</span> {product.title}
                    </p>
                    <p>
                      <span>Descripción:</span> {product.description}
                    </p>
                    <p>
                      <span>Categoria:</span> {product.category.name}
                    </p>
                    <p>
                      <span>Precio:</span> {formatCurrency(product.price)}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 justify-around sm:flex-row sm:justify-between">
                    <div className="flex flex-row items-center justify-between sm:gap-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <div>
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-rumen-orange rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] md:after:top-[10px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-700"></div>
                        </div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-red-800">
                          Sin Stock
                        </span>
                      </label>
                      <div className="flex flex-row gap-4">
                        <FaRegEdit className="w-8 h-8 cursor-pointer" />
                        <GoTrash className="w-8 h-8 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </RumenLayout>
  );
}

export default RumenProducts;
