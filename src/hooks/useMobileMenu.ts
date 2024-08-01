import { useState } from "react";

const useMobileMenu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setIsMenuVisible(!isMenuVisible);
  };

  return {
    isMenuVisible,
    toggleMobileMenu,
  };
};

export default useMobileMenu;
