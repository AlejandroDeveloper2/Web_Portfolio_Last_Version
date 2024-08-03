import { Code, Eye, XmarkCircle } from "iconoir-react";

import { ModalProps } from "@interfaces/component-types";

import { navToExternalLink } from "@helpers/index";
import { useThemeStore } from "@store/index";

import { ButtonWithLabel, IconOnlyButton, SkillList } from "@components/index";

import styles from "./Modal.module.css";

const Modal = ({
  isModalVisible,
  projectData,
  toggleModal,
}: ModalProps): JSX.Element => {
  const { theme } = useThemeStore();

  return (
    <div
      className={styles.overlay}
      style={{
        opacity: isModalVisible ? 1 : 0,
        zIndex: isModalVisible ? 50 : -50,
      }}
    >
      <dialog
        className={styles.modal}
        style={{ borderColor: `var(--${theme})` }}
      >
        <IconOnlyButton
          Icon={XmarkCircle}
          type="button"
          title="Cerrar modal"
          name="btn-close"
          variant="solid"
          onClick={() => toggleModal()}
        />
        <h2 className={styles.modalTitle} style={{ color: `var(--${theme})` }}>
          {projectData.title}
        </h2>
        <p className={styles.descriptionText}>{projectData.description}</p>
        <SkillList loading={false} skills={projectData.usedTechnologies} />
        <menu className={styles.actions}>
          {projectData.projectUrl ? (
            <ButtonWithLabel
              Icon={Eye}
              type="button"
              title="Visualizar proyecto"
              name="btn-see-project"
              variant="solid"
              label="Ver proyecto"
              onClick={() => navToExternalLink(projectData.projectUrl ?? "#")}
            />
          ) : null}

          {projectData.codeUrl ? (
            <ButtonWithLabel
              Icon={Code}
              type="button"
              title="Ir al repositorio de git"
              name="btn-see-code"
              variant="outline"
              label="Ver código"
              onClick={() => navToExternalLink(projectData.codeUrl ?? "#")}
            />
          ) : null}
        </menu>
      </dialog>
    </div>
  );
};

export default Modal;
