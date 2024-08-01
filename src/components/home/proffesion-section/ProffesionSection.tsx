import { ArrowDown } from "iconoir-react";

import { useThemeStore } from "@store/index";
import { navToFromButton } from "@helpers/index";

import { ButtonWithLabel, MediaLinks, ProfilePhoto } from "@components/index";

import styles from "./ProffesionSection.module.css";

const ProffesionSection = (): JSX.Element => {
  const { theme } = useThemeStore();

  return (
    <div className={styles.proffesionSection}>
      <ProfilePhoto />
      <h2 className={styles.nameText}> Hola, Bienvenido Soy Diego Diaz </h2>
      <p className={styles.proffesionText} style={{ color: `var(--${theme})` }}>
        Desarrollador Front - end & Diseñador UI/UX{" "}
      </p>
      <MediaLinks />
      <ButtonWithLabel
        Icon={ArrowDown}
        label="Conoce más sobre mi"
        type="submit"
        title="Conoce más sobre mi"
        name="btn-see-more"
        variant="solid"
        onClick={() => navToFromButton("#about")}
      />
    </div>
  );
};

export default ProffesionSection;
