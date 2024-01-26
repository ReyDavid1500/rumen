import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

type SignInModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const modalContainer = document.getElementById("modal") as
  | Element
  | DocumentFragment;

function SignInModal({ isOpen, onClose }: SignInModalProps) {
  return createPortal(
    <>
      {isOpen && (
        <div className="modal">
          <div className="bg-white border-4 border-black w-[80%] md:w-[30%] h-[60%] rounded-lg overflow-hidden">
            <header className="bg-regular-blue align-middle h-[30%] p-6 relative">
              <button
                onClick={onClose}
                className="absolute right-4 cursor-pointer"
              >
                <IoMdCloseCircle className="w-[25px] h-[25px] " />
              </button>

              <h1 className="text-center text-lg md:text-xl text-white font-bold">
                TU CUENTA EN RUMEN
              </h1>
            </header>
            <main className="p-6">
              <form className="flex flex-col gap-4">
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
                  to="/shopping"
                  className="text-xs font-bold text-rumen-orange"
                >
                  Olvidaste tu contraseña?
                </Link>
                <Link
                  to="/order"
                  className="bg-regular-blue text-white p-2 font-bold rounded-lg hover:bg-regular-blue/50 w-[80%] m-auto text-center"
                >
                  Ingresa a tu cuenta
                </Link>
                <div className="flex flex-row gap-1 items-center">
                  <p className="text-xs">No estas registrado?</p>
                  <Link
                    className="text-xs font-bold text-rumen-orange"
                    to="/signup"
                  >
                    Registrate!!
                  </Link>
                </div>
              </form>
            </main>
          </div>
        </div>
      )}
    </>,
    modalContainer
  );
}

export default SignInModal;
