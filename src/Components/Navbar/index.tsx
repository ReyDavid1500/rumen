import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="grid grid-cols-2 grid-flow-row md:grid md:grid-cols-3 font-body">
      <section className="flex flex-row items-center p-4 mb-3 sm:pl-12 md:pl-[5rem] md:order-1">
        <div>
          <Link to="/">
            <img
              src="/rumen-logo.png"
              alt="Rumen Carnes Ahumadas"
              width={96}
              height={54}
            />
          </Link>
        </div>
      </section>
      <section className="flex flex-row items-center justify-end p-4 mb-3 sm:pr-12 md:pr-[7rem] md:order-3">
        <div className="bg-orange-500/80 hover:bg-orange-500 text-white font-bold p-2 rounded-md w-fit mt-3">
          <a target="_blank" rel="noopener noreferrer" href="/shopping">
            PIDE AQUÍ!!
          </a>
        </div>
      </section>
      <section className="col-span-2 md:col-span-1 bg-gray-300 text-gray-600 font-semibold md:w-[100%] md:bg-inherit md:m-auto md:order-2 sm:text-xl md:text-3xl z-10">
        <nav>
          <ul className="flex flex-row justify-around gap-3 xl:gap-[3.75rem] p-3 ">
            <li className="hover:text-black hidden md:block text-orange-900">
              <Link to="/">HOME</Link>
            </li>
            <li className="hover:text-black">
              <Link to="/locations">LOCALES</Link>
            </li>
            <li className="hover:text-black">
              <Link to="/menu">MENU</Link>
            </li>
            <li className="hover:text-black">
              <Link to="/about">NOSOTROS</Link>
            </li>
            <li className="hover:text-black">
              <Link to="/contact">CONTACTO</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Navbar;
