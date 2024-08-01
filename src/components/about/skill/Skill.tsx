import { SkillProps } from "@interfaces/component-types";

import { useThemeStore } from "@store/index";

import styles from "./Skill.module.css";

const Skill = ({ skillData }: SkillProps): JSX.Element => {
  const { theme } = useThemeStore();

  return (
    <li>
      <button
        type="button"
        onClick={() => console.log(skillData)}
        title={skillData.title}
        className={styles.skill}
        style={{
          backgroundColor:
            skillData.id % 2 === 0 ? `var(--${theme})` : "var(--white)",
          boxShadow: `0 0 10px 5px var(--${theme})`,
        }}
      >
        <img src={skillData.iconUrl} alt={skillData.title} loading="lazy" />
      </button>
    </li>
  );
};

export default Skill;
