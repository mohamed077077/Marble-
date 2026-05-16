import { useEffect, useState } from "react";

export default function useObserve() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const home = document.querySelector("#home");
    const projects = document.querySelector("#projects");
    const materials = document.querySelector("#products");
    const contact = document.querySelector("#contact");   
    const sections = [home, projects, materials, contact];

    const observer = new IntersectionObserver(
    (entries) => {
      let visibleSection = "";

      entries.forEach((entry) => {
        // 
        if (
          entry.isIntersecting &&
          entry.intersectionRatio > 0.5
        ) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: [0.5],
      /*
      then the callback runs when:
        the section reaches 50% visibility
        OR leaves 50% visibility
      */ 
    }
  );

  sections.forEach((section) => {
    observer.observe(section as Element);
  });

  return () => {
    sections.forEach((section) => {
      observer.unobserve(section as Element);
    });
  };
}, []);

  return activeSection;
}