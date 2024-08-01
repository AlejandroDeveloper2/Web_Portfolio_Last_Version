import { Star, User } from "iconoir-react";

import { resumeText } from "@constants/index";

import { useAboutStore, useThemeStore } from "@store/index";
import { useAboutLoadData } from "@hooks/index";

import { SkillList } from "@components/index";

import styles from "./ResumeSection.module.css";

const ResumeSection = (): JSX.Element => {
  const { skillsLoading } = useAboutLoadData();

  const { skills } = useAboutStore();
  const { theme } = useThemeStore();

  return (
    <article className={styles.resumeSection}>
      <div className={styles.profile}>
        <div className={styles.profileTitle}>
          <User style={{ color: `var(--${theme})` }} />
          <h2 style={{ color: `var(--${theme})` }}>Perfil</h2>
        </div>
        <p>{resumeText}</p>
      </div>
      <div className={styles.skillsSection}>
        <div className={styles.skillsTitle}>
          <Star style={{ color: `var(--${theme})` }} />
          <h2 style={{ color: `var(--${theme})` }}>Mis habilidades</h2>
        </div>
        <SkillList skills={skills} loading={skillsLoading} />
      </div>
    </article>
  );
};

export default ResumeSection;
