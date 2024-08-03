import { ProjectCardListProps } from "@interfaces/component-types";
import { Project } from "@interfaces/data-types";

import useModal from "@hooks/useModal";

import { LoadingBar, Modal, ProjectCard } from "@components/index";

import styles from "./ProjectCardList.module.css";

const ProjectCardList = ({
  projects,
  projectsLoading,
}: ProjectCardListProps): JSX.Element => {
  const { modalData, isModalVisible, toggleModal } = useModal<Project>();

  return (
    <>
      {modalData ? (
        <Modal
          projectData={modalData}
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
        />
      ) : null}
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
              <ProjectCard projectData={project} toggleModal={toggleModal} />
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default ProjectCardList;
