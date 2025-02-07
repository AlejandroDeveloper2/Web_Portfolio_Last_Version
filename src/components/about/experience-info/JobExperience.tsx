import {
  BadgeCheck,
  Clock,
  Check,
  Building,
  Calendar,
  Eye,
} from "iconoir-react";

import { JobExperienceProps } from "@interfaces/component-types";

import { useThemeStore } from "@store/index";
import { navToExternalLink } from "@helpers/index";

import { Badge, ButtonWithLabel } from "@components/index";

import styles from "./ExperienceInfo.module.css";

const JobExperience = ({ experienceData }: JobExperienceProps): JSX.Element => {
  const { theme } = useThemeStore();

  return (
    <li key={experienceData.id}>
      <article className={styles.experience}>
        <header className={styles.experienceHeader}>
          <div className={styles.experienceTitle}>
            <BadgeCheck style={{ color: `var(--${theme})` }} />
            <h3 style={{ color: `var(--${theme})` }}>
              {experienceData.jobTitle}
            </h3>
          </div>
          <div className={styles.experienceTimeDuration}>
            <Clock style={{ color: `var(--${theme})` }} />
            <p id="experience-time" style={{ color: `var(--${theme})` }}>
              {experienceData.duration}{" "}
              {experienceData.durationMetric === "Months"
                ? "Meses"
                : experienceData.durationMetric === "Years"
                ? "Años"
                : "Dias"}
            </p>
          </div>
        </header>
        <p className={styles.description} style={{ color: `var(--white)` }}>
          {experienceData.description}
        </p>
        <menu className={styles.jobDetails}>
          <ul>
            <li>
              <Badge
                label={
                  experienceData.state === "Finished"
                    ? "Finalizado"
                    : "En Progreso"
                }
                Icon={Check}
                index={1}
              />
            </li>
            <li>
              <Badge label={experienceData.company} Icon={Building} index={2} />
            </li>
            <li>
              <Badge
                label={experienceData.finishDate}
                Icon={Calendar}
                index={3}
              />
            </li>
          </ul>
          {experienceData.projectUrl ? (
            <ButtonWithLabel
              Icon={Eye}
              label="Ver proyecto"
              type="button"
              title="Ver proyecto"
              name="btn-see-project"
              variant="solid"
              onClick={() =>
                navToExternalLink(
                  experienceData.projectUrl ? experienceData.projectUrl : "#"
                )
              }
            />
          ) : null}
        </menu>
      </article>
    </li>
  );
};

export default JobExperience;
