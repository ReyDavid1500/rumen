import { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneShopping } from "react-icons/ai";
import { LuMenu } from "react-icons/lu";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../../context/ShoppingCartContext";
import { NextUIProvider } from "@nextui-org/react";

type ShopLayoutProps = {
  children: ReactNode;
};

function ShopLayout({ children }: ShopLayoutProps) {
  const { authData, user, shoppingCart } = useContext(
    ShoppingCartContext
  ) as ShoppingCartContextType;

  return (
    <>
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
            {user && (
              <div className="border-2 border-light-orange p-2 rounded-lg">
                <p className="text-white font-bold text-xl">
                  Hola!, {authData?.name}
                </p>
              </div>
            )}
            <Link to="/cart" className="relative">
              <AiTwotoneShopping className="w-[50px] h-[50px]" />
              <span className="absolute text-rumen-orange font-bold top-[18px] left-[19px]">
                {shoppingCart?.products.length || 0}
              </span>
            </Link>
            <Link to="/shopping">
              <LuMenu className="w-[40px] h-[40px]" />
            </Link>
          </div>
        </section>
      </header>
      <div className="pt-20 h-[100%]">
        <NextUIProvider>{children} </NextUIProvider>
      </div>
    </>
  );
}

export default ShopLayout;
