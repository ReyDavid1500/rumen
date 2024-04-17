import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Loader from "../../Components/coreComponents/Loader";
import { useAxios } from "../../hooks/useAxios";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("No es un email valido")
    .required("El email es requerido"),
});

function PasswordRecovery() {
  const [isLoading, setIsLoading] = useState(false);

  const { requester } = useAxios();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ email: string }>({ resolver: yupResolver(schema) });

  const handlerSubmit = async (userData: { email: string }) => {
    try {
      setIsLoading(true);
      await requester.post("/auth/reset", userData);
      alert("Se ha enviado un correo para restablecer la contraseña!");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  return (
    <div className="h-[100vh] flex flex-1 justify-center items-center">
      {isLoading ? (
        <Loader className="h-[100vh] flex justify-center items-center" />
      ) : (
        <div className="bg-white border-4 border-black w-[80%] md:w-[45%] rounded-lg overflow-hidden">
          <header className="bg-regular-blue text-white  h-[20%] p-6 flex flex-col items-center">
            <h1 className="text-lg md:text-xl font-bold">
              RECUPERA TU CONTRASEÑA
            </h1>
            <p className="text-xs mt-2">
              Ingresa tu correo para recuperar tu contraseña!
            </p>
          </header>
          <main className="p-6">
            <form
              onSubmit={handleSubmit(handlerSubmit)}
              className="sign-up flex flex-col items-center gap-4"
            >
              <div className="md:w-[90%]">
                <input
                  {...register("email")}
                  className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <p className="text-sm text-red-500 font-medium m-auto">
                  {errors.email?.message}
                </p>
              </div>
              <button className="bg-regular-blue text-white p-2 font-bold rounded-lg hover:bg-regular-blue/50 w-[80%] md:w-[50%] m-auto text-center">
                Recuperar Contraseña!
              </button>
              {/* <div className="flex flex-row gap-1 items-center">
                  <p className="text-xs">No llegó el correo?</p>
                  <Link
                    className="text-xs font-bold text-rumen-orange"
                    to="/shopping"
                  >
                    Enviar de nuevo!
                  </Link>
                </div> */}
            </form>
          </main>
        </div>
      )}
    </div>
  );
}

export default PasswordRecovery;
