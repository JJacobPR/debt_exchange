import styles from "./TableRecord.module.scss";

type tableRecordProps = {
  name: string;
  nip: string;
  value: string;
  date: string;
};

const TableRecord = ({ name, nip, value, date }: tableRecordProps) => {
  return (
    <div className={styles["debt-table-record"]}>
      <div className={styles["debt-table-record-content"]}>
        <p>{name}</p>
        <p>{nip}</p>
        <p>{value}</p>
        <p>
          {new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
            .format(new Date(date))
            .replace(/\//g, "-")}
        </p>
      </div>
      <hr className={styles["debt-table-record-line"]} />
    </div>
  );
};

export default TableRecord;
