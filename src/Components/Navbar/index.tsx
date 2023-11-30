export function Navbar() {
  return (
    <header className="grid grid-cols-2 grid-flow-row xl:grid xl:grid-cols-3">
      <section className="flex flex-row items-center p-4 mb-3 sm:pl-12 md:pl-40 xl:order-1">
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
      <section className="flex flex-row items-center justify-end p-4 mb-3 sm:pr-12 md:pr-[8rem] xl:order-3">
        <div className="bg-orange-500/80 hover:bg-orange-500 text-white font-bold p-2 rounded-md w-fit mt-3">
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
  );
}
