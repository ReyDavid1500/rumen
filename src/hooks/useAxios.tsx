import { useState, useEffect } from "react";
import axios from "axios";
import { AuthData } from "../types";

export const useAxios = () => {
  const [savedToken, setSavedToken] = useState<AuthData | null>(null);

  useEffect(() => {
    const token = localStorage?.getItem("TOKEN");
    if (token !== null) setSavedToken(JSON.parse(token));
  }, []);

  const requester = axios.create({
    baseURL: "https://rumen-server.onrender.com",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${savedToken?.access_token}`,
    },
  });

  return { requester };
};
