import { useEffect, useRef, useState } from "react";
import { films } from "../data/homeData";

export default function useFilmCatalog() {
  const catalogRef = useRef(null);
  const [activeFilmIndex, setActiveFilmIndex] = useState(0);
  useEffect(() => {
    let frame;
    const updateCatalog = () => {
      const section = catalogRef.current;
      if (!section) return;
      const progress = Math.min(
        1,
        Math.max(
          0,
          -section.getBoundingClientRect().top /
            Math.max(section.offsetHeight - window.innerHeight, 1),
        ),
      );
      setActiveFilmIndex(
        Math.min(films.length - 1, Math.floor(progress * films.length)),
      );
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateCatalog);
    };
    updateCatalog();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return { catalogRef, activeFilmIndex };
}
