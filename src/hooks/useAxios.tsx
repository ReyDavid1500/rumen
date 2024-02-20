import { useState, useEffect } from "react";
import axios from "axios";
import { AuthData } from "../Pages/Shopping";

export const useAxios = () => {
  const [savedToken, setSavedToken] = useState<AuthData | null>(null);

  useEffect(() => {
    const token = localStorage?.getItem("TOKEN");
    if (token !== null) setSavedToken(JSON.parse(token));
  }, []);

  const requester = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${savedToken?.access_token}`,
    },
  });

  return { requester };
};
