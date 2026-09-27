import { useRef } from "react";
import { galleryRows } from "../data/filmGallery";

const images = galleryRows.flat();

export default function FilmGallery() {
  const stripRef = useRef(null);
  const move = (direction) => {
    const strip = stripRef.current;
    if (!strip) return;
    strip.scrollBy({
      left: direction * strip.clientWidth * 0.8,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };
  return (
    <section className="film-gallery film-gallery-single" aria-labelledby="film-gallery-title">
      <div className="film-gallery-toolbar">
        <h2 id="film-gallery-title">Gallery</h2>
        <div className="film-gallery-controls" aria-label="Gallery controls">
          <button type="button" aria-label="Previous images" aria-controls="siya-gallery-strip" onClick={() => move(-1)}>&larr;</button>
          <button type="button" aria-label="Next images" aria-controls="siya-gallery-strip" onClick={() => move(1)}>&rarr;</button>
        </div>
      </div>
      <div id="siya-gallery-strip" className="film-gallery-strip" ref={stripRef}
        tabIndex={0} role="region" aria-label="Siya film images, scroll horizontally">
        {images.map((item) => (
          <figure className="film-gallery-still" key={item.poster}>
            <img src={item.poster} alt={item.alt} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>
    </section>
  );
}
