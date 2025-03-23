import styles from "./TableCategories.module.scss";

const TableCategories = () => {
  return (
    <div className={styles["debt-table-categories"]}>
      <div className={styles["debt-table-categories-content"]}>
        <p className={styles["debt-table-categories-debtor"]}>Dłużnik</p>
        <p className={styles["debt-table-categories-nip"]}>NIP</p>
        <p className={styles["debt-table-categories-amount"]}>KWOTA ZADŁUŻENIA</p>
        <p className={styles["debt-table-categories-date"]}>DATA POWSTANIA ZOBOWIĄZANIA</p>
      </div>
      <hr className={styles["debt-table-categories-line"]} />
    </div>
  );
};

export default TableCategories;
