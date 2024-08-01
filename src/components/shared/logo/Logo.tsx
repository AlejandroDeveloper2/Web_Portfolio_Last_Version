import { LogoProps } from "@interfaces/component-types";

import { useThemeStore } from "@store/index";
import { getGridSize } from "@helpers/index";

import { GridBg } from "@components/index";

import styles from "./Logo.module.css";

const Logo = ({ size }: LogoProps): JSX.Element => {
  const [colRows, spacing] = getGridSize(size);
  const { theme } = useThemeStore();

  return (
    <div
      style={{
        boxShadow: `0 0 4px var(--${theme}), 0 0 8px var(--${theme}), inset 0 0 8px 10px var(--black-opacity-30)`,
      }}
      className={styles.logoContainer + " " + styles[size]}
    >
      <div className={styles.logoBody}>
        <GridBg
          rows={colRows}
          columns={colRows}
          spacing={spacing}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
          grossor={0.5}
        />
        <strong
          style={{
            color: `var(--${theme})`,
            textShadow: `0 0 6px var(--${theme})`,
            fontSize:
              size === "small"
                ? "var(--font-size-4xl)"
                : size === "medium"
                ? "var(--font-size-6xl)"
                : "var(--font-size-huge)",
          }}
          className={styles.logoSymbol}
        >
          D
        </strong>
      </div>
    </div>
  );
};

export default Logo;
