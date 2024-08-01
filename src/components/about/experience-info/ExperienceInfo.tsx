import { Suitcase } from "iconoir-react";

import { useAboutStore, useThemeStore } from "@store/index";
import { useAboutLoadData } from "@hooks/index";

import { LoadingBar } from "@components/index";
import JobExperience from "./JobExperience";

import styles from "./ExperienceInfo.module.css";

const ExperienceInfo = (): JSX.Element => {
  const { theme } = useThemeStore();
  const { jobExperiences } = useAboutStore();

  const { skillsLoading } = useAboutLoadData();

  return (
    <article className={styles.experienceInfo}>
      <div className={styles.experienceSectionTitle}>
        <Suitcase style={{ color: `var(--${theme})` }} />
        <h2 style={{ color: `var(--${theme})` }}>Mi experiencia laboral</h2>
      </div>
      <ul
        className={styles.experienceList}
        style={{
          borderColor: `var(--${theme})`,
          boxShadow: `0 0 5px  var(--${theme}), 0 0 5px  var(--${theme})`,
        }}
      >
        {skillsLoading ? (
          <LoadingBar
            message="Cargando experiencias laborales..."
            isLoading={skillsLoading}
            variant="outline"
          />
        ) : (
          jobExperiences.map((experience) => (
            <JobExperience key={experience.id} experienceData={experience} />
          ))
        )}
      </ul>
    </article>
  );
};

export default ExperienceInfo;
