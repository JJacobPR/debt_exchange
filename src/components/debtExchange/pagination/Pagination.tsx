import styles from "./Pagination.module.scss";

const Pagination = () => {
  return (
    <div className={styles["pagination"]}>
      <button className={styles["pagination-button"]}>1</button>
      <button className={styles["pagination-button"]}>2</button>
      <button className={styles["pagination-button"]}>3</button>
      <button className={styles["pagination-button"]}>4</button>
      <button className={styles["pagination-button"]}>10</button>
    </div>
  );
};

export default Pagination;
