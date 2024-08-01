import { useEffect, useState } from "react";

import { PageButton } from "@interfaces/data-types";

const usePagination = (totalRecords: number) => {
  const [itemsPerPage] = useState<number>(2);

  const [totalPages, setTotalPages] = useState<number>(0);
  const [from, setFrom] = useState<number>(0);
  const [to, setTo] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageButtons, setPageButtons] = useState<PageButton[]>([]);

  useEffect(() => {
    setTotalPages(Math.floor(totalRecords / itemsPerPage));
  }, [itemsPerPage, totalRecords]);

  useEffect(() => {
    const getPagesButtons = (): void => {
      let from: number = 0,
        to: number = 1,
        index: number = 1;
      const newPages: PageButton[] = [];

      const initialPageButtons: PageButton[] = new Array<PageButton>(
        totalPages
      ).fill({ from, to, index });
      initialPageButtons.forEach((pageButton, i) => {
        if (i > 0) {
          from += itemsPerPage;
          to += itemsPerPage;
          index += 1;
        }
        newPages.push({
          ...pageButton,
          from,
          to,
          index,
        });
      });
      setPageButtons(newPages);
    };
    getPagesButtons();
  }, [itemsPerPage, totalPages]);

  const goExactPage = (page: PageButton): void => {
    setCurrentPage(page.index);
    setFrom(page.from);
    setTo(page.to);
  };

  const nextPage = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage((prevState) => prevState + 1);
      setFrom((prevState) => prevState + itemsPerPage);
      setTo((prevState) => prevState + itemsPerPage);
    }
  };

  const prevPage = (): void => {
    if (currentPage <= totalPages && currentPage > 1) {
      setCurrentPage((prevState) => prevState - 1);
      setFrom((prevState) => prevState - itemsPerPage);
      setTo((prevState) => prevState - itemsPerPage);
    }
  };

  return {
    from,
    to,
    currentPage,
    totalPages,
    pageButtons,
    goExactPage,
    nextPage,
    prevPage,
  };
};

export default usePagination;
