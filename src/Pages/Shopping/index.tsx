import { Link } from "react-router-dom";
import ShopLayout from "../../Components/ShopLayout";
import Card from "../../Components/card";
import fakeData from "../../mockData/fakedata.json";

const products = fakeData.data;

const orderDetails: {
  id: number;
  title: string;
  price: number;
}[] = [
  {
    id: 1,
    title: "Hamburguesa Ahumada",
    price: 7000,
  },
  {
    id: 2,
    title: "Porción de Brisket",
    price: 15000,
  },
  {
    id: 3,
    title: "Coca Cola en Lata",
    price: 2000,
  },
];

function Shopping() {
  return (
    <ShopLayout>
      <div className="md:flex md:flex-row md:justify-between p-4">
        <div className="p-4 bg-white w-[90vw] m-auto mt-4 md:w-[70vw] md:m-0">
          <h1 className="text-center font-bold text-2xl mb-[50px]">
            Carnes Ahumadas y Sandwich
          </h1>
          <div className="card mt-4">
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
        <div className="mt-6 md:mt-0 bg-white p-6 sm:p-16 md:w-[30vw]">
          <div className="md:fixed md:overflow-y-scroll md:h-[80%] md:right-[48px] md:top-[120px] border-2 border-gray-400/50 rounded-lg p-2 xl:w-[350px]">
            <div className="flex flex-col gap-4 mb-4">
              <h2 className="text-xl font-bold">PEDIDO</h2>
              <table>
                <tbody>
                  {orderDetails.map((detail) => (
                    <tr key={detail.id} className="border-b-2">
                      <td className="text-xs">1</td>
                      <div className="flex flex-row justify-between items-center">
                        <td className="text-xs pt-6 pb-6">
                          <h3>{detail.title}</h3>
                        </td>
                        <td>
                          <button className="text-xs text-green-600 font-bold">
                            Eliminar
                          </button>
                        </td>
                      </div>
                      <td className="text-xs text-end">${detail.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2 className="text-xs font-bold mb-4">TOTAL ESTIMADO</h2>
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex flex-row justify-between text-xs">
                <p>Subtotal</p>
                <span>$27.000</span>
              </div>
              <hr />
              <div className="flex flex-row justify-between text-xs">
                <p>Despacho</p>
                <span>$2.000</span>
              </div>
              <hr />
              <span className="text-end font-bold">$29.000</span>
            </div>
            <div className="flex justify-center fixed bottom-0 right-[-6px] w-[100vw] z-10 bg-gray-300 p-2 md:relative md:w-[100%] md:bg-white">
              <div className="bg-orange-500/80 hover:bg-orange-500 text-white font-bold p-2 rounded-md w-[90%] text-center">
                <Link to="/cart">REVISAR PEDIDO</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
}

export default Shopping;
