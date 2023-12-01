export function Footer() {
  return (
    <footer className="bg-gray-800 pt-10 pl-3 font-body">
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
  );
}
