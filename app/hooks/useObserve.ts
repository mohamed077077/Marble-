import { useEffect, useState } from "react";

export default function useObserve() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const home = document.querySelector("#home");
    const projects = document.querySelector("#projects");
    const products = document.querySelector("#products");
    const contact = document.querySelector("#contact");
    const sections = [home, projects, products, contact].filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
}