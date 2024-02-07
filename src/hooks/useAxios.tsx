import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (isReady: boolean) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    if (isReady && typeof window !== "undefined") {
      const token = localStorage?.getItem("USER_TOKEN");
      setAccessToken(token);
    }
  }, [isReady]);

  const requester = axios.create({
    baseURL: "https://rumen-server.onrender.com",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return { requester };
};
