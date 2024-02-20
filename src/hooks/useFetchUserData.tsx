import { useContext, useEffect } from "react";
import { AuthData } from "../types";
import { useAxios } from "./useAxios";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../context/ShoppingCartContext";

function useFetchUserData() {
  const { requester } = useAxios();

  const { loggedIn, setLoggedUser, setShoppingCart } = useContext(
    ShoppingCartContext
  ) as ShoppingCartContextType;

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (token) {
      const savedToken: AuthData = JSON.parse(token);

      if (!savedToken) {
        return;
      }
      const fetchUser = async () => {
        try {
          const { data } = await requester.get(`/users/${savedToken._id}`, {
            headers: { Authorization: `Bearer ${savedToken.access_token}` },
          });
          setLoggedUser(data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchUser();

      const fetchCart = async () => {
        try {
          const { data } = await requester.get(
            `/shopping-cart/user/${savedToken._id}`,
            {
              headers: { Authorization: `Bearer ${savedToken.access_token}` },
            }
          );
          setShoppingCart(data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchCart();
    }
  }, [loggedIn]);
}

export default useFetchUserData;
