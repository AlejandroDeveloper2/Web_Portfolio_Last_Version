import { LoaderProps } from "@interfaces/component-types";

import { useThemeStore } from "@store/index";

import { Logo } from "@components/index";

import styles from "./Loader.module.css";

const Loader = ({ direction, load }: LoaderProps): JSX.Element => {
  const { theme } = useThemeStore();

  return (
    <div
      className={styles.loaderContainer}
      style={{ flexDirection: direction }}
    >
      <Logo size="large" />
      <span
        className={styles.loaderLabel}
        style={{
          color: `var(--${theme})`,
          textShadow: `0 0 6px var(--${theme})`,
        }}
      >
        {load}%
      </span>
    </div>
  );
};

export default Loader;
