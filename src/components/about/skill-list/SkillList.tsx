import { SkillListProps } from "@interfaces/component-types";

import { useThemeStore } from "@store/index";

import { LoadingBar, Skill } from "@components/index";

import styles from "./SkillList.module.css";

const SkillList = ({ loading, skills }: SkillListProps): JSX.Element => {
  const { theme } = useThemeStore();

  return (
    <ul
      className={styles.skillList}
      style={{
        borderColor: `var(--${theme})`,
        boxShadow: `0 0 5px var(--${theme}), 0 0 5px  var(--${theme})`,
      }}
    >
      {loading ? (
        <LoadingBar
          message="Cargando habilidades..."
          isLoading={loading}
          variant="outline"
        />
      ) : (
        skills.map((skill) => <Skill key={skill.id} skillData={skill} />)
      )}
    </ul>
  );
};

export default SkillList;
