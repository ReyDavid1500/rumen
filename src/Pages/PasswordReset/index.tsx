import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Loader from "../../Components/coreComponents/Loader";
import { useAxios } from "../../hooks/useAxios";
import { useNavigate, useSearchParams } from "react-router-dom";

type NewPassword = {
  password: string;
  validatePassword: string;
};

const schema = yup.object().shape({
  password: yup.string().required("La contraseña es requerida").min(8).max(20),
  validatePassword: yup
    .string()
    .required("Validar la contraseña es requerido")
    .min(8)
    .max(20)
    .oneOf([yup.ref("password")], "Password no coincide"),
});

function PasswordReset() {
  const [isLoading, setIsLoading] = useState(false);

  const { requester } = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPassword>({ resolver: yupResolver(schema) });

  const [searchParams] = useSearchParams();
  const resetToken = searchParams.get("resetToken");

  const navigate = useNavigate();

  const handlerSubmit = async (userData: NewPassword) => {
    try {
      setIsLoading(true);
      await requester.put(`/auth/new-password?resetToken=${resetToken}`, {
        password: userData.password,
      });
      alert("Contraseña cambiada con éxito!");
      navigate("/shopping");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[100vh] flex flex-1 justify-center items-center">
      {isLoading ? (
        <Loader className="h-[100vh] flex justify-center items-center" />
      ) : (
        <div className="bg-white border-4 border-black w-[80%] md:w-[35%] rounded-lg overflow-hidden">
          <header className="bg-regular-blue text-white  h-[20%] p-6 flex flex-col items-center">
            <h1 className="text-lg md:text-xl font-bold">NUEVA CONTRASEÑA</h1>
            <p className="text-xs mt-2">Ingresa tu nueva contraseña!</p>
          </header>
          <main className="p-6">
            <form
              onSubmit={handleSubmit(handlerSubmit)}
              className="sign-up flex flex-col items-center gap-4"
            >
              <div className="md:w-[70%] flex flex-col gap-2">
                <input
                  {...register("password")}
                  className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Contraseña"
                />
                <p className="text-sm text-red-500 font-medium m-auto">
                  {errors.password?.message}
                </p>
                <input
                  {...register("validatePassword")}
                  className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                  type="password"
                  name="validatePassword"
                  id="validatePassword"
                  placeholder="Confirma tu contraseña"
                />
                <p className="text-sm text-red-500 font-medium m-auto">
                  {errors.validatePassword?.message}
                </p>
              </div>
              <button className="bg-regular-blue text-white p-2 font-bold rounded-lg hover:bg-regular-blue/50 w-[80%] md:w-[50%] m-auto text-center">
                Guardar Contraseña!
              </button>
            </form>
          </main>
        </div>
      )}
    </div>
  );
}

export default PasswordReset;
