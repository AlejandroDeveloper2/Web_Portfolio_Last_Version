import { useThemeStore } from "@store/index";

import { Logo, MediaLinks } from "@components/index";

import styles from "./Footer.module.css";

const Footer = (): JSX.Element => {
  const { theme } = useThemeStore();

  return (
    <footer
      className={styles.footer}
      style={{ borderColor: `var(--${theme})` }}
    >
      <div className={styles.copySection}>
        <Logo size="small" />
        <strong>Derechos reservados © 2024</strong>
      </div>
      <MediaLinks />
    </footer>
  );
};

export default Footer;
