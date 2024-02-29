import axios from "axios";
import { AuthData } from "../types";

export const useAxios = () => {
  const token = localStorage.getItem("TOKEN") as string;
  const savedToken: AuthData = JSON.parse(token);

  const devURL = "http://localhost:3000";
  const productionURL = "https://rumen-server.onrender.com";

  const baseURL =
    process.env.NODE_ENV === "production" ? productionURL : devURL;

  const requester = axios.create({
    baseURL,
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${savedToken?.access_token}`,
    },
  });

  return { requester };
};
