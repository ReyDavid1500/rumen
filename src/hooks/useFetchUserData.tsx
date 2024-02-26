import { useContext, useEffect } from "react";
import { AuthData } from "../types";
import { useAxios } from "./useAxios";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../context/ShoppingCartContext";

function useFetchUserData() {
  const { requester } = useAxios();

  const { loggedIn, setLoggedUser, setShoppingCart, shoppingCart, order } =
    useContext(ShoppingCartContext) as ShoppingCartContextType;

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
          const { data } = await requester.get(`/shopping-cart`, {
            headers: { Authorization: `Bearer ${savedToken.access_token}` },
          });
          setShoppingCart(data);
        } catch (err) {
          console.log(err);
        }
      };
      if (!shoppingCart && !order) fetchCart();
    }
  }, [loggedIn]);
}

export default useFetchUserData;
