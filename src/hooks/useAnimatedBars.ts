import { useState } from "react";

import { AnimatedBar } from "@interfaces/data-types";

import { getLoadingBars } from "@helpers/index";
import { useScreenSize } from ".";

const useAnimatedBars = () => {
  const { screenType, screenWidth } = useScreenSize();

  const [bars] = useState<AnimatedBar[]>(
    getLoadingBars(screenWidth, screenType)
  );

  return bars;
};

export default useAnimatedBars;
