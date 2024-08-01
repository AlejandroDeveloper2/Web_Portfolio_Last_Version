import { useState, useEffect } from "react";

import { ScreenType } from "@interfaces/data-types";

const getScreenSize = (): ScreenType => {
  if (window.screen.width < 768) return "Mobile";
  if (window.screen.width > 768 && window.screen.width < 1400) return "Tablet";
  return "Desktop";
};

const useScreenSize = () => {
  const [screenType, setScreenType] = useState<ScreenType>(() =>
    getScreenSize()
  );
  const [screenWidth, setScreenWidth] = useState<number>(window.screen.width);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const screenSize = getScreenSize();
      setScreenType(screenSize);
      setScreenWidth(window.screen.width);
    });
    return () =>
      window.removeEventListener("resize", () => {
        const screenSize = getScreenSize();
        setScreenType(screenSize);
        setScreenWidth(window.screen.width);
      });
  }, []);

  return { screenType, screenWidth };
};

export default useScreenSize;
