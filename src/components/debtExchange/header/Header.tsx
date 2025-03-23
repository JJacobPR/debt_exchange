import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles["header-wrapper"]}>
      <header className={styles["header"]}>
        <div className="header__title">Podaj NIP lub nazwę użytkownika</div>
        <form className="header__actions">
          <input type="text" />
          <button>Szukaj</button>
        </form>
      </header>
    </div>
  );
};

export default Header;
