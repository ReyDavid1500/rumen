import { PropsWithChildren, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiTwotoneShopping } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../../context/ShoppingCartContext";
import { NextUIProvider } from "@nextui-org/react";

function ShopLayout({ children }: PropsWithChildren) {
  const {
    shoppingCart,
    setLoggedUser,
    setShoppingCart,
    setIsLoading,
    loggedIn,
    loggedUser,
    setLoggedIn,
    isLoading,
  } = useContext(ShoppingCartContext) as ShoppingCartContextType;

  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoading(true);
    localStorage.clear();
    setLoggedUser(null);
    setLoggedIn(null);
    setShoppingCart(null);
    setIsLoading(false);
    navigate("/shopping");
  };
  return (
    <>
      <header className="w-[100%] sticky sm:fixed z-10">
        <section className="flex flex-row justify-between p-4 items-center bg-light-green">
          <div className="self-baseline">
            <Link to="/shopping">
              <img
                loading="lazy"
                src="/rumen-logo.png"
                alt="Rumen Carnes Ahumadas"
                width={96}
                height={54}
              />
            </Link>
          </div>
          <div className="flex flex-col gap-3 items-center sm:flex-row">
            {loggedIn || loggedUser ? (
              <div className="flex flex-row gap-2 order-2">
                <div className="border-2 border-light-orange p-2 rounded-lg">
                  <p className="text-white font-bold text-sm md:text-xl">
                    Hola!, {loggedIn?.name || loggedUser?.name}
                  </p>
                </div>
                <Link to="/cart" className="relative">
                  <AiTwotoneShopping className="w-[50px] h-[50px]" />
                  <span className="absolute text-rumen-orange font-bold top-[18px] left-[19px]">
                    {shoppingCart?.products.length || 0}
                  </span>
                </Link>
                <div className="flex flex-row items-center w-full justify-end sm:order-2 sm:w-fit">
                  <button onClick={handleLogout}>
                    <IoLogOutOutline className="w-[40px] h-[40px]" />
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </section>
      </header>
      <div className={isLoading ? "" : "sm:pt-20 pb-8 p-0 h-[100%]"}>
        <NextUIProvider>{children}</NextUIProvider>
      </div>
    </>
  );
}

export default ShopLayout;
