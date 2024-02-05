import { useContext } from "react";
import OrderSummary from "../../Components/OrderSummary";
import ShopLayout from "../../Components/ShopLayout";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../../context/ShoppingCartContext";

function SubmitOrder() {
  const { authData } = useContext(
    ShoppingCartContext
  ) as ShoppingCartContextType;

  return (
    <ShopLayout>
      <div className="p-6 m-6 h-[100%] md:h-[100vh]">
        <div className="flex flex-col justify-center items-center md:justify-start md:flex-row md:gap-3 xl:gap-10 xl:justify-around">
          <div className="flex flex-col gap-4 items-center w-full xl:flex-row xl:pr-2 xl:justify-center">
            <div className="delivery border-2 border-gray-200 border-b-4 border-b-rumen-orange mt-6 w-fit rounded-md p-3 text-xs md:text-xl xl:text-2xl bg-white">
              <form>
                <h2 className="font-bold mb-4">MODO DE ENTREGA</h2>
                <label>
                  <p className="font-medium mb-4">Selecciona tipo de entrega</p>
                </label>
                <div className="flex flex-row gap-2 mb-2">
                  <input type="radio" />
                  <label>
                    <p>Retiro en Local</p>
                  </label>
                </div>
                <p className="text-center">
                  Ubicación: Aldea Los Álamos, Pucón
                </p>
                <div className="flex flex-row gap-2 mb-2 mt-2">
                  <input type="radio" />
                  <label>
                    <p>Despacho a domicilio a tu dirección en Pucón:</p>
                  </label>
                </div>
                <p className="text-center">{authData?.address}</p>
              </form>
            </div>
            <div className="delivery border-2 border-gray-200 bg-white border-b-4 border-b-dark-blue w-fit rounded-md p-3 text-xs md:text-xl xl:text-2xl">
              <form>
                <h2 className="font-bold mb-4">METODO DE PAGO</h2>
                <label>
                  <p className="font-medium mb-4">
                    Selecciona tu método de pago
                  </p>
                </label>
                <div className="flex flex-row gap-2 mb-2">
                  <input type="radio" />
                  <label>
                    <p>Pago por transferencia Bancaria</p>
                  </label>
                </div>
                <div className="border-2 border-black mb-4 p-2 rounded-lg bg-dark-blue text-white space-y-1">
                  <h3 className="text-center font-bold">Datos Bancarios:</h3>
                  <p>Cuenta Corriente Banco ITAU</p>
                  <p>Nro: 12344566666</p>
                  <p>Titular: Vicente Burky</p>
                  <p>RUT: 17.123.563-6</p>
                  <p>correo: rumen@gmail.com</p>
                </div>
                <div className="flex flex-row gap-2">
                  <input type="radio" />
                  <label>
                    <p>Pago en efectivo durante la entrega</p>
                  </label>
                </div>
              </form>
            </div>
          </div>
          <OrderSummary
            title="RESUMEN PEDIDO"
            buttonText="FINALIZAR COMPRA"
            route="/shopping"
          />
        </div>
      </div>
    </ShopLayout>
  );
}

export default SubmitOrder;
