import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DebtTable from "@components/debtTable/DebtTable";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DebtTable />
  </StrictMode>
);
