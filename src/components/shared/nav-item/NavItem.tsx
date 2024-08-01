import { NavItemProps } from "@interfaces/component-types";

import { useThemeStore } from "@store/index";

import styles from "./NavItem.module.css";

const NavItem = ({ navItem }: NavItemProps): JSX.Element => {
  const { theme } = useThemeStore();

  return (
    <a className={styles.navLink} href={navItem.to}>
      <span
        style={{
          color: `var(--${theme})`,
          textShadow:
            window.location.hash === navItem.to
              ? `0 0 6px var(--${theme}), 0 0 6px var(--${theme})`
              : "none",
        }}
      >
        {navItem.label}
      </span>
      <small
        className={styles.activeIndicator}
        style={{
          backgroundColor: `var(--${theme})`,
          boxShadow: `0 0 6px 5px var(--${theme})`,
          transform:
            location.hash === navItem.to ? "translateY(0)" : "translateY(400%)",
          opacity: location.hash === navItem.to ? 1 : 0,
        }}
      ></small>
    </a>
  );
};

export default NavItem;
