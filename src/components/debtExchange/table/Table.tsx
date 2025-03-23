import Pagination from "../pagination/Pagination";
import styles from "./Table.module.scss";
import TableCategories from "./tableCategories/TableCategories";
import TableRecord from "./tableRecord/TableRecord";

const Table = () => {
  return (
    <div className={styles["debt-table"]}>
      <TableCategories />
      <TableRecord />
      <TableRecord />
      <TableRecord />
      <TableRecord />
      <TableRecord />
      <TableRecord />
      <TableRecord />
      <TableRecord />
      <TableRecord />
      <TableRecord />
      <Pagination />
    </div>
  );
};

export default Table;
