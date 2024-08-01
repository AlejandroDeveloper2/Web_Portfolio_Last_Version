import { ArrowLeft, ArrowRight } from "iconoir-react";

import { CarouselProps } from "@interfaces/component-types";

import { useThemeStore } from "@store/index";

import { IconOnlyButton } from "@components/index";

import styles from "./Carousel.module.css";

const Carousel = ({
  children,
  indicatorsNumber,
  slidesHorizontalPosition,
  currentSlideIndex,
  toggleCarousel,
  next,
  goBack,
}: CarouselProps): JSX.Element => {
  const { theme } = useThemeStore();

  return (
    <div
      className={styles.carousel}
      style={{
        borderColor: `var(--${theme})`,
        boxShadow: `0 0 10px var(--${theme}), 0 0 10px var(--${theme})`,
      }}
    >
      <ul
        className={styles.carouselElements}
        style={{ transform: `translateX(${slidesHorizontalPosition}px)` }}
      >
        {children}
      </ul>
      <menu className={styles.carouselControls}>
        <IconOnlyButton
          Icon={ArrowLeft}
          type="button"
          title="Atras"
          name="btn-back"
          variant="solid"
          onClick={goBack}
        />
        <ul className={styles.carouselIndicators}>
          {Array(indicatorsNumber)
            .fill(".")
            .map((_, i) => (
              <li key={i}>
                <button
                  type="button"
                  className={styles.carouselIndicator}
                  style={{
                    backgroundColor: `var(--${theme})`,
                    transform:
                      currentSlideIndex === i ? "scale(1.2)" : "scale(1)",
                  }}
                  onClick={() => toggleCarousel(i)}
                ></button>
              </li>
            ))}
        </ul>
        <IconOnlyButton
          Icon={ArrowRight}
          type="button"
          title="Siguiente"
          name="btn-next"
          variant="solid"
          onClick={next}
        />
      </menu>
    </div>
  );
};

export default Carousel;
