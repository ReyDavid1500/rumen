import { useContext, useEffect, useState } from "react";
import OrderSummary from "../../Components/OrderSummary";
import ShopLayout from "../../Components/ShopLayout";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../../context/ShoppingCartContext";
import useFetchUserData from "../../hooks/useFetchUserData";
import { useAxios } from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/coreComponents/Loader";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../Components/coreComponents/Button";

type UserData = {
  address: string;
  phone: string;
};

type UserInfoData = {
  phone: string;
  address: string;
};

const schema = yup.object().shape({
  phone: yup
    .string()
    .required("El teléfono es requerido")
    .min(9, "Tu número debe tener al menos 9 dígitos")
    .max(12, "Tu número no debe ser mayor de 12 dígitos"),
  address: yup
    .string()
    .required("La dirección es requerida")
    .min(4, "Es muy corta!")
    .max(300),
});

function SubmitOrder() {
  const [payment, setPayment] = useState<string | null>(null);
  const [isUpdateInfo, setIsUpdateInfo] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [shippingData, setShippingData] = useState<UserData | null>(null);

  const { shoppingCart, setShoppingCart, setOrder, setIsLoading, isLoading } =
    useContext(ShoppingCartContext) as ShoppingCartContextType;

  useFetchUserData();

  const navigate = useNavigate();

  const { requester } = useAxios();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserInfoData>({ resolver: yupResolver(schema) });

  useEffect(() => {
    try {
      if (!shippingData && currentUser) {
        return;
      }
      const getCurrentUser = async () => {
        const { data } = await requester.get("users");
        setCurrentUser(data);
      };
      getCurrentUser();
    } catch (err) {
      console.log(err);
    }
  }, [shippingData]);

  const handleInputPayment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment(e.target.value);
  };

  const shippingDataSubmitHandler = async (userData: UserInfoData) => {
    try {
      const { data } = await requester.put("/users/user-info", {
        phone: userData.phone,
        address: userData.address,
      });
      setShippingData(data);
    } catch (error) {
      console.log(error);
    } finally {
      reset();
      setIsUpdateInfo(false);
    }
  };

  const submitOrderHandler = async () => {
    try {
      setIsLoading(true);
      const { data } = await requester.post("/orders", {
        shoppingCartId: shoppingCart?._id,
        address: currentUser?.address,
        payment,
        phone: currentUser?.phone,
      });
      console.log("postOrder", data);
      setOrder(data);
      setShoppingCart(null);
      navigate("/order-resume");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ShopLayout>
      {isLoading ? (
        <Loader className="flex items-center justify-center h-[100vh]" />
      ) : (
        <div className="pl-3 pr-3 m-1 xs:p-0 xs:m-0 md:p-0 md:m-0 md:pl-1 md:pr-1 md:pt-4 h-[100%] md:h-[100%] md:w-[98%]">
          <div className="flex flex-col justify-center items-center md:justify-start md:flex-row md:gap-3 xl:gap-10 xl:justify-around">
            <section className="flex flex-col min-[420px]:flex-row gap-4 w-full xl:flex-row xl:pr-2 xl:justify-center">
              <div className="delivery border-2 border-gray-200 border-b-4 border-b-rumen-orange w-[100%] md:w-[100%] rounded-md p-3 text-xs md:text-xl xl:text-2xl bg-white">
                <div>
                  <h2 className="font-bold mb-4">MODO DE ENTREGA</h2>
                  <label>
                    <p className="font-medium mb-4">
                      Selecciona tipo de entrega
                    </p>
                  </label>
                  <div className="flex flex-row gap-2 mb-2">
                    <input
                      type="radio"
                      name="shipping"
                      id="pick-up"
                      value="Retiro en Local"
                    />
                    <label htmlFor="pick-up">
                      <p>Retiro en Local</p>
                    </label>
                  </div>
                  <p>Ubicación: Aldea Los Álamos, Pucón</p>
                  <div className="flex flex-row gap-2 mb-2 mt-2">
                    <input
                      type="radio"
                      name="shipping"
                      id="delivery"
                      value={currentUser?.address}
                    />
                    <label htmlFor="delivery">
                      <p>Despacho a domicilio a tu dirección en Pucón:</p>
                    </label>
                  </div>
                  <div className="mb-4 flex flex-col gap-2">
                    {currentUser?.address === undefined ? (
                      <p>Agrega tus datos para el despacho</p>
                    ) : (
                      <>
                        <p className="">Dirección: {currentUser?.address}</p>
                        <p className="">Teléfono: {currentUser?.phone}</p>
                      </>
                    )}
                  </div>
                  <Button
                    title={
                      currentUser?.address === undefined
                        ? "Ingresa tus datos"
                        : "Actualiza tus datos"
                    }
                    onClick={() => setIsUpdateInfo(!isUpdateInfo)}
                  />
                  {isUpdateInfo && (
                    <form
                      onSubmit={handleSubmit(shippingDataSubmitHandler)}
                      className="flex flex-col justify-center gap-2"
                    >
                      <label className="font-bold">
                        Por favor ingresa tu número de telefono y dirección para
                        la entrega
                      </label>
                      <input
                        {...register("phone")}
                        name="phone"
                        id="phone"
                        className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                        type="text"
                        placeholder="Teléfono de contacto..."
                      />
                      <p className="text-xs text-red-500 font-medium mt-[-8px]">
                        {errors.phone?.message}
                      </p>
                      <textarea
                        {...register("address")}
                        className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                        name="address"
                        id="address"
                        placeholder="Dirección de despacho en Pucón!"
                      />
                      <p className="text-xs text-red-500 font-medium mt-[-8px]">
                        {errors.address?.message}
                      </p>
                      <button className="bg-light-orange text-gray-700 font-medium border-2 border-black hover:bg-light-orange/50 rounded-md p-2 w-[40%] m-auto">
                        Agregar!
                      </button>
                    </form>
                  )}
                </div>
              </div>
              <div className="delivery border-2 border-gray-200 bg-white border-b-4 border-b-dark-blue w-[100%] rounded-md p-3 text-xs md:text-xl xl:text-2xl mt-2 md:mt-0">
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
                    <h3 className="font-bold">Datos Bancarios:</h3>
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
          </div>
        </div>
      )}
    </ShopLayout>
  );
}

export default SubmitOrder;
