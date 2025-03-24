import Pagination from "../pagination/Pagination";
import styles from "./Table.module.scss";
import TableCategories from "./tableCategories/TableCategories";
import TableRecord from "./tableRecord/TableRecord";
import LoadingCircle from "@ui/loadingCircle/LoadingCircle";
import { useTableContext } from "@store/tableContext";
import { use, useEffect } from "react";

type tableItem = {
  Id: number;
  Name: string;
  NIP: string;
  Value: string;
  Date: string;
};

const Table = () => {
  const { rows: data, loading, error } = useTableContext();

  return (
    <div className={styles["debt-table"]}>
      <TableCategories />
      {loading && <LoadingCircle />}
      {!loading && !error && data && data.map((item: tableItem) => <TableRecord key={item.Id} name={item.Name} nip={item.NIP} value={item.Value} date={item.Date} />)}
      <Pagination />
    </div>
  );
};

export default Table;
