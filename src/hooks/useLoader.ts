/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useLoader = (): number => {
  const [load, setLoad] = useState<number>(0);
  const [loadInterval, setLoadInterval] = useState<number>(0);

  useEffect(() => {
    const startCount = (): void => {
      setLoadInterval(
        window.setInterval(() => {
          setLoad((prevLoad) => {
            return prevLoad + 1;
          });
        }, 50)
      );
      if (load >= 100) {
        window.clearInterval(loadInterval);
      }
    };
    startCount();
    return () => window.clearInterval(loadInterval);
  }, []);

  return load;
};

export default useLoader;
