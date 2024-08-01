import { useState, useEffect, useCallback } from "react";

import { CarouselConfig } from "@interfaces/data-types";

import { useScreenSize } from ".";

const useCarousel = <T>({ shownSlidesNumber, slides }: CarouselConfig<T>) => {
  const [shownSlides] = useState(shownSlidesNumber);
  const [indicatorsNumber, setIndicatorsNumber] = useState<number>(1);
  const [slidesHorizontalPosition, setSlidesHorizontalPosition] =
    useState<number>(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const { screenWidth } = useScreenSize();

  const changeSlidesPosition = (
    finalPosition: number,
    activeIndex: number
  ): void => {
    setSlidesHorizontalPosition(() => {
      if (activeIndex === 0) return 0;
      return activeIndex * finalPosition;
    });
  };

  const roundIndicatorNumber = useCallback(
    (shownSlides: number): void => {
      setIndicatorsNumber(Math.ceil(slides.length / shownSlides));
    },
    [slides]
  );

  const setCarouselIndicators = useCallback((): void => {
    if (screenWidth < 600) roundIndicatorNumber(shownSlides.mobile);
    else if (screenWidth >= 600 && screenWidth <= 1400)
      roundIndicatorNumber(shownSlides.tablet);
    else roundIndicatorNumber(shownSlides.desktop);
  }, [roundIndicatorNumber, screenWidth, shownSlides]);

  const toggleCarousel = (activeIndex: number): void => {
    if (indicatorsNumber > 1) {
      setCurrentSlideIndex(activeIndex);
      if (screenWidth < 600)
        changeSlidesPosition((-250 + 32) * shownSlides.mobile, activeIndex);
      else if (screenWidth >= 600 && screenWidth <= 1400)
        changeSlidesPosition((-200 + 32) * shownSlides.tablet, activeIndex);
      else changeSlidesPosition((-200 + 32) * shownSlides.desktop, activeIndex);
    }
  };

  const next = (): void => {
    if (indicatorsNumber > 1 && currentSlideIndex < indicatorsNumber - 1) {
      toggleCarousel(currentSlideIndex + 1);
      return;
    }
    toggleCarousel(0);
  };

  const goBack = (): void => {
    if (
      indicatorsNumber > 1 &&
      currentSlideIndex <= indicatorsNumber - 1 &&
      currentSlideIndex !== 0
    ) {
      toggleCarousel(currentSlideIndex - 1);
      return;
    }
    toggleCarousel(indicatorsNumber - 1);
  };

  const resetCarousel = (): void => {
    setSlidesHorizontalPosition(1.875);
    setCurrentSlideIndex(0);
  };

  useEffect(() => {
    setCarouselIndicators();
  }, [setCarouselIndicators]);

  useEffect(() => {
    resetCarousel();
  }, [screenWidth]);

  return {
    slidesHorizontalPosition,
    currentSlideIndex,
    indicatorsNumber,
    toggleCarousel,
    next,
    goBack,
  };
};

export default useCarousel;
