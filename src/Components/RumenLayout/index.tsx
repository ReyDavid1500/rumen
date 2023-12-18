import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";

function RumenLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <header className="w-[100%] fixed">
        <section className="flex flex-row justify-between p-4 items-center bg-dark-blue">
          <div>
            <Link to="/rumen-account">
              <img
                src="/rumen-logo.png"
                alt="Rumen Carnes Ahumadas"
                width={96}
                height={54}
              />
            </Link>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <Link to="/rumen-account">
              <HiOutlineLogout className="text-white w-9 h-9 cursor-pointer" />
            </Link>
          </div>
        </section>
      </header>
      <div className="pt-20">{children}</div>
    </div>
  );
}

export default RumenLayout;
