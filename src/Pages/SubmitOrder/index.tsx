import { useContext, useState } from "react";
import OrderSummary from "../../Components/OrderSummary";
import ShopLayout from "../../Components/ShopLayout";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../../context/ShoppingCartContext";
import useFetchUserData from "../../hooks/useFetchUserData";
import { useAxios } from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";

function SubmitOrder() {
  const [shipping, setShipping] = useState<string | null>(null);
  const [payment, setPayment] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);

  const { loggedUser, shoppingCart, setOrder, order } = useContext(
    ShoppingCartContext
  ) as ShoppingCartContextType;

  console.log("submit", order);

  useFetchUserData();

  const navigate = useNavigate();

  const { requester } = useAxios();

  const handleInputShipping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShipping(e.target.value);
  };

  const handleInputPayment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment(e.target.value);
  };

  const submitOrderHandler = async () => {
    try {
      const { data } = await requester.post("/orders", {
        userId: loggedUser?._id,
        shoppingCartId: shoppingCart?._id,
        address: shipping,
        payment,
        phone: phoneNumber,
      });
      console.log("postOrder", data);
      setOrder(data);
      navigate("/order-resume");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ShopLayout>
      <div className="p-3 m-6 pt-16 xs:p-0 xs:m-0 md:p-0 md:m-0 md:pl-1 md:pr-1 md:pt-4 h-[100%] md:h-[100%] md:w-[98%]">
        <form className="flex flex-col justify-center items-center md:justify-start md:flex-row md:gap-3 xl:gap-10 xl:justify-around">
          <section className="flex flex-col gap-4 items-center w-full xl:flex-row xl:pr-2 xl:justify-center">
            <div className="delivery border-2 border-gray-200 border-b-4 border-b-rumen-orange mt-6 w-fit md:w-[50%] rounded-md p-3 text-xs md:text-xl xl:text-2xl bg-white">
              <div>
                <h2 className="font-bold mb-4">MODO DE ENTREGA</h2>
                <label>
                  <p className="font-medium mb-4">Selecciona tipo de entrega</p>
                </label>
                <div className="flex flex-row gap-2 mb-2">
                  <input
                    type="radio"
                    name="shipping"
                    id="pick-up"
                    value="Retiro en Local"
                    onChange={handleInputShipping}
                  />
                  <label htmlFor="pick-up">
                    <p>Retiro en Local</p>
                  </label>
                </div>
                <p className="text-center">
                  Ubicación: Aldea Los Álamos, Pucón
                </p>
                <div className="flex flex-row gap-2 mb-2 mt-2">
                  <input
                    type="radio"
                    name="shipping"
                    id="delivery"
                    value={loggedUser?.address}
                    onChange={handleInputShipping}
                  />
                  <label htmlFor="delivery">
                    <p>Despacho a domicilio a tu dirección en Pucón:</p>
                    <p className="text-center">{loggedUser?.address}</p>
                  </label>
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <label className="text-center font-bold">
                    Por favor ingresa tu número de telefono para la entrega
                  </label>
                  <input
                    className="border-2 border-black rounded-md p-2"
                    type="text"
                    placeholder="+56X-XXXXXXXX"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="delivery border-2 border-gray-200 bg-white border-b-4 border-b-dark-blue w-fit rounded-md p-3 text-xs md:text-xl xl:text-2xl">
              <div>
                <h2 className="font-bold mb-4">METODO DE PAGO</h2>
                <label>
                  <p className="font-medium mb-4">
                    Selecciona tu método de pago
                  </p>
                </label>
                <div className="flex flex-row gap-2 mb-2">
                  <input
                    type="radio"
                    name="payment"
                    value="transferencia"
                    onChange={handleInputPayment}
                  />
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
                  <input
                    type="radio"
                    name="payment"
                    value="pago en la entrega"
                    onChange={handleInputPayment}
                  />
                  <label>
                    <p>Pago efectivo o tarjeta durante la entrega</p>
                  </label>
                </div>
              </div>
            </div>
          </section>
          <OrderSummary
            title="RESUMEN PEDIDO"
            buttonText="FINALIZAR COMPRA"
            route=""
            handleShoppingCart={submitOrderHandler}
          />
        </form>
      </div>
    </ShopLayout>
  );
}

export default SubmitOrder;
