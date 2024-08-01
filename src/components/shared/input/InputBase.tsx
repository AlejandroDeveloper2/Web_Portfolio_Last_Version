import { InputBaseProps } from "@interfaces/component-types";

import { useThemeStore } from "@store/index";

import styles from "./Input.module.css";

const InputBase = ({
  id,
  children,
  label,
  Icon,
  errorMessage,
}: InputBaseProps): JSX.Element => {
  const { theme } = useThemeStore();

  return (
    <div className={styles.inputContainer}>
      <label
        className={styles.inputLabel}
        htmlFor={id}
        style={{ color: `var(--${theme})` }}
      >
        {label}
      </label>
      <kbd
        className={styles.inputBody}
        style={{
          borderColor: errorMessage ? "var(--error)" : `var(--${theme})`,
        }}
      >
        <Icon style={{ color: `var(--${theme})` }} />
        {children}
      </kbd>
      {errorMessage ? (
        <p className={styles.errorMessage}>{errorMessage}</p>
      ) : null}
    </div>
  );
};

export default InputBase;
