/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useLoadingBar = (isLoading: boolean): number => {
  const [maxValue] = useState<number>(100);
  const [maxPercentage] = useState<number>(100);
  const [loadValue, setLoadValue] = useState<number>(0);
  const [loadingInterval, setLoadingInterval] = useState<number>(0);

  useEffect(() => {
    const startCounting = (): void => {
      setLoadingInterval(
        window.setInterval(() => {
          setLoadValue((prevValue) => prevValue + 1);
        }, 50)
      );
      if (!isLoading) window.clearInterval(loadingInterval);
    };

    startCounting();
    return () => window.clearInterval(loadingInterval);
  }, [isLoading]);

  return (loadValue * maxPercentage) / maxValue;
};

export default useLoadingBar;
