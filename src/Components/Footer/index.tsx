import { Link } from "react-router-dom";

function Footer() {
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
              <Link target="_blank" rel="noopener noreferrer" to="/signup">
                Registrate!!
              </Link>
            </div>
          </form>
        </div>
        <section>
          <div className="social-media mb-3 text-green-800 font-bold">
            <ul className="flex flex-row gap-3">
              <li className="hover:text-yellow-800/60 transform hover:scale-110 transition ease-out duration-1000">
                <Link
                  target="-blank"
                  rel="noreferrer"
                  to="https://web.facebook.com/profile.php?id=100021213121012"
                >
                  <p>FACEBOOK</p>
                </Link>
              </li>
              <li className="hover:text-yellow-800/60 transform hover:scale-110 transition ease-out duration-1000">
                <Link
                  target="-blank"
                  rel="noreferrer"
                  to="https://www.instagram.com/rumenahumados/"
                >
                  <p>INSTAGRAM</p>
                </Link>
              </li>
              <li className="hover:text-yellow-800/60 transform hover:scale-110 transition ease-out duration-1000">
                <Link to="/contact">
                  <p>CONTACTO</p>
                </Link>
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

export default Footer;
