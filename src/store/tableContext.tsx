import { useFetch } from "@hooks/useFetch";
import { createContext, ReactNode, useEffect, useState } from "react";

export type tableItem = {
  Id: number;
  Name: string;
  NIP: string;
  Value: string;
  Date: string;
};

type tableContextType = {
  rows: tableItem[];
  loading?: boolean;
  error?: string;
  currentSearchKey?: keyof tableItem;
  currentSearchOrder?: "asc" | "desc";
  searchRows: (phrase: string) => void;
  sortRows: (key: keyof tableItem, order: "asc" | "desc") => void;
  getTop10Debts: () => void;
};

export const TableContext = createContext<tableContextType | null>(null);

export const TableContextProvider = ({ children }: { children: ReactNode }) => {
  const [rows, setRows] = useState<tableItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);
  const [currentOrderKey, setCurrentOrderKey] = useState<keyof tableItem>("Name");
  const [currentOrder, setCurrentOrder] = useState<"asc" | "desc">("asc");

  const { data, isLoading, error: fetchError } = useFetch<tableItem[]>("https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetTopDebts");

  useEffect(() => {
    if (data) {
      setRows(sortData(data, currentOrderKey, currentOrder));
    }

    setLoading(isLoading);

    if (fetchError) {
      setError(fetchError);
    }
  }, [data, isLoading, fetchError]);

  const setOrderOptions = (key: keyof tableItem, order: "asc" | "desc") => {
    setCurrentOrderKey(key);
    setCurrentOrder(order);
    setRows(sortData(rows, key, order));
  };

  const sortData = (data: tableItem[], key: keyof tableItem, order: "asc" | "desc") => {
    return [...data].sort((a, b) => (a[key] < b[key] ? (order === "asc" ? -1 : 1) : a[key] > b[key] ? (order === "asc" ? 1 : -1) : 0));
  };

  const fetchData = async (url: string, options?: RequestInit) => {
    try {
      setLoading(true);
      const response = await fetch(url, options);

      if (!response.ok) throw new Error("Failed to fetch data");

      const data: tableItem[] = await response.json();
      setLoading(false);
      setError(undefined);
      return sortData(data, currentOrderKey, currentOrder);
    } catch (err) {
      setLoading(false);
      setError(err instanceof Error ? err.message : "Unknown error");
      return [];
    }
  };

  const getTop10Debts = async () => {
    setRows(await fetchData("https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetTopDebts"));
  };

  const sortRows = async (key: keyof tableItem, order: "asc" | "desc") => {
    setOrderOptions(key, order);
    setRows(sortData(rows, key, order));
  };

  const searchRows = async (phrase: string) => {
    const body = JSON.stringify({ phrase });
    setRows(
      await fetchData("https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetFilteredDebts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      })
    );
  };

  return <TableContext.Provider value={{ rows, loading, error, searchRows, sortRows, getTop10Debts }}>{children}</TableContext.Provider>;
};
