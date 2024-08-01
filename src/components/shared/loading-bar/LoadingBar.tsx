import { useThemeStore } from "@store/index";

import { LoadingBarProps } from "@interfaces/component-types";

import { useLoadingBar } from "@hooks/index";

import styles from "./LoadingBar.module.css";

const LoadingBar = ({
  message,
  isLoading,
  variant,
}: LoadingBarProps): JSX.Element => {
  const { theme } = useThemeStore();
  const loadValue = useLoadingBar(isLoading);

  return (
    <div id="loading-bar" className={styles.loadingBarContainer}>
      <div
        className={styles.loadingBar}
        style={{
          backgroundColor:
            variant === "outline" ? `var(--${theme})` : "var(--bg-color)",
          boxShadow: ` 0 0 10px var(--${theme})`,
          transform: `scaleX(${loadValue / 100})`,
        }}
      ></div>
      {message ? (
        <span
          id="loading-message"
          style={{
            color:
              variant === "outline" ? `var(--${theme})` : `var(--bg-color)`,
          }}
        >
          {message}
        </span>
      ) : null}
    </div>
  );
};

export default LoadingBar;
