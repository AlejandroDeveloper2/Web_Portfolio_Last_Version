import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = () => {
  const [sectionName, setSectionName] = useState<string>("#home");
  const sectionsRef = useRef<HTMLElement>(null);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.history.replaceState(
            getSectionName(entry.target.id),
            "",
            getSectionName(entry.target.id)
          );
          setSectionName(window.history.state);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    }
  );

  const sections = sectionsRef.current?.querySelectorAll("section");

  const observeSection = (): void => {
    sections?.forEach((section) => {
      observer.observe(section);
    });
  };

  const unobserveSection = (): void => {
    sections?.forEach((section) => observer.unobserve(section));
  };

  useEffect(() => {
    observeSection();
    return () => unobserveSection();
  });

  const getSectionName = (sectionId: string): string => {
    const sectionName: string =
      sectionId === "home"
        ? "#home"
        : sectionId === "about"
        ? "#about"
        : sectionId === "contact"
        ? "#contact"
        : "#projects";
    return sectionName;
  };

  return { sectionsRef, sectionName };
};

export default useIntersectionObserver;
