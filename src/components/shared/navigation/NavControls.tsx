import { Download, Settings } from "iconoir-react";

import { useScreenSize } from "@hooks/index";
import { useSettingsStore } from "@store/index";
import { downloadCv } from "@helpers/index";

import { ButtonWithLabel, IconOnlyButton } from "@components/index";

import styles from "./Navigation.module.css";

const NavControls = (): JSX.Element => {
  const { screenType } = useScreenSize();
  const { toggleSettingsBar } = useSettingsStore();

  return (
    <menu className={styles.navControls}>
      <IconOnlyButton
        Icon={Settings}
        type="button"
        title="Ajustes"
        name="btn-settings"
        variant={screenType === "Mobile" ? "solid" : "outline"}
        onClick={toggleSettingsBar}
      />
      <ButtonWithLabel
        Icon={Download}
        type="button"
        title="Ajustes"
        name="btn-download-cv"
        variant="solid"
        onClick={downloadCv}
        label="Descargar HV"
      />
    </menu>
  );
};

export default NavControls;
