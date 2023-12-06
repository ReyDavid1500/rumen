import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneShopping } from "react-icons/ai";
import { LuMenu } from "react-icons/lu";

function ShopLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <header className="w-[100%] fixed">
        <section className="flex flex-row justify-between p-4 items-center bg-[#5dc3bc]">
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
            <Link to="/cart">
              <AiTwotoneShopping className="w-[40px] h-[40px]" />
            </Link>
            <Link to="/shopping">
              <LuMenu className="w-[40px] h-[40px]" />
            </Link>
          </div>
        </section>
      </header>
      <div className="pt-20">{children}</div>
    </div>
  );
}

export default ShopLayout;
