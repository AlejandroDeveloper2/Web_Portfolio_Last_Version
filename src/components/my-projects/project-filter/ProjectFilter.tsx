import { Code, DesignPencil, Filter } from "iconoir-react";

import { ProjectFilterProps } from "@interfaces/component-types";

import { useThemeStore } from "@store/index";

import { ButtonWithLabel } from "@components/index";

import styles from "./ProjectFilter.module.css";

const ProjectFilter = ({ filterData }: ProjectFilterProps): JSX.Element => {
  const { filter, toggleFilter } = filterData;
  const { theme } = useThemeStore();

  return (
    <menu className={styles.filters} style={{ borderColor: `var(--${theme})` }}>
      <ButtonWithLabel
        Icon={Filter}
        label="Todos"
        type="button"
        title="Todas las categorias"
        name="btn-all"
        variant={filter === "Todos" ? "solid" : "outline"}
        onClick={() => toggleFilter("Todos")}
      />
      <ButtonWithLabel
        Icon={Code}
        label="Desarrollo"
        type="button"
        title="Proyectos de desarrollo"
        name="btn-development"
        variant={filter === "Desarrollo" ? "solid" : "outline"}
        onClick={() => toggleFilter("Desarrollo")}
      />
      <ButtonWithLabel
        Icon={DesignPencil}
        label="Diseño UI/UX"
        type="button"
        title="Proyectos de diseño"
        name="btn-design"
        variant={filter === "Diseño UI / UX" ? "solid" : "outline"}
        onClick={() => toggleFilter("Diseño UI / UX")}
      />
    </menu>
  );
};

export default ProjectFilter;
