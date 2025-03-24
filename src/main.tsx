import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DebtExchange from "@components/debtExchange/DebtExchange";
import { TableContextProvider } from "./store/tableContext";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TableContextProvider children={<DebtExchange />} />
  </StrictMode>
);
