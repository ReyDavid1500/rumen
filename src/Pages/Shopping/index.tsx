import { useEffect, useState } from "react";
import ShopLayout from "../../Components/ShopLayout";
import Card, { DataProps } from "../../Components/card";

function Shopping() {
  const [products, setProducts] = useState<DataProps[]>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <ShopLayout>
      <div className="md:flex md:flex-row p-4">
        <div className="p-4 bg-white w-[90vw] m-auto mt-4">
          <h1 className="text-center font-bold text-2xl">
            Carnes Ahumadas y Sandwich
          </h1>
          <div className="card mt-4 grid grid-cols-1 min-[915px]:grid-cols-2 xl:grid-cols-3 gap-4">
            {products.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                description={product.description}
                images={product.images[0]}
                price={product.price}
                title={product.title}
              />
            ))}
          </div>
        </div>
        <div className="m-4 bg-white p-6 md:h-fit">
          <div className="flex flex-col gap-4 mb-4">
            <h2 className="text-xl font-bold">PEDIDO</h2>
            <p className="bg-gray-100 p-2 text-sm hidden">
              Selecciona tus productos para <br /> enviar tu orden
            </p>
            <div className="flex flex-row justify-between">
              <p>1 Hamburguesa Ahumada</p>
              <p>
                <span className="text-blue-800 text-xs font-bold mr-2 cursor-pointer">
                  Eliminar
                </span>
                <span>$7.000</span>
              </p>
            </div>
            <hr />
            <div className="flex flex-row justify-between">
              <p>1 Porción de Brisket</p>
              <p>
                <span className="text-blue-800 text-xs font-bold mr-2 cursor-pointer">
                  Eliminar
                </span>
                <span>$15.000</span>
              </p>
            </div>
            <hr />
            <div className="flex flex-row justify-between">
              <p>1 Cerveza Torobayo</p>
              <p>
                <span className="text-blue-800 text-xs font-bold mr-2 cursor-pointer">
                  Eliminar
                </span>
                <span>$5.000</span>
              </p>
            </div>
            <hr />
          </div>
          <h2 className="text-xl font-bold mb-4">TOTAL ESTIMADO</h2>
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex flex-row justify-between">
              <p>Subtotal</p>
              <span>$27.000</span>
            </div>
            <hr />
            <div className="flex flex-row justify-between">
              <p>Despacho</p>
              <span>$2.000</span>
            </div>
            <hr />
            <span className="text-end font-bold">$29.000</span>
          </div>
          <div className="flex justify-center fixed bottom-0 right-[-6px] w-[100vw] z-10 bg-gray-300 p-2 md:relative md:w-[100%] md:bg-white">
            <button className="bg-orange-500/80 hover:bg-orange-500 text-white font-bold p-2 rounded-md w-[90%]">
              REVISAR PEDIDO
            </button>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
}

export default Shopping;
