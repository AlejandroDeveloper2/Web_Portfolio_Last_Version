import { ArrowLeft, ArrowRight } from "iconoir-react";

import { PaginationProps } from "@interfaces/component-types";

import { useThemeStore } from "@store/index";

import { IconOnlyButton } from "@components/index";

import styles from "./Pagination.module.css";

const Pagination = ({
  currentPage,
  pageButtons,
  nextPage,
  prevPage,
  goExactPage,
}: PaginationProps): JSX.Element => {
  const { theme } = useThemeStore();

  return (
    <menu className={styles.paginationContainer}>
      <IconOnlyButton
        Icon={ArrowLeft}
        type="button"
        title="Pagina anterior"
        name="btn-back"
        variant="solid"
        onClick={prevPage}
      />
      <ul className={styles.pageButtons}>
        {pageButtons.map((pageButton) => (
          <li key={pageButton.index}>
            <button
              type="button"
              className={styles.pageButton}
              style={{
                borderColor: `var(--${theme})`,
                backgroundColor:
                  currentPage === pageButton.index
                    ? `var(--${theme})`
                    : "var(--bg-color)",
                boxShadow:
                  currentPage === pageButton.index
                    ? `0 0 10px 2px var(--${theme})`
                    : "none",
              }}
              onClick={() => goExactPage(pageButton)}
            >
              <span
                style={{
                  color:
                    currentPage === pageButton.index
                      ? "var(--bg-color)"
                      : "var(--white)",
                }}
              >
                {pageButton.index}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <IconOnlyButton
        Icon={ArrowRight}
        type="button"
        title="Siguiente pagina"
        name="btn-next"
        variant="solid"
        onClick={nextPage}
      />
    </menu>
  );
};

export default Pagination;
