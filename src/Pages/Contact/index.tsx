import { useForm } from "react-hook-form";
import Layout from "../../Components/Layout";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAxios } from "../../hooks/useAxios";
import { useState } from "react";
import Loader from "../../Components/coreComponents/Loader";

type ContactData = {
  email: string;
  name: string;
  message: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Debe ser un email valido")
    .required("El correo es requerido"),
  name: yup
    .string()
    .min(2, "El nombre debe tener mas de dos caracteres")
    .required("El nombre es requerido"),
  message: yup
    .string()
    .min(10, "Debe tener al menos 10 carácteres")
    .max(300, "No debe ser mayor a 300 caracteres")
    .required("El mensaje es requerido"),
});

function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { requester } = useAxios();

  const contactSubmitHandler = async (contactData: ContactData) => {
    try {
      setIsLoading(true);
      await requester.post("emails/contact", contactData);
      alert("Mensaje enviado con éxito!!");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  return (
    <Layout>
      <div className="bg-white pt-1 pb-12 md:p-6 h-[100%]">
        <div className="bg-gray-700 w-[90%] md:w-[80%] md:mt-6 md:mb-6 m-auto rounded-lg overflow-hidden mt-10 border-2 border-gray-300">
          <header className="bg-orange-500 align-middle h-[30%] p-6">
            <h1 className="text-center text-lg md:text-2xl text-white font-bold">
              ENVIANOS TUS COMENTARIOS O SUGERENCIAS
            </h1>
          </header>
          {isLoading ? (
            <Loader className="flex items-center justify-center h-[60vh]" />
          ) : (
            <main className="p-6 text-lg md:text-2xl">
              <form
                onSubmit={handleSubmit(contactSubmitHandler)}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col justify-around md:flex-row gap-6">
                  <div className="flex flex-col w-[100%] md:w-[50%]">
                    <input
                      {...register("email")}
                      className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                    <p className="text-sm text-red-500 font-medium">
                      {errors.email?.message}
                    </p>
                  </div>
                  <div className="flex flex-col w-[100%] md:w-[50%]">
                    <input
                      {...register("name")}
                      className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nombre"
                    />
                    <p className="text-sm text-red-500 font-medium">
                      {errors.name?.message}
                    </p>
                  </div>
                </div>
                <div>
                  <textarea
                    {...register("message")}
                    className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                    name="message"
                    id="message"
                    placeholder="TU MENSAJE..."
                  />
                  <p className="text-sm text-red-500 font-medium">
                    {errors.message?.message}
                  </p>
                </div>
                <button className="bg-orange-500 text-white p-2 font-bold rounded-lg hover:bg-orange-500/50 w-[40%] m-auto text-center mt-5">
                  Enviar!
                </button>

                <div className="flex flex-row gap-1 items-center"></div>
              </form>
            </main>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
