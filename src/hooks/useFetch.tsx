import { useState, useEffect } from "react";

export const useFetch = <T,>(url: string, method: string = "GET", body?: object) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const options: RequestInit = {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          ...(body && { body: JSON.stringify(body) }),
        };

        const response = await fetch(url, options);

        if (!response.ok) throw new Error(response.statusText);

        const json: T = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(`${err} Could not Fetch Data`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]);

  return { data, isLoading, error };
};
