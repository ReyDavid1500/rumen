import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { AuthData, LoggedUser, Product, ShoppingCart } from "../types";
import { useAxios } from "../hooks/useAxios";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export type ShoppingCartContextType = {
  shoppingCart: ShoppingCart | null;
  setShoppingCart: Dispatch<SetStateAction<ShoppingCart | null>>;
  loggedIn: AuthData | null;
  setLoggedIn: Dispatch<SetStateAction<AuthData | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  products: Product[] | null;
  setProducts: Dispatch<SetStateAction<Product[] | null>>;
  loggedUser: LoggedUser | null;
  setLoggedUser: Dispatch<SetStateAction<LoggedUser | null>>;
  handlerDeleteProduct: (productId: string) => Promise<void>;
};

export const ShoppingCartContext =
  createContext<ShoppingCartContextType | null>(null);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart | null>(null);
  const [loggedIn, setLoggedIn] = useState<AuthData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loggedUser, setLoggedUser] = useState<LoggedUser | null>(null);

  const { requester } = useAxios();

  const handlerDeleteProduct = async (productId: string) => {
    try {
      setIsLoading(true);

      const { data } = await requester.delete(
        `/shopping-cart/${shoppingCart?._id}/product/${productId}`
      );
      setShoppingCart(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        loggedIn,
        setLoggedIn,
        isLoading,
        setIsLoading,
        products,
        setProducts,
        loggedUser,
        setLoggedUser,
        handlerDeleteProduct,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
