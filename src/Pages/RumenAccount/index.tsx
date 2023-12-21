import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import RumenLayout from "../../Components/RumenLayout";

function RumenAccount() {
  return (
    <RumenLayout>
      <div className="bg-white w-[80%] md:w-[30%] md:mt-20 h-[60%] m-auto rounded-lg overflow-hidden mt-10">
        <header className="bg-regular-blue align-middle h-[30%] p-6">
          <h1 className="text-center text-lg md:text-xl text-white font-bold">
            CUENTA COMERCIO RUMEN
          </h1>
        </header>
        <main className="p-6">
          <form className="flex flex-col gap-4 items-center">
            <div className="flex flex-row w-full gap-2 items-center">
              <FaUserAlt className="w-[25px] h-[25px]" />
              <input
                className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-row w-full gap-2 items-center">
              <RiLockPasswordFill className="w-[25px] h-[25px]" />
              <input
                className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
              />
            </div>
            <Link
              to="/rumen-account"
              className="text-xs font-bold text-rumen-orange"
            >
              Olvidaste tu contraseña?
            </Link>
            <Link
              to="/rumen-products"
              className="bg-regular-blue text-white p-2 font-bold rounded-lg hover:bg-regular-blue/50 w-[80%] m-auto text-center"
            >
              Ingresa a tu cuenta
            </Link>
            <div className="flex flex-row gap-1 items-center"></div>
          </form>
        </main>
      </div>
    </RumenLayout>
  );
}

export default RumenAccount;
