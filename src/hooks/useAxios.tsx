import axios from "axios";
import { AuthData } from "../types";

export const useAxios = () => {
  const token = localStorage.getItem("TOKEN") as string;
  const savedToken: AuthData = JSON.parse(token);

  const devURL = import.meta.env.VITE_DEV_URL;
  const productionURL = import.meta.env.VITE_PRODUCTION_URL;

  const baseURL =
    import.meta.env.MODE === "production" ? productionURL : devURL;

  const requester = axios.create({
    baseURL,
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${savedToken?.access_token}`,
    },
  });

  return { requester };
};
