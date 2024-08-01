import { GridBgProps } from "@interfaces/component-types";

import { getGrid } from "@helpers/index";
import { useThemeStore } from "@store/index";

import styles from "./GridBg.module.css";

const GridBg = ({
  rows,
  columns,
  spacing,
  grossor,
  style,
}: GridBgProps): JSX.Element => {
  const { rowsArray, columnsArray } = getGrid(rows, columns);
  const { theme } = useThemeStore();

  return (
    <div className={styles.gridContainer} style={style}>
      <div
        className={styles.rows}
        style={{ backgroundColor: `var(--bg-color)` }}
      >
        {rowsArray.map((_, i) => (
          <div
            key={i}
            className={styles.row}
            style={{
              borderColor: `var(--${theme}-opacity-5)`,
              height: spacing,
              gap: spacing,
              borderWidth: `${grossor}px`,
              borderStyle: "solid",
            }}
          >
            {columnsArray.map((_, x) => (
              <div
                key={x}
                style={{
                  borderColor: `var(--${theme}-opacity-5)`,
                  height: spacing,
                  width: grossor,
                  borderWidth: grossor,
                }}
                className={styles.column}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridBg;
