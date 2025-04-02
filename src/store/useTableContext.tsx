import { TableContext } from "./tableContext";
import { useContext } from "react";

export const useTableContext = () => {
  const tableContext = useContext(TableContext);

  if (!tableContext) {
    throw new Error("useTableContext must be used within a TableContextProvider");
  }

  return tableContext;
};
