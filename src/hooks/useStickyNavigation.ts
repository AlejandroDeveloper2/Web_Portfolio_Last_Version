import { useState, useEffect, useRef } from "react";

const useStickyNavigation = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);

  const navigationHeigth = navRef.current?.offsetHeight;
  const parsedNavigationHeigth = navigationHeigth as number;

  useEffect(() => {
    window.document.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= parsedNavigationHeigth) setIsSticky(true);
      else setIsSticky(false);
    });
  }, [parsedNavigationHeigth]);

  return { isSticky, navRef };
};
export default useStickyNavigation;
