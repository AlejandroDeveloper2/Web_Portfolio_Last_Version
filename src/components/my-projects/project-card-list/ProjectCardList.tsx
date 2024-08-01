import { ProjectCardListProps } from "@interfaces/component-types";

import { LoadingBar, ProjectCard } from "@components/index";

import styles from "./ProjectCardList.module.css";

const ProjectCardList = ({
  projects,
  projectsLoading,
}: ProjectCardListProps): JSX.Element => {
  return (
    <ul className={styles.projectCardList}>
      {projectsLoading ? (
        <LoadingBar
          message="Cargando proyectos..."
          isLoading={projectsLoading}
          variant="outline"
        />
      ) : (
        projects.map((project) => (
          <li key={project.id}>
            <ProjectCard projectData={project} />
          </li>
        ))
      )}
    </ul>
  );
};

export default ProjectCardList;
