import { useThemeStore } from "@store/index";

import { ExperienceInfo, ResumeSection, StudySection } from "@components/index";

import styles from "./AboutSection.module.css";

const AboutSection = (): JSX.Element => {
  const { theme } = useThemeStore();

  return (
    <section
      id="about"
      className={styles.aboutSection}
      style={{ borderColor: `var(--${theme})` }}
    >
      <h1 className={styles.sectionTitle}>Conoce un poco más de mi</h1>
      <ResumeSection />
      <ExperienceInfo />
      <StudySection />
    </section>
  );
};

export default AboutSection;
