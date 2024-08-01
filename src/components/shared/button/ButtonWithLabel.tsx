import { ButtonWithLabelProps } from "@interfaces/component-types";

import { getButtonIconLabelStyle } from "@helpers/index";
import { useThemeStore } from "@store/index";

import BaseButton from "./BaseButton";

import styles from "./Button.module.css";

const ButtonWithLabel = ({
  Icon,
  label,
  loadingMessage,
  ...props
}: ButtonWithLabelProps): JSX.Element => {
  const { theme } = useThemeStore();

  return (
    <BaseButton {...props}>
      {props.loading && loadingMessage ? null : (
        <Icon
          style={getButtonIconLabelStyle(theme, props.variant)}
          className={styles.buttonIcon}
        />
      )}
      <span
        style={getButtonIconLabelStyle(theme, props.variant)}
        className={styles.buttonLabel}
      >
        {props.loading && loadingMessage ? loadingMessage : label}
      </span>
    </BaseButton>
  );
};

export default ButtonWithLabel;
