import Header from "./header/Header";
import styles from "./DebtExchange.module.scss";
import Table from "./table/Table";

const DebtExchange = () => {
  return (
    <div className={styles["debt-table-wrapper"]}>
      <div className={styles["debt-table"]}>
        <Header />
        <Table />
      </div>
    </div>
  );
};

export default DebtExchange;
