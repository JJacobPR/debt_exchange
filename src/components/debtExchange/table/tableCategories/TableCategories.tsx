import styles from "./TableCategories.module.scss";

const TableCategories = () => {
  return (
    <div className={styles["debt-table-categories"]}>
      <div className={styles["debt-table-categories-content"]}>
        <p className={styles["debt-table-categories-debtor"]}>Dłużnik</p>
        <p>NIP</p>
        <p>KWOTA ZADŁUŻENIA</p>
        <p>DATA POWSTANIA ZOBOWIĄZANIA</p>
      </div>
      <hr className={styles["debt-table-categories-line"]} />
    </div>
  );
};

export default TableCategories;
