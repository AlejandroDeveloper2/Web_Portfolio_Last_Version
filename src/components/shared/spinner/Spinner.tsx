import { useThemeStore } from "@store/.";

import styles from "./Spinner.module.css";

const Spinner = (): JSX.Element => {
  const { theme } = useThemeStore();

  const spinnerDots = new Array(12).fill(".");

  return (
    <div className={styles.ldsDefault}>
      {spinnerDots.map((_, i) => (
        <div key={i} style={{ background: `var(--${theme})` }}></div>
      ))}
    </div>
  );
};

export default Spinner;
