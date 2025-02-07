import { SkillProps } from "@interfaces/component-types";

import { useThemeStore } from "@store/index";
import { useImageLoading } from "@hooks/index";

import { Spinner } from "@components/.";

import styles from "./Skill.module.css";

const Skill = ({ skillData }: SkillProps): JSX.Element => {
  const { theme } = useThemeStore();
  const { isImageLoading, toggleImageLoading } = useImageLoading();

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
        {isImageLoading ? <Spinner /> : null}
        <img
          src={skillData.iconUrl}
          alt={skillData.title}
          style={{ display: isImageLoading ? "none" : "block" }}
          onLoad={() => toggleImageLoading()}
        />
      </button>
    </li>
  );
};

export default Skill;
