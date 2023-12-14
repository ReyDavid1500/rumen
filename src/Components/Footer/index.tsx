import { Link } from "react-router-dom";
import Button from "../coreComponents/Button";

function Footer() {
  return (
    <footer className="bg-dark-blue pt-10 pl-3 font-body">
      <div className="text-white  flex flex-col gap-3 pb-10 sm:flex-row-reverse sm:justify-center sm:gap-20">
        <div className="sign-up">
          <form className="flex flex-row gap-4 text-white font-medium">
            <input
              type="text"
              placeholder="Ingresa tu email"
              className="bg-inherit border-b-2"
            />
            <Button title="REGISTRATE!!" target="_blank" route="/signup" />
          </form>
        </div>
        <section>
          <div className="social-media mb-3 text-light-orange font-bold">
            <ul className="flex flex-row gap-3">
              <li className="hover:text-light-orange/60 transform hover:scale-110 transition ease-out duration-1000">
                <Link
                  target="-blank"
                  rel="noreferrer"
                  to="https://web.facebook.com/profile.php?id=100021213121012"
                >
                  <p>FACEBOOK</p>
                </Link>
              </li>
              <li className="hover:text-light-orange/60 transform hover:scale-110 transition ease-out duration-1000">
                <Link
                  target="-blank"
                  rel="noreferrer"
                  to="https://www.instagram.com/rumenahumados/"
                >
                  <p>INSTAGRAM</p>
                </Link>
              </li>
              <li className="hover:text-light-orange/60 transform hover:scale-110 transition ease-out duration-1000">
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
