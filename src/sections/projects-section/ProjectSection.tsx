import { useProjectStore, useThemeStore } from "@store/index";
import { useProjectLoadData } from "@hooks/index";

import { Pagination, ProjectCardList, ProjectFilter } from "@components/index";
import { LauncherSvg } from "@assets/index";

import styles from "./ProjectSection.module.css";

const ProjectSection = (): JSX.Element => {
  const { theme } = useThemeStore();

  const { pagination, projectsLoading, filter, toggleFilter } =
    useProjectLoadData();
  const { projects } = useProjectStore();

  return (
    <section
      id="projects"
      className={styles.projectSection}
      style={{ borderColor: `var(--${theme})` }}
    >
      <LauncherSvg />
      <h1 className={styles.sectionTitle}>Mis proyectos destacados</h1>
      <ProjectFilter filterData={{ filter, toggleFilter }} />
      <ProjectCardList projects={projects} projectsLoading={projectsLoading} />
      <Pagination {...pagination} />
    </section>
  );
};

export default ProjectSection;
