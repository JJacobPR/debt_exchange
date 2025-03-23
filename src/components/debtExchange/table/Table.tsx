import { useFetch } from "@hooks/useFetch";
import Pagination from "../pagination/Pagination";
import styles from "./Table.module.scss";
import TableCategories from "./tableCategories/TableCategories";
import TableRecord from "./tableRecord/TableRecord";
import LoadingCircle from "@ui/loadingCircle/LoadingCircle";

type tableItem = {
  Id: number;
  Name: string;
  NIP: string;
  Value: string;
  Date: string;
};

const Table = () => {
  const { data, isPending, error } = useFetch<tableItem[]>("https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetTopDebts");

  return (
    <div className={styles["debt-table"]}>
      <TableCategories />
      {isPending && <LoadingCircle />}
      {!isPending && !error && data && data.map((item: tableItem) => <TableRecord key={item.Id} name={item.Name} nip={item.NIP} value={item.Value} date={item.Date} />)}
      <Pagination />
    </div>
  );
};

export default Table;
