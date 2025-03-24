import { useFetch } from "@hooks/useFetch";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type tableItem = {
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
  searchRows: (phrase: string) => void;
  sortRows: (key: keyof tableItem, order: "asc" | "desc") => void;
  getTop10Debts: () => void;
};

const TableContext = createContext<tableContextType | null>(null);

export const TableContextProvider = ({ children }: { children: ReactNode }) => {
  const [rows, setRows] = useState<tableItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);

  const { data, isLoading, error: fetchError } = useFetch<tableItem[]>("https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetTopDebts");

  useEffect(() => {
    if (data) {
      setRows(data.sort((a, b) => (a.Name < b.Name ? -1 : 1)));
    }

    setLoading(isLoading);

    if (fetchError) {
      setError(fetchError);
    }
  }, [data, isLoading, fetchError]);

  const sortRows = (key: keyof tableItem, order: "asc" | "desc" = "asc") => {
    const sortedRows = [...rows].sort((a, b) => {
      if (a[key] < b[key]) {
        return order === "asc" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return order === "asc" ? 1 : -1;
      }
      return 0;
    });
    setRows(sortedRows);
  };

  const getTop10Debts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetTopDebts");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setRows(data);
      setError(undefined);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const searchRows = async (phrase: string) => {
    setLoading(true);
    try {
      const response = await fetch("https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetFilteredDebts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phrase }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setRows(data);
      setError(undefined);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return <TableContext.Provider value={{ rows, loading, error, searchRows, sortRows, getTop10Debts }}>{children}</TableContext.Provider>;
};

export const useTableContext = () => {
  const tableContext = useContext(TableContext);

  if (!tableContext) {
    throw new Error("useTableContext must be used within a TableContextProvider");
  }

  return tableContext;
};
