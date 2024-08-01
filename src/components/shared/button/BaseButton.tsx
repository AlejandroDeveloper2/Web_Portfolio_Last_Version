import { BaseButtonProps } from "@interfaces/component-types";

import { useThemeStore } from "@store/index";

import { LoadingBar } from "@components/index";

import styles from "./Button.module.css";

const BaseButton = ({
  variant,
  children,
  loading,
  ...props
}: BaseButtonProps): JSX.Element => {
  const { theme } = useThemeStore();

  const buttonStyles: string =
    styles.button + " " + styles[variant] + " " + styles[theme];

  return (
    <button
      style={{
        backgroundColor:
          variant === "outline" ? "var(--bg-color)" : `var(--${theme})`,
      }}
      className={buttonStyles}
      {...props}
    >
      {children}
      {loading && <LoadingBar isLoading={loading} variant={variant} />}
    </button>
  );
};

export default BaseButton;
