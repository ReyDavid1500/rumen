import { Link } from "react-router-dom";
import ShopLayout from "../../Components/ShopLayout";

function SignUp() {
  return (
    <ShopLayout>
      <>
        <div className="bg-white border-4 border-black w-[80%] md:w-[45%] md:mt-10 m-auto rounded-lg overflow-hidden mt-10">
          <header className="bg-regular-blue align-middle h-[20%] p-6">
            <h1 className="text-center text-lg md:text-xl text-white font-bold">
              REGISTRATE EN RUMEN
            </h1>
          </header>
          <main className="p-6">
            <form className="flex flex-col gap-4">
              <input
                className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                type="text"
                name="name"
                id="name"
                placeholder="Nombre Completo"
              />
              <input
                className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />
              <textarea
                className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                name="address"
                id="address"
                placeholder="Dirección de despacho en Pucón!"
              />
              <input
                className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
              />
              <input
                className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                type="password"
                name="password"
                id="password"
                placeholder="Confirma tu contraseña"
              />
              <Link
                to="/order"
                className="bg-regular-blue text-white p-2 font-bold rounded-lg hover:bg-regular-blue/50 w-[80%] m-auto text-center"
              >
                Registrate!
              </Link>
              <div className="flex flex-row gap-1 items-center">
                <p className="text-xs">Ya estas registrado?</p>
                <Link className="text-xs font-bold text-rumen-orange" to="">
                  Ingresa tus datos aquí!
                </Link>
              </div>
            </form>
          </main>
        </div>
      </>
    </ShopLayout>
  );
}

export default SignUp;
