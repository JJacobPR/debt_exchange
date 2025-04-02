import { useState } from "react";
import styles from "./TableCategories.module.scss";
import { tableItem } from "@store/tableContext";
import { useTableContext } from "@store/useTableContext";

const TableCategories = () => {
  const { sortRows } = useTableContext();
  const [sortState, setSortState] = useState<Omit<tableItem, "Id">>({
    Name: "asc",
    NIP: "none",
    Value: "none",
    Date: "none",
  });

  const updateSort = (field: keyof Omit<tableItem, "Id">) => {
    setSortState((prev) => {
      const newSort = prev[field] === "asc" ? "desc" : "asc";

      return {
        Name: "none",
        NIP: "none",
        Value: "none",
        Date: "none",
        [field]: newSort,
      };
    });

    sortRows(field, sortState[field] === "asc" ? "desc" : "asc");
  };

  return (
    <div className={styles["debt-table-categories"]}>
      <div className={styles["debt-table-categories-content"]}>
        <p onClick={() => updateSort("Name")} className={`${styles["debt-table-categories-debtor"]} ${styles[sortState.Name]}`}>
          Debtor
        </p>
        <p onClick={() => updateSort("NIP")} className={`${styles["debt-table-categories-nip"]} ${styles[sortState.NIP]}`}>
          NIP
        </p>
        <p onClick={() => updateSort("Value")} className={`${styles["debt-table-categories-value"]} ${styles[sortState.Value]}`}>
          Amount
        </p>
        <p onClick={() => updateSort("Date")} className={`${styles["debt-table-categories-date"]} ${styles[sortState.Date]}`}>
          Date
        </p>
      </div>
      <hr className={styles["debt-table-categories-line"]} />
    </div>
  );
};

export default TableCategories;
