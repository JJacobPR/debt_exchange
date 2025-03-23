import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DebtExchange from "@components/debtExchange/DebtExchange";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DebtExchange />
  </StrictMode>
);
