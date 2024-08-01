import { IconOnlyButtonProps } from "@interfaces/component-types";

import { useThemeStore } from "@store/index";
import { getButtonIconLabelStyle } from "@helpers/index";

import BaseButton from "./BaseButton";

import styles from "./Button.module.css";

const IconOnlyButton = ({
  Icon,
  ...props
}: IconOnlyButtonProps): JSX.Element => {
  const { theme } = useThemeStore();

  return (
    <BaseButton {...props}>
      <Icon
        style={getButtonIconLabelStyle(theme, props.variant)}
        className={styles.buttonIcon}
      />
    </BaseButton>
  );
};

export default IconOnlyButton;
