import { Code, Computer, Eye } from "iconoir-react";

import { ProjectCardProps } from "@interfaces/component-types";

import { navToExternalLink } from "@helpers/index";
import { useThemeStore } from "@store/index";
import { useImageLoading } from "@hooks/index";

import { Badge, ButtonWithLabel, Spinner } from "@components/index";

import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  projectData,
  toggleModal,
}: ProjectCardProps): JSX.Element => {
  const { theme } = useThemeStore();
  const { isImageLoading, toggleImageLoading } = useImageLoading();

  return (
    <div
      className={styles.projectCard}
      style={{
        borderColor: `var(--${theme})`,
        boxShadow: `0 0 10px var(--${theme}), 0 0 10px var(--${theme})`,
      }}
    >
      <figure
        className={styles.projectImgContainer}
        style={{ borderColor: `var(--${theme})` }}
      >
        <ul className={styles.projectDetails}>
          <li>
            <Badge
              label={
                projectData.projectType === "Design"
                  ? "Diseño UI/UX"
                  : "Desarrollo"
              }
            />
          </li>
          <li>
            <Badge
              label={
                projectData.state === "Finished" ? "Finalizado" : "En Progreso"
              }
              index={2}
            />
          </li>
        </ul>
        {isImageLoading ? <Spinner /> : null}
        <img
          src={projectData.projectImageUrl}
          alt={projectData.title}
          style={{ display: isImageLoading ? "none" : "block" }}
          onLoad={() => toggleImageLoading()}
        />
        <div
          className={styles.projectTitle}
          style={{ backgroundColor: `var(--${theme})` }}
        >
          <div className={styles.icon}>
            <Computer />
          </div>

          <h2>{projectData.title}</h2>
        </div>
      </figure>
      <section className={styles.projectDescription}>
        <h2>Descripción</h2>
        <p>{projectData.description}</p>
      </section>
      <menu className={styles.projectOptions}>
        <ButtonWithLabel
          Icon={Eye}
          label="Más detalles"
          type="button"
          title="Ver más detalles del proyecto"
          name="btn-see-details"
          variant="solid"
          onClick={() => toggleModal(projectData)}
        />
        {projectData.codeUrl ? (
          <ButtonWithLabel
            Icon={Code}
            label="Ver código"
            type="button"
            title="Ver más código fuente del proyecto"
            name="btn-see-code"
            variant="outline"
            onClick={() => navToExternalLink(projectData.codeUrl ?? "#")}
          />
        ) : null}
      </menu>
    </div>
  );
};

export default ProjectCard;
