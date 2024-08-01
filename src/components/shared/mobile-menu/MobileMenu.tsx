import { Download, Xmark } from "iconoir-react";

import { navigationItems } from "@constants/index";
import { MobileMenuProps } from "@interfaces/component-types";

import { useScreenSize } from "@hooks/index";
import { useThemeStore } from "@store/index";
import { downloadCv } from "@helpers/index";

import {
  ButtonWithLabel,
  IconOnlyButton,
  Logo,
  NavItem,
} from "@components/index";

import styles from "./MobileMenu.module.css";

const MobileMenu = ({
  isMenuVisible,
  toggleMobileMenu,
}: MobileMenuProps): JSX.Element => {
  const { screenType } = useScreenSize();
  const { theme } = useThemeStore();

  return (
    <div
      className={styles.overlay}
      style={{
        opacity: isMenuVisible ? 1 : 0,
        zIndex: isMenuVisible ? 100 : -100,
      }}
    >
      <nav
        className={styles.mobileMenu}
        style={{
          borderColor: `var(--${theme})`,
          boxShadow: `0 0 10px var(--${theme})`,
        }}
      >
        <IconOnlyButton
          Icon={Xmark}
          type="button"
          title="Cerrar menu"
          name="btn-close-menu"
          variant={"solid"}
          onClick={toggleMobileMenu}
        />
        <Logo size={screenType === "Mobile" ? "small" : "medium"} />
        <ul className={styles.navElements}>
          {navigationItems.map((navItem, i) => (
            <li key={i}>
              <NavItem navItem={navItem} />
            </li>
          ))}
        </ul>
        <ButtonWithLabel
          Icon={Download}
          type="button"
          title="Ajustes"
          name="btn-download-cv"
          variant="solid"
          onClick={downloadCv}
          label="Descargar HV"
        />
      </nav>
    </div>
  );
};

export default MobileMenu;
