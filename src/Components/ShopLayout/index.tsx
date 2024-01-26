import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneShopping } from "react-icons/ai";
import { LuMenu } from "react-icons/lu";

function ShopLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-[100vh]">
      <header className="w-[100%] fixed">
        <section className="flex flex-row justify-between p-4 items-center bg-light-green">
          <div>
            <Link to="/shopping">
              <img
                src="/rumen-logo.png"
                alt="Rumen Carnes Ahumadas"
                width={96}
                height={54}
              />
            </Link>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <Link to="/cart" className="relative">
              <AiTwotoneShopping className="w-[40px] h-[40px]" />
              <span className="absolute text-rumen-orange font-bold top-[12px] left-[15px]">
                3
              </span>
            </Link>
            <Link to="/shopping">
              <LuMenu className="w-[40px] h-[40px]" />
            </Link>
          </div>
        </section>
      </header>
      <div className="pt-20 h-[100%]">{children}</div>
    </div>
  );
}

export default ShopLayout;
