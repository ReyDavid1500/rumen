import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../coreComponents/Button";

function Footer() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const navigate = useNavigate();

  const handlerEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };

  const handleSubmit = () => {
    navigate(`/signup?email=${encodeURIComponent(userEmail || "")}`);
  };

  return (
    <footer className="bg-dark-blue pt-10 pl-3 font-body flex flex-col items-center md:text-xl">
      <div className="text-white  flex flex-col gap-3 pb-10 sm:flex-row-reverse sm:justify-center sm:gap-20">
        <div className="sign-up">
          <form className="flex flex-col md:flex-row items-start gap-4 text-white font-medium">
            <div className="flex flex-col gap-4">
              <label className="xl:text-2xl">
                Registrate para hacer tus pedidos!!
              </label>
              <input
                type="text"
                placeholder="Ingresa tu correo electrónico"
                className="bg-inherit border-b-2 p-2"
                onChange={handlerEmail}
              />
            </div>
            <Button
              styles="self-center md:self-end"
              onClick={handleSubmit}
              title="Registrate!!"
            />
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
