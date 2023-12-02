import Layout from "../../Components/Layout";

function Contact() {
  return (
    <Layout>
      <div>
        <div className="p-10 bg-white w-[80vw] h-auto m-auto mt-10 mb-10">
          <h1 className="text-center text-3xl font-medium">
            Envianos un mensaje!!
          </h1>
          <div className="bg-blue-950 p-6 mt-6 rounded-lg md:w-[60%] md:m-auto md:mt-6 h-[500px] md:flex md:items-center md:justify-center">
            <form className="flex flex-col gap-3 md:w-[80%] md:h-[80%]">
              <input
                className="pl-2 rounded-sm"
                type="text"
                placeholder="name"
              />
              <input
                className="pl-2 rounded-sm"
                type="text"
                placeholder="email"
              />

              <textarea
                className="pl-2 rounded-sm"
                name="message"
                id="message"
                rows={6}
              ></textarea>
              <button
                className="bg-white rounded-xl w-[70px] m-auto hover:bg-gray-400 hover:font-semibold"
                type="submit"
              >
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
