import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { AuthData, ShoppingCart } from "../Pages/Shopping";
import { User } from "../Components/Modal/SingInModal";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export type ShoppingCartContextType = {
  productQuantity: number;
  setProductQuantity: Dispatch<SetStateAction<number>>;
  shoppingCart: ShoppingCart | null;
  setShoppingCart: Dispatch<SetStateAction<ShoppingCart | null>>;
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  authData: AuthData | null;
  setAuthData: Dispatch<SetStateAction<AuthData | null>>;
};

const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);

const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [productQuantity, setProductQuantity] = useState<number>(1);
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [authData, setAuthData] = useState<AuthData | null>(null);

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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
