import { PropsWithChildren } from "react";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

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
              <LuMenu className="w-[40px] h-[40px] text-white" />
            </Link>
          </div>
        </section>
      </header>
      <div className="pt-20">{children}</div>
    </div>
  );
}

export default RumenLayout;
