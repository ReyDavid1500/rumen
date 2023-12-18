import { Link } from "react-router-dom";
import RumenLayout from "../../Components/RumenLayout";
import { BsChevronDoubleLeft } from "react-icons/bs";

function RumenForm() {
  return (
    <RumenLayout>
      <div>
        <div className="bg-white w-[80%] md:w-[30%] md:mt-20 h-[60%] m-auto rounded-lg overflow-hidden mt-10">
          <header className="bg-regular-blue align-middle h-[30%] p-6">
            <h1 className="text-center text-lg md:text-xl text-white font-bold">
              CREA UN NUEVO PRODUCTO
            </h1>
          </header>
          <main className="p-6">
            <form className="flex flex-col gap-4">
              <input
                className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                type="text"
                name="name"
                id="name"
                placeholder="Nombre Producto"
              />
              <input
                className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                type="number"
                name="price"
                id="price"
                placeholder="Precio Unitario"
              />
              <textarea
                className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                name="description"
                id="description"
                placeholder="Descripción del producto"
              />
              <input
                className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                type="imgUrl"
                name="imgUrl"
                id="imgUrl"
                placeholder="Url de la Imágen"
              />
              <Link
                to="/order"
                className="bg-regular-blue text-white p-2 font-bold rounded-lg hover:bg-regular-blue/50 w-[80%] m-auto text-center"
              >
                Crear Producto
              </Link>
              <div className="flex justify-center items-center">
                <BsChevronDoubleLeft className="text-rumen-orange" />
                <Link
                  className="text-xs font-bold text-rumen-orange"
                  to="/rumen-products"
                >
                  Volver a productos!
                </Link>
              </div>
            </form>
          </main>
        </div>
      </div>
    </RumenLayout>
  );
}

export default RumenForm;
