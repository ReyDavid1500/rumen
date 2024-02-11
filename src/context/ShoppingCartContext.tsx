import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { AuthData, Product, ShoppingCart } from "../Pages/Shopping";
import { User } from "../Components/Modal/SingInModal";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export type ShoppingCartContextType = {
  productQuantity: number | null;
  setProductQuantity: Dispatch<SetStateAction<number | null>>;
  shoppingCart: ShoppingCart | null;
  setShoppingCart: Dispatch<SetStateAction<ShoppingCart | null>>;
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  authData: AuthData | null;
  setAuthData: Dispatch<SetStateAction<AuthData | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  products: Product[] | null;
  setProducts: Dispatch<SetStateAction<Product[] | null>>;
};

export const ShoppingCartContext =
  createContext<ShoppingCartContextType | null>(null);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [productQuantity, setProductQuantity] = useState<number | null>(null);
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [authData, setAuthData] = useState<AuthData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[] | null>(null);

  return (
    <ShoppingCartContext.Provider
      value={{
        productQuantity,
        setProductQuantity,
        shoppingCart,
        setShoppingCart,
        user,
        setUser,
        authData,
        setAuthData,
        isLoading,
        setIsLoading,
        products,
        setProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}