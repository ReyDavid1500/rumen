import OrderSummary from "../../Components/OrderSummary";
import ShopLayout from "../../Components/ShopLayout";

const locations: {
  id: number;
  address: string;
}[] = [
  {
    id: 1,
    address: "Selecciona un Local",
  },
  {
    id: 2,
    address: "Local Camino al Volcán Km6",
  },
  {
    id: 3,
    address: "FoodTruck Camino Internacional",
  },
];

const addresses: {
  id: number;
  address: string;
}[] = [
  {
    id: 1,
    address: "Selecciona dirección de despacho",
  },
  {
    id: 2,
    address: "Primera dirección guardada por cliente",
  },
  {
    id: 3,
    address: "Segunda dirección guardada por cliente",
  },
];

function SubmitOrder() {
  return (
    <ShopLayout>
      <div className="p-6 bg-white m-6 h-[100%] md:h-[100vh]">
        <h1 className="text-xl text-center font-bold md:text-start md:ml-[25%] md:mb-4">
          FINALIZAR PEDIDO
        </h1>
        <div className="flex flex-col justify-center items-center md:justify-start md:flex-row md:gap-3 xl:gap-10 xl:justify-around">
          <div className="delivery border-2 border-gray-200 mt-6 w-fit rounded-md p-3 text-xs md:text-xl xl:text-2xl">
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
              <select
                name="locations"
                id="locations"
                className="mb-4 border-2 border-black p-1 rounded-md w-full focus:border-orange-500 focus:border-2"
              >
                {locations.map((location) => (
                  <option className="" key={location.id}>
                    {location.address}
                  </option>
                ))}
              </select>
              <div className="flex flex-row gap-2 mb-2">
                <input type="radio" />
                <label>
                  <p>Despacho a domicilio, disponible en Pucón</p>
                </label>
              </div>
              <select
                name="locations"
                id="locations"
                className="mb-4 border-2 border-black p-1 rounded-md w-full focus:border-orange-500 focus:border-2"
              >
                {addresses.map((address) => (
                  <option className="" key={address.id}>
                    {address.address}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div className="delivery border-2 border-gray-200 mt-6 w-fit rounded-md p-3 text-xs md:text-xl xl:text-2xl">
            <form>
              <h2 className="font-bold mb-4">METODO DE PAGO</h2>
              <label>
                <p className="font-medium mb-4">Selecciona tu método de pago</p>
              </label>
              <div className="flex flex-row gap-2 mb-2">
                <input type="radio" />
                <label>
                  <p>Pago por transferencia Bancaria</p>
                </label>
              </div>
              <div className="border-2 border-black mb-4 p-2 rounded-lg bg-gray-700 text-white space-y-1">
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
          <OrderSummary title="RESUMEN PEDIDO" buttonText="FINALIZAR COMPRA" />
        </div>
      </div>
    </ShopLayout>
  );
}

export default SubmitOrder;
