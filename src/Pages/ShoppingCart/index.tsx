import { Link } from "react-router-dom";
import ShopLayout from "../../Components/ShopLayout";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { formatCurrency } from "../../assets/utils";
import Button from "../../Components/coreComponents/Button";

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

function ShoppingCart() {
  return (
    <ShopLayout>
      <div className="bg-white m-6 md:w-[700px] md:m-auto md:mt-6 md:mb-6">
        <div className="p-4 flex flex-col gap-3 items-center">
          <h2 className="text-2xl font-medium">Carrito de Compras</h2>
          <p className="text-sm text-center">
            Recomendamos al menos 200 gramos de carne por persona. La gente
            saludable consume al menos 400 gramos de carne al día. Tu pedido va
            acompañado de nuestras salsas BBQ y deliciosos encurtidos
          </p>
          <div className="text-light-green font-bold text-center underline">
            <Link className="flex flex-row items-center gap-1" to="/shopping">
              <span>
                <BsChevronDoubleLeft />
              </span>
              Vuelve al menu principal
            </Link>
          </div>
        </div>
        <div className="text-xs mt-6 p-4 md:text-lg">
          <table className="w-[100%] table-fixed">
            <tbody>
              {orderDetails.map((detail) => (
                <tr key={detail.id} className="border-b-2 max-w-[100%]">
                  <td className="pt-6 pb-6 align-middle w-[20%] min-w-min">
                    <h6 className="text-start">{detail.title}</h6>
                  </td>
                  <td className="pl-2 pr-2 w-[50%]">
                    <form className="flex flex-row justify-between items-center">
                      <div className="flex flex-row max-[394px]:flex-col justify-start items-center gap-1">
                        <input
                          className="border-2 border-black rounded-md w-10"
                          type="number"
                          pattern="\d*"
                          autoComplete="off"
                          step={1}
                        />
                        <label className="text-xs">Unidad</label>
                      </div>
                      <button type="submit" className="hidden">
                        Actualizar
                      </button>
                      <span className="text-xs font-bold">
                        {formatCurrency(detail.price)}/ <br /> Unidad
                      </span>
                    </form>
                  </td>
                  <td className="w-[20%] text-end">
                    <button className="text-[10px] md:text-xs font-bold text-regular-blue pl-2 pr-2">
                      Eliminar
                    </button>
                  </td>
                  <td className="w-[10%] text-end">
                    {formatCurrency(detail.price)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4">
          <h2 className="text-xs md:text-lg mt-10 font-bold mb-4">
            TOTAL ESTIMADO
          </h2>
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex flex-row justify-between text-xs md:text-lg">
              <p>Subtotal</p>
              <span>$27.000</span>
            </div>
            <hr />
            <div className="flex flex-row justify-between text-xs md:text-lg">
              <p>Despacho</p>
              <span>$2.000</span>
            </div>
            <hr />
            <span className="text-end font-bold text-xs md:text-lg">
              $29.000
            </span>
          </div>
          <div className="flex justify-center p-2">
            <Button title="FINALIZAR PEDIDO" route="/order" />
          </div>
        </div>
      </div>
    </ShopLayout>
  );
}

export default ShoppingCart;
