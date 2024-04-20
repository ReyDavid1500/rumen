import { Link, useNavigate } from "react-router-dom";
import ShopLayout from "../../Components/ShopLayout";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAxios } from "../../hooks/useAxios";
import { useState } from "react";
import Loader from "../../Components/coreComponents/Loader";
import { AxiosError } from "axios";
import FormInput from "../../Components/coreComponents/FormInput";

export type SignUpData = {
  name: string;
  email: string;
  password: string;
  validatePassword: string;
};

const schema = yup.object().shape({
  name: yup
    .string()
    .required("El nombre es requerido")
    .min(3, "El nombre debe tener mas de 2 letras"),
  email: yup
    .string()
    .email("No es un email valido")
    .required("El email es requerido"),
  password: yup.string().required("La contraseña es requerida").min(8).max(20),
  validatePassword: yup
    .string()
    .required("Validar la contraseña es requerido")
    .min(8)
    .max(20)
    .oneOf([yup.ref("password")], "Password no coincide"),
});

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const { requester } = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const handlerSubmit = async (userData: SignUpData) => {
    const { validatePassword, ...payload } = userData;
    try {
      setIsLoading(true);
      const res = await requester.post("/auth/confirm-account", payload);
      console.log(res.data);
      navigate("/confirm-email-sent");
    } catch (err) {
      setError(err as AxiosError);
      if (error?.message === "Request failed with status code 400") {
        alert("El usario ya esta registrado!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ShopLayout>
      <>
        {isLoading ? (
          <Loader className="h-[100vh] flex justify-center items-center" />
        ) : (
          <div className="bg-white border-4 border-black w-[80%] md:w-[45%] md:mt-10 m-auto rounded-lg overflow-hidden mt-10">
            <header className="bg-regular-blue align-middle h-[20%] p-6">
              <h1 className="text-center text-lg md:text-xl text-white font-bold">
                REGISTRATE EN RUMEN
              </h1>
            </header>
            <main className="p-6">
              <form
                onSubmit={handleSubmit(handlerSubmit)}
                className="sign-up flex flex-col gap-4"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                  <div className="sm:w-[50%]">
                    <FormInput
                      register={register}
                      id="name"
                      name="name"
                      placeholder="Nombre Completo"
                      type="text"
                    />
                    <p className="text-sm text-red-500 font-medium m-auto">
                      {errors.name?.message}
                    </p>
                  </div>
                  <div className="sm:w-[50%]">
                    <FormInput
                      register={register}
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="text"
                    />
                    <p className="text-sm text-red-500 font-medium m-auto">
                      {errors.email?.message}
                    </p>
                  </div>
                </div>
                <FormInput
                  register={register}
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  type="password"
                />
                <p className="text-sm text-red-500 font-medium m-auto">
                  {errors.password?.message}
                </p>
                <FormInput
                  register={register}
                  id="password"
                  name="validatePassword"
                  placeholder="Confirma tu contraseña"
                  type="password"
                />
                <p className="text-sm text-red-500 font-medium m-auto">
                  {errors.validatePassword?.message}
                </p>
                <button className="bg-regular-blue text-white p-2 font-bold rounded-lg hover:bg-regular-blue/50 w-[80%] m-auto text-center">
                  Registrate!
                </button>
                <div className="flex flex-row gap-1 items-center">
                  <p className="text-xs">Ya estas registrado?</p>
                  <Link
                    className="text-xs font-bold text-rumen-orange"
                    to="/shopping"
                  >
                    Vuelve a los productos!
                  </Link>
                </div>
              </form>
            </main>
          </div>
        )}
      </>
    </ShopLayout>
  );
}

export default SignUp;
