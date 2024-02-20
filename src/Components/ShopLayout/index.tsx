import { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneShopping } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
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
  const {
    shoppingCart,
    setLoggedUser,
    setShoppingCart,
    setIsLoading,
    loggedIn,
    loggedUser,
  } = useContext(ShoppingCartContext) as ShoppingCartContextType;

  const handleLogout = () => {
    setIsLoading(true);
    localStorage.clear();
    setLoggedUser(null);
    setShoppingCart(null);
    setIsLoading(false);
  };
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
            {loggedIn || loggedUser ? (
              <>
                <div className="border-2 border-light-orange p-2 rounded-lg">
                  <p className="text-white font-bold text-xl">
                    Hola!, {loggedIn?.name || loggedUser?.name}
                  </p>
                </div>
                <button onClick={handleLogout}>
                  <IoLogOutOutline className="w-[40px] h-[40px]" />
                </button>
              </>
            ) : (
              ""
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
