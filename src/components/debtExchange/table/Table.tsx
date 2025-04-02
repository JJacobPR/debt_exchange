import Pagination from "../pagination/Pagination";
import styles from "./Table.module.scss";
import TableCategories from "./tableCategories/TableCategories";
import TableRecord from "./tableRecord/TableRecord";
import LoadingCircle from "@ui/loadingCircle/LoadingCircle";
import { useTableContext } from "@store/useTableContext";
import usePagination from "@hooks/usePagination";

type tableItem = {
  Id: number;
  Name: string;
  NIP: string;
  Value: string;
  Date: string;
};

const Table = () => {
  const { rows: data, loading, error } = useTableContext();
  const { currentPage, totalPages, currentData, goToPage } = usePagination(data, 10);

  return (
    <div className={styles["debt-table"]}>
      <TableCategories />
      {loading && <LoadingCircle />}
      {error && <p className={styles["error"]}>Error, try again later</p>}
      {!loading && !error && data && currentData.map((item: tableItem) => <TableRecord key={item.Id} name={item.Name} nip={item.NIP} value={item.Value} date={item.Date} />)}
      {!loading && !error && data && data.length === 0 && <p className={styles["no-data"]}>No results for your search parameters</p>}
      {!loading && !error && totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />}
    </div>
  );
};

export default Table;
