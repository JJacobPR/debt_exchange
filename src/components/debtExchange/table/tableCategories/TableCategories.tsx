import { useState } from "react";
import styles from "./TableCategories.module.scss";
import { useTableContext } from "@store/tableContext";

type sortType = "asc" | "desc" | "none";

const TableCategories = () => {
  const { sortRows } = useTableContext();
  const [debtorSort, setDebtorSort] = useState<sortType>("asc");
  const [nipSort, setNipSort] = useState<sortType>("none");
  const [valueSort, setValueSort] = useState<sortType>("none");
  const [dateSort, setDateSort] = useState<sortType>("none");

  const updateDebtorSort = () => {
    if (debtorSort === "asc") {
      setDebtorSort("desc");
      sortRows("Name", "desc");
    } else {
      setDebtorSort("asc");
      sortRows("Name", "asc");
    }
    setNipSort("none");
    setValueSort("none");
    setDateSort("none");
  };

  const updateNipSort = () => {
    if (nipSort === "asc") {
      setNipSort("desc");
      sortRows("NIP", "desc");
    } else {
      setNipSort("asc");
      sortRows("NIP", "asc");
    }
    setDebtorSort("none");
    setValueSort("none");
    setDateSort("none");
  };

  const updateValueSort = () => {
    if (valueSort === "asc") {
      setValueSort("desc");
      sortRows("Value", "desc");
    } else {
      setValueSort("asc");
      sortRows("Value", "asc");
    }
    setDebtorSort("none");
    setNipSort("none");
    setDateSort("none");
  };

  const updateDateSort = () => {
    if (dateSort === "asc") {
      setDateSort("desc");
      sortRows("Date", "desc");
    } else {
      setDateSort("asc");
      sortRows("Date", "asc");
    }
    setDebtorSort("none");
    setNipSort("none");
    setValueSort("none");
  };

  return (
    <div className={styles["debt-table-categories"]}>
      <div className={styles["debt-table-categories-content"]}>
        <p onClick={updateDebtorSort} className={`${styles["debt-table-categories-debtor"]} ${styles[debtorSort]}`}>
          Dłużnik
        </p>
        <p onClick={updateNipSort} className={`${styles["debt-table-categories-nip"]} ${styles[nipSort]}`}>
          NIP
        </p>
        <p onClick={updateValueSort} className={`${styles["debt-table-categories-value"]} ${styles[valueSort]}`}>
          KWOTA ZADŁUŻENIA
        </p>
        <p onClick={updateDateSort} className={`${styles["debt-table-categories-date"]} ${styles[dateSort]}`}>
          DATA POWSTANIA ZOBOWIĄZANIA
        </p>
      </div>
      <hr className={styles["debt-table-categories-line"]} />
    </div>
  );
};

export default TableCategories;
