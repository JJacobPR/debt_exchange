import styles from "./Pagination.module.scss";

type paginationProps = {
  totalPages: number;
  currentPage: number;
  goToPage: (page: number) => void;
};

const Pagination = ({ totalPages, currentPage, goToPage }: paginationProps) => {
  return (
    <div className={styles["pagination"]}>
      {Array.from({ length: totalPages }, (_, index) => index + 1)
        .filter((page) => totalPages <= 3 || Math.abs(page - currentPage) <= 1)
        .map((page) => (
          <button key={page} className={`${styles["pagination-button"]} ${page === currentPage ? styles["active"] : ""}`} onClick={() => goToPage(page)} disabled={page === currentPage}>
            {page}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
