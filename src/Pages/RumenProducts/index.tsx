import RumenLayout from "../../Components/RumenLayout";
import { formatCurrency } from "../../assets/utils";
import { FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import Button from "../../Components/coreComponents/Button";
import Loader from "../../Components/coreComponents/Loader";
import RumenDashboard from "../../Components/RumenDashboard";
import SwitchComponent from "../../Components/coreComponents/SwitchComponent";
import useFetch from "../../hooks/useFetch";

function RumenProducts() {
  const { data, loading } = useFetch("/products");
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
          {loading ? (
            <Loader className="flex items-center justify-center h-[100vh]" />
          ) : (
            <ul className="p-2 text-lg sm:p-6 md:p-9">
              {data.map((product) => (
                <li
                  className="rumen-card border-2 border-gray-400 rounded-lg p-4 mb-4 flex flex-col gap-4 bg-light-orange md:flex-row md:justify-around"
                  key={product._id}
                >
                  <div className="flex flex-col gap-4 md:flex-row">
                    <img
                      src={product.image}
                      alt={product.name}
                      width={150}
                      height={150}
                      className="m-auto"
                    />
                    <p>
                      <span>Producto:</span> {product.name}
                    </p>
                    <p>
                      <span>Descripción:</span> {product.description}
                    </p>
                    <p>
                      <span>Categoria:</span> {product.category}
                    </p>
                    <p>
                      <span>Precio:</span> {formatCurrency(product.price)}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 justify-around sm:flex-row sm:justify-between">
                    <div className="flex flex-row items-center justify-between sm:gap-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <SwitchComponent />
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
