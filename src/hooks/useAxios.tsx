import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage?.getItem("TOKEN");
    setAccessToken(token);
  }, []);

  const requester = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      "content-type": "application/json",
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  });

  return { requester };
};
