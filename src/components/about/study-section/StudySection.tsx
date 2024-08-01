import { CubeReplaceFace } from "iconoir-react";

import { Study } from "@interfaces/data-types";

import { useAboutLoadData, useCarousel } from "@hooks/index";
import { useAboutStore, useThemeStore } from "@store/index";

import { Carousel, LoadingBar, StudyCard } from "@components/index";

import styles from "./StudySection.module.css";

const StudySection = (): JSX.Element => {
  const { studiesLoading } = useAboutLoadData();

  const { theme } = useThemeStore();
  const { studies } = useAboutStore();
  const carousel = useCarousel<Study>({
    shownSlidesNumber: { desktop: 4, tablet: 3, mobile: 1 },
    slides: studies,
  });

  return (
    <article className={styles.studySection}>
      <div className={styles.studySectionTitle}>
        <CubeReplaceFace style={{ color: `var(--${theme})` }} />
        <h2 style={{ color: `var(--${theme})` }}>
          Mis estudios y certificáciones
        </h2>
      </div>
      <Carousel {...carousel}>
        {studiesLoading ? (
          <LoadingBar
            message="Cargando estudios y certificaciones..."
            isLoading={studiesLoading}
            variant="outline"
          />
        ) : (
          studies.map((study) => <StudyCard key={study.id} studyData={study} />)
        )}
      </Carousel>
    </article>
  );
};

export default StudySection;
