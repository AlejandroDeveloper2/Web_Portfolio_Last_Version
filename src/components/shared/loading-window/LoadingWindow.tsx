import { LoadingWindowProps } from "@interfaces/component-types";

import { useAnimatedBars } from "@hooks/index";
import { useThemeStore } from "@store/index";

import { GridBg, Loader } from "@components/index";

import styles from "./LoadingWindow.module.css";

const LoadingWindow = ({ load }: LoadingWindowProps): JSX.Element => {
  const { theme } = useThemeStore();

  const bars = useAnimatedBars();

  return (
    <div
      style={{
        opacity: load <= 100 ? 1 : 0,
        zIndex: load <= 100 ? 50 : -50,
      }}
      className={styles.loadingWindow}
    >
      <GridBg
        rows={60}
        columns={120}
        spacing={32}
        grossor={1}
        style={{ position: "fixed", top: 0, left: 0 }}
      />
      <Loader direction="column" load={load} />
      <section className={styles.barsContainer}>
        {bars.map((bar, i) => (
          <div
            key={i}
            className={styles.bar}
            style={{
              backgroundColor: `var(--${theme})`,
              boxShadow: `0 0 6px var(--${theme})`,
              height: bar.scaleY,
            }}
          ></div>
        ))}
      </section>
    </div>
  );
};

export default LoadingWindow;
