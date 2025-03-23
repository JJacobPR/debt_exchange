import styles from "./TableRecord.module.scss";

const TableRecord = () => {
  return (
    <div className={styles["debt-table-record"]}>
      <div className={styles["debt-table-record-content"]}>
        <p>[Name]</p>
        <p>[NIP]</p>
        <p>[Value]</p>
        <p>[Date]</p>
      </div>
      <hr className={styles["debt-table-record-line"]} />
    </div>
  );
};

export default TableRecord;
