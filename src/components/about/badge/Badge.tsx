import { BadgeProps } from "@interfaces/component-types";

import { useThemeStore } from "@store/index";

import styles from "./Badge.module.css";

const Badge = ({ label, Icon, index }: BadgeProps): JSX.Element => {
  const { theme } = useThemeStore();

  return (
    <div
      className={styles.badge}
      style={{
        backgroundColor: index
          ? index % 2 === 0
            ? "var(--white)"
            : `var(--${theme})`
          : `var(--${theme})`,
      }}
    >
      {Icon ? <Icon /> : null}
      <span> {label}</span>
    </div>
  );
};

export default Badge;
