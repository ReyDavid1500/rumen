import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInModalProps = {
  isOpen: boolean;
  onClose: () => void;
  handlerSubmit: (userData: User, e: any) => void;
};

export type User = {
  username: string;
  password: string;
};

const schema = yup
  .object({
    username: yup
      .string()
      .email()
      .required("El Email es requerido para continuar"),
    password: yup
      .string()
      .min(8, "La contraseña debe tener mas de 8 caracteres")
      .max(32)
      .required(),
  })
  .required();

const modalContainer = document.getElementById("modal") as
  | Element
  | DocumentFragment;

function SignInModal({ isOpen, onClose, handlerSubmit }: SignInModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  return createPortal(
    <>
      {isOpen && (
        <div className="modal">
          <div className="bg-white border-4 border-black w-[80%] md:w-[30%] rounded-lg overflow-hidden">
            <header className="bg-regular-blue align-middle h-[15%] p-6 relative">
              <button
                onClick={onClose}
                className="absolute right-2 top-2 cursor-pointer"
              >
                <IoMdCloseCircle className="w-[25px] h-[25px] " />
              </button>
              <h1 className="text-center text-lg md:text-xl text-white font-bold">
                Por favor ingresa a tu cuenta en Rumen para continuar con tu
                Carrito de Compras!
              </h1>
            </header>
            <main className="p-6">
              <form
                onSubmit={handleSubmit(handlerSubmit)}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-row w-full gap-2 items-center">
                  <FaUserAlt className="w-[25px] h-[25px]" />
                  <input
                    {...register("username")}
                    className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                    type="text"
                    id="username"
                    placeholder="Email"
                  />
                </div>
                <p className="text-sm text-red-500 font-medium m-auto">
                  {errors.username?.message}
                </p>
                <div className="flex flex-row w-full gap-2 items-center">
                  <RiLockPasswordFill className="w-[25px] h-[25px]" />
                  <input
                    {...register("password")}
                    className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                    type="password"
                    id="password"
                    placeholder="Contraseña"
                  />
                </div>
                <p className="text-sm text-red-500 font-medium m-auto">
                  {errors.password?.message}
                </p>
                <Link
                  to="/shopping"
                  className="text-xs font-bold text-rumen-orange"
                >
                  Olvidaste tu contraseña?
                </Link>
                <button className="bg-regular-blue text-white p-2 font-bold rounded-lg hover:bg-regular-blue/50 w-[80%] m-auto text-center">
                  Ingresa a tu cuenta
                </button>
                <div className="flex flex-row gap-1 items-center">
                  <p className="text-lg font-bold">No estas registrado?</p>
                  <Link
                    className="text-lg font-bold text-rumen-orange"
                    to="/signup"
                  >
                    Registrate Aquí !!
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
