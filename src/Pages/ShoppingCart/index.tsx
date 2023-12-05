import { Link } from "react-router-dom";
import ShopLayout from "../../Components/ShopLayout";

function ShoppingCart() {
  return (
    <ShopLayout>
      <div className="bg-white m-6 md:w-[700px] md:m-auto md:mt-6">
        <div className="p-2 flex flex-col gap-3">
          <h1 className="text-center text-2xl font-medium">ShoppingCart</h1>
          <p className="text-sm text-center">
            Recomendamos al menos 200 gramos de carne por persona. La gente
            saludable consume al menos 400 gramos de carne al día. Tu pedido va
            acompañado de nuestras salsas BBQ y deliciosos encurtidos
          </p>
          <div className="text-green-600 font-bold text-center underline">
            <Link to="/shopping">Vuelve al menu principal</Link>
          </div>
        </div>
        <div className="text-xs mt-6 p-1 md:text-lg">
          <table className="w-[100%]">
            <tbody>
              <tr className="flex flex-row justify-between items-center mb-4 mt-4">
                <td className="flex flex-row gap-1 mr-1">
                  <h6 className="w-min text-start">Hamburguesa Ahumada</h6>
                  <form>
                    <input
                      className="border-2 border-black rounded-md w-10"
                      type="number"
                      pattern="\d*"
                      autoComplete="off"
                      value={1}
                      step={1}
                    />
                  </form>
                  <p>Unidad</p>
                </td>
                <td className="flex flex-row gap-1 md:gap-7 items-center">
                  <p className="text-[9px] font-bold">
                    $7.000 / <br /> Unidad
                  </p>
                  <button className="text-[10px] font-bold text-blue-800">
                    Eliminar
                  </button>
                  $7.000
                </td>
              </tr>
              <hr />
              <tr className="flex flex-row justify-between items-center mb-4 mt-4">
                <td className="flex flex-row gap-1 mr-1">
                  <h6 className="w-min text-start">Porción de Brisket</h6>
                  <form>
                    <input
                      className="border-2 border-black rounded-md w-10"
                      type="number"
                      pattern="\d*"
                      autoComplete="off"
                      value={1}
                      step={1}
                    />
                  </form>
                  <p>Unidad</p>
                </td>
                <td className="flex flex-row gap-1 md:gap-7 items-center">
                  <p className="text-[9px] font-bold">
                    $15.000 / <br /> Unidad
                  </p>
                  <button className="text-[10px] font-bold text-blue-800">
                    Eliminar
                  </button>
                  $15.000
                </td>
              </tr>
              <hr />
              <tr className="flex flex-row justify-between items-center mb-4 mt-4">
                <td className="flex flex-row gap-1 mr-1">
                  <h6 className="w-min text-start">Cerveza Torobayo</h6>
                  <form>
                    <input
                      className="border-2 border-black rounded-md w-10"
                      type="number"
                      pattern="\d*"
                      autoComplete="off"
                      value={1}
                      step={1}
                    />
                  </form>
                  <p>Unidad</p>
                </td>
                <td className="flex flex-row gap-1 md:gap-7 items-center">
                  <p className="text-[9px] font-bold">
                    $5.000 / <br /> Unidad
                  </p>
                  <button className="text-[10px] font-bold text-blue-800">
                    Eliminar
                  </button>
                  $5.000
                </td>
              </tr>
              <hr />
            </tbody>
          </table>
        </div>
        <div className="p-1">
          <h2 className="text-xl mt-10 font-bold mb-4">TOTAL ESTIMADO</h2>
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
          <div className="flex justify-center p-2">
            <div className="bg-orange-500/80 hover:bg-orange-500 text-white font-bold p-2 rounded-md w-[100%] text-center">
              <Link to="/cart">HACER PEDIDO</Link>
            </div>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
}

export default ShoppingCart;
