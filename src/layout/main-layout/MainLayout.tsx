/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ArrowUp, Message } from "iconoir-react";
import { ToastContainer } from "react-toastify";

import { useIntersectionObserver } from "@hooks/index";
import { navToFromButton } from "@helpers/index";

import {
  Footer,
  IconOnlyButton,
  Navigation,
  SettingsBar,
} from "@components/index";

import styles from "./MainLayout.module.css";

const MainLayout = (): JSX.Element => {
  const { sectionsRef } = useIntersectionObserver();

  useEffect(() => {
    window.location.href = "/#home";
  }, []);

  const historyState = window.history.state;

  return (
    <main className={styles.mainContainer} ref={sectionsRef}>
      <Navigation />
      <Outlet />
      <SettingsBar />
      <IconOnlyButton
        Icon={historyState === "#contact" ? ArrowUp : Message}
        type="button"
        title={historyState === "#contact" ? "Ir al inicio" : "Contáctame"}
        name="btn-contact"
        variant="solid"
        onClick={() => {
          navToFromButton(historyState === "#contact" ? "#home" : "#contact");
        }}
      />
      <Footer />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </main>
  );
};

export default MainLayout;
