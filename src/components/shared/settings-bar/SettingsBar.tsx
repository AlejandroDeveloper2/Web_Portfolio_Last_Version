import { Xmark } from "iconoir-react";

import { themeOptions } from "@constants/index";

import { useSettingsStore, useThemeStore } from "@store/index";

import { IconOnlyButton } from "@components/index";

import styles from "./SettingsBar.module.css";

const SettingsBar = (): JSX.Element => {
  const { toggleTheme, theme } = useThemeStore();
  const { isSettingsBarVisible, toggleSettingsBar } = useSettingsStore();

  return (
    <div
      className={styles.settingsMenu}
      style={{
        transform: isSettingsBarVisible ? "translateX(0)" : "translateX(100%)",
        borderColor: `var(--${theme})`,
        boxShadow: `0 0 10px var(--${theme})`,
      }}
    >
      <IconOnlyButton
        Icon={Xmark}
        type="button"
        title="Cerrar barra de configuración"
        name="btn-close-settings-bar"
        variant="solid"
        onClick={toggleSettingsBar}
      />
      <section className={styles.themeSection}>
        <h2 style={{ color: `var(--${theme})` }}>Tema</h2>
        <menu className={styles.themeOptions}>
          {themeOptions.map((themeOption) => (
            <button
              type="button"
              key={themeOption.themeValue}
              title={themeOption.title}
              onClick={() => toggleTheme(themeOption.themeValue)}
              className={styles.themeButton}
              style={{
                borderColor: `var(--${themeOption.themeValue})`,
                borderWidth: themeOption.themeValue === theme ? 3 : 1,
              }}
            >
              <div
                className={styles.themeColorCircle}
                style={{
                  boxShadow: `0 0 10px 5px var(--${themeOption.themeValue})`,
                  backgroundColor: `var(--${themeOption.themeValue})`,
                }}
              ></div>
            </button>
          ))}
        </menu>
      </section>
    </div>
  );
};

export default SettingsBar;
