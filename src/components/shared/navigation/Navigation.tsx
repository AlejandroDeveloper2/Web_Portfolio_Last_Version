import { MenuScale } from "iconoir-react";

import { useThemeStore } from "@store/index";
import {
  useMobileMenu,
  useScreenSize,
  useStickyNavigation,
} from "@hooks/index";

import { GridBg, IconOnlyButton, Logo, MobileMenu } from "@components/index";
import NavControls from "./NavControls";
import NavItems from "./NavItems";

import styles from "./Navigation.module.css";

const Navigation = (): JSX.Element => {
  const { theme } = useThemeStore();
  const { screenType } = useScreenSize();
  const { isMenuVisible, toggleMobileMenu } = useMobileMenu();
  const { isSticky, navRef } = useStickyNavigation();

  return (
    <>
      <MobileMenu
        isMenuVisible={isMenuVisible}
        toggleMobileMenu={toggleMobileMenu}
      />
      <nav
        ref={navRef}
        className={styles.navigation}
        style={{
          borderColor: `var(--${theme})`,
          position: isSticky ? "fixed" : "absolute",
          animation: isSticky ? "1s linear moveDown" : "none",
        }}
      >
        <GridBg
          rows={screenType === "Mobile" ? 15 : 20}
          columns={screenType === "Mobile" ? 10 : 20}
          spacing={16}
          style={{ position: "absolute", top: 0, left: 0 }}
          grossor={0.5}
        />
        <IconOnlyButton
          Icon={MenuScale}
          type="button"
          title="Menu"
          name="btn-mobile-menu"
          variant="outline"
          onClick={toggleMobileMenu}
        />
        <ul className={styles.navElements}>
          <NavItems itemsRange={{ start: 0, end: 2 }} />
          <Logo size={screenType === "Mobile" ? "small" : "medium"} />
          <NavItems itemsRange={{ start: 2, end: 4 }} />
        </ul>
        <NavControls />
        <GridBg
          rows={screenType === "Mobile" ? 15 : 20}
          columns={screenType === "Mobile" ? 10 : 20}
          spacing={16}
          style={{ position: "absolute", top: 0, right: 0 }}
          grossor={0.5}
        />
      </nav>
    </>
  );
};

export default Navigation;
