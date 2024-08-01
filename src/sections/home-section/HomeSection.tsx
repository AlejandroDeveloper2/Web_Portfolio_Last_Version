import { ProffesionSection } from "@components/index";

import styles from "./HomeSection.module.css";

const HomeSection = (): JSX.Element => {
  return (
    <section id="home" className={styles.homeSection}>
      <ProffesionSection />
    </section>
  );
};

export default HomeSection;
