function App() {
  return (
    <div className="font-body">
      <header className="grid grid-cols-2 grid-flow-row xl:grid xl:grid-cols-3">
        <section className="flex flex-row items-center p-4 mb-3 sm:pr-12 sm:pl-12 md:pl-40 md:pr-40 xl:order-1">
          <div>
            <a href="/">
              <img
                src="/rumen-logo.png"
                alt="Rumen Carnes Ahumadas"
                width={96}
                height={54}
              />
            </a>
          </div>
        </section>
        <section className="flex flex-row items-center justify-end p-4 mb-3 sm:pr-12 sm:pl-12 md:pl-[8rem] md:pr-[8rem] xl:order-3">
          <div className="bg-orange-500/80 hover:bg-orange-500 text-white font-bold p-2 rounded-md w-fit">
            <a target="_blank" rel="noopener noreferrer" href="/">
              PIDE AQUÍ!!
            </a>
          </div>
        </section>
        <section className="col-span-2 xl:col-span-1 bg-gray-300 text-gray-600 font-semibold xl:w-[100%] xl:bg-white xl:m-auto xl:order-2">
          <nav>
            <ul className="flex flex-row justify-around gap-3 p-3 ">
              <li className="hover:text-black">
                <a href="/">LOCALES</a>
              </li>
              <li className="hover:text-black">
                <a href="/">MENU</a>
              </li>
              <li className="hover:text-black">
                <a href="/">NOSOTROS</a>
              </li>
              <li className="hover:text-black">
                <a href="/">CONTACTO</a>
              </li>
            </ul>
          </nav>
        </section>
      </header>
      <main>
        <div className="overflow-hidden max-h-[500px]">
          <img
            src="/Rumen-15.jpg"
            alt="Rumen Principal"
            className="w-full h-auto "
          />
        </div>
        <section className="content-section">
          <div className="text-[10vw] sm:text-[6vw] md:text-[4vw] p-3 font-medium mt-3">
            <h1 className="text-center">
              "LA RECETA DE LA FELICIDAD <br /> LLEVA 12 HORAS DE AHUMADO."
            </h1>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 pt-10 pl-3">
        <div className="text-white  flex flex-col gap-3 pb-10 sm:flex-row-reverse sm:justify-center sm:gap-20">
          <div className="sign-up">
            <form className="flex flex-row gap-4 text-white font-medium">
              <input
                type="text"
                placeholder="Ingresa tu email"
                className="bg-inherit border-b-2"
              />
              <div className="bg-orange-500/80 hover:bg-orange-500 text-white font-bold p-2 rounded-md font-buttons">
                <a target="_blank" rel="noopener noreferrer" href="/">
                  Registrate!!
                </a>
              </div>
            </form>
          </div>
          <section>
            <div className="social-media mb-3 text-green-800 font-bold">
              <ul className="flex flex-row gap-3">
                <li className="hover:text-yellow-800/60 hover:font-extrabold transition duration-1000 delay-500">
                  <a href="/">
                    <p>FACEBOOK</p>
                  </a>
                </li>
                <li className="hover:text-yellow-800/60 hover:font-extrabold transition duration-1000 delay-500">
                  <a href="/">
                    <p>INSTAGRAM</p>
                  </a>
                </li>
                <li className="hover:text-yellow-800/60 hover:font-extrabold transition-all duration-1000 delay-500">
                  <a href="/">
                    <p>CONTACTO</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact-info flex flex-col gap-3 text-[#A7A69C]">
              <div className="flex flex-row gap-3">
                <p>Pucon, La Araucanía</p>
                <p>+56 9 84541821</p>
              </div>
              <div>
                <p>
                  LUNES <span>CERRADOS</span>
                </p>
                <p>
                  MARTES A DOMINGO <span>12 A 18 HRS</span>
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="copy-right text-white text-sm">
          <p className="pb-3">© 2023 Rumen Carnes Ahumadas</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
