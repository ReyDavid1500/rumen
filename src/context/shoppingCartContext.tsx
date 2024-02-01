import { ReactNode, createContext } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {};

const ShoppingCartContext = createContext<ShoppingCartContext | null>(null);

const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
