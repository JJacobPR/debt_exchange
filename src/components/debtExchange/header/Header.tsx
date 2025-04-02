import { useTableContext } from "@store/useTableContext";
import styles from "./Header.module.scss";
import { useState } from "react";

const Header = () => {
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const { searchRows, getTop10Debts } = useTableContext();
  const [warning, setWarning] = useState<boolean>(false);

  const submitSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchPhrase.length < 3 && searchPhrase.length > 0) {
      setWarning(true);
      const timer = setTimeout(() => {
        setWarning(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    } else if (searchPhrase.length === 0) getTop10Debts();
    else searchRows(searchPhrase);
  };

  return (
    <div className={styles["header-wrapper"]}>
      <header className={styles["header"]}>
        <h4>Provide NIP or name</h4>
        <form onSubmit={submitSearchForm}>
          <input type="text" onChange={(e) => setSearchPhrase(e.target.value)} />
          <button type="submit">Search</button>
        </form>
        <p className={`${styles["warning"]} ${warning && styles["warning-fade-in"]}`}>Provide at least 3 characters</p>
      </header>
    </div>
  );
};

export default Header;
