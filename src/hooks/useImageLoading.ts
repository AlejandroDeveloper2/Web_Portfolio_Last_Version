import { useState } from "react";

const useImageLoading = () => {
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  const toggleImageLoading = (): void => {
    setIsImageLoading(false);
  };

  return {
    isImageLoading,
    toggleImageLoading,
  };
};

export default useImageLoading;
