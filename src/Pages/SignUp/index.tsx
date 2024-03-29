import { Link, useNavigate } from "react-router-dom";
import ShopLayout from "../../Components/ShopLayout";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { Resend } from "resend";
import { useAxios } from "../../hooks/useAxios";
// import VerificationEmail from "../../emails/VerificationEmail";

type SignUpData = {
  name: string;
  email: string;
  address: string;
  password: string;
  validatePassword: string;
};

// const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

const schema = yup.object().shape({
  name: yup
    .string()
    .required("El nombre es requerido")
    .min(3, "El nombre debe tener mas de 2 letras"),
  email: yup
    .string()
    .email("No es un email valido")
    .required("El email es requerido"),
  address: yup.string().required("La dirección es requerido").max(100),
  password: yup.string().required("La contraseña es requerido").min(8).max(20),
  validatePassword: yup
    .string()
    .required("Validar la contraseña es requerido")
    .min(8)
    .max(20)
    .oneOf([yup.ref("password")], "Password no coincide"),
});

function SignUp() {
  const { requester } = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  // type Payload = Omit<SignUpData, "validatePassword">;

  // const sendEmail = async (payload: Payload) => {
  //   const { data, error } = await resend.emails.send({
  //     from: "Acme <onboarding@resend.dev>",
  //     to: payload.email,
  //     subject: "Hello World",
  //     react: VerificationEmail(),
  //   });

  //   if (error) {
  //     return console.error(error);
  //   }

  //   console.log(data);
  // };

  const handlerSubmit = async (userData: SignUpData) => {
    const { validatePassword, ...payload } = userData;
    try {
      const res = await requester.post("/users", payload);
      console.log(res.data);
      // sendEmail(payload);
      navigate("/shopping");
    } catch (err) {
      console.log(err);
    }
  };

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
            <form
              onSubmit={handleSubmit(handlerSubmit)}
              className="sign-up flex flex-col gap-4"
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <div className="sm:w-[50%]">
                  <input
                    {...register("name")}
                    className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nombre Completo"
                  />
                  <p className="text-sm text-red-500 font-medium m-auto">
                    {errors.name?.message}
                  </p>
                </div>
                <div className="sm:w-[50%]">
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
              </div>

              <textarea
                {...register("address")}
                className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                name="address"
                id="address"
                placeholder="Dirección de despacho en Pucón!"
              />
              <p className="text-sm text-red-500 font-medium m-auto">
                {errors.address?.message}
              </p>
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
      </>
    </ShopLayout>
  );
}

export default SignUp;
