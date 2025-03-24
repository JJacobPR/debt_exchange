import { useTableContext } from "@store/tableContext";
import styles from "./Header.module.scss";
import { useState } from "react";

const Header = () => {
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const { searchRows } = useTableContext();

  const submitSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRows(searchPhrase);
  };

  return (
    <div className={styles["header-wrapper"]}>
      <header className={styles["header"]}>
        <h4>Podaj NIP lub nazwę użytkownika</h4>
        <form onSubmit={submitSearchForm}>
          <input type="text" onChange={(e) => setSearchPhrase(e.target.value)} />
          <button type="submit">Szukaj</button>
        </form>
      </header>
    </div>
  );
};

export default Header;
