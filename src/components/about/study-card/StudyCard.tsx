import { CubeReplaceFace, Eye } from "iconoir-react";

import { StudyCardProps } from "@interfaces/component-types";

import { useThemeStore } from "@store/index";
import { navToExternalLink } from "@helpers/index";

import { Badge, ButtonWithLabel, GridBg } from "@components/index";

import styles from "./StudyCard.module.css";

const StudyCard = ({ studyData }: StudyCardProps): JSX.Element => {
  const { theme } = useThemeStore();

  return (
    <div
      className={styles.studyCard}
      style={{ borderColor: `var(--${theme})` }}
    >
      <GridBg
        rows={62}
        columns={19}
        spacing={10}
        grossor={1}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
        }}
      />
      <div id="status-badge">
        <Badge
          label={studyData.state === "Finished" ? "Finalizado" : "En Progreso"}
        />
      </div>
      <CubeReplaceFace id="icon-card" style={{ color: `var(--${theme})` }} />
      <h2 className={styles.title}>{studyData.title}</h2>
      <span className={styles.dateRangeText}>{studyData.dateRange}</span>
      <ButtonWithLabel
        Icon={Eye}
        label="Ver certificado"
        type="button"
        title="Mirar certificado"
        name="btn-see-certificate"
        variant="solid"
        onClick={() => navToExternalLink(studyData.certificateLink)}
      />
    </div>
  );
};

export default StudyCard;
