import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";

function Contact() {
  return (
    <Layout>
      <div className="bg-white p-6 m-6">
        <div className="bg-gray-700 w-[80%] md:w-[40%] md:mt-6 md:mb-6 h-[60%] m-auto rounded-lg overflow-hidden mt-10 border-2 border-gray-300">
          <header className="bg-orange-500 align-middle h-[30%] p-6">
            <h1 className="text-center text-lg md:text-xl text-white font-bold">
              ENVIANOS TUS COMENTARIOS O SUGERENCIAS
            </h1>
          </header>
          <main className="p-6">
            <form className="flex flex-col gap-4">
              <input
                className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />
              <input
                className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
              />
              <textarea
                className="border-2 border-gray-200 p-2 rounded-lg w-[100%]"
                name="address"
                id="address"
                placeholder="TU MENSAJE..."
              />
              <Link
                to="/contact"
                className="bg-orange-500 text-white p-2 font-bold rounded-lg hover:bg-orange-500/50 w-[80%] m-auto text-center"
              >
                ENVIAR
              </Link>
              <div className="flex flex-row gap-1 items-center"></div>
            </form>
          </main>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
