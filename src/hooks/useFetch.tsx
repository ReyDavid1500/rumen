import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export interface Product {
  _id: string;
  name: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  inStock?: boolean;
}

export const client = axios.create({
  baseURL: "http://localhost:3000",
});

export default function useFetch(url: string) {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<Error | AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const { data } = await client.get(url);
        setData(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}
