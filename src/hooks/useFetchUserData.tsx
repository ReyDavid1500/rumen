import { useContext, useEffect } from "react";
import { AuthData } from "../types";
import { useAxios } from "./useAxios";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../context/ShoppingCartContext";

function useFetchUserData() {
  const { requester } = useAxios();

  const {
    loggedIn,
    setLoggedUser,
    setShoppingCart,
    shoppingCart,
    order,
    setIsLoading,
  } = useContext(ShoppingCartContext) as ShoppingCartContextType;

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (token) {
      const savedToken: AuthData = JSON.parse(token);

      if (!savedToken) {
        return;
      }
      setLoggedUser(savedToken);

      const fetchCart = async () => {
        try {
          setIsLoading(true);
          const { data } = await requester.get(`/shopping-cart`);
          setShoppingCart(data);
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      };
      if (!shoppingCart && !order) fetchCart();
    }
  }, [loggedIn]);
}

export default useFetchUserData;
