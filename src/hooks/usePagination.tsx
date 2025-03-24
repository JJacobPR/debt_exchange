import { useState } from "react";

const usePagination = <T,>(data: T[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  return {
    currentPage,
    totalPages,
    currentData,
    goToPage,
  };
};

export default usePagination;
