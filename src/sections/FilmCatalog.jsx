import { useEffect, useRef } from "react";
import FestivalLaurel from "../components/FestivalLaurel";
import useFilmCatalog from "../hooks/useFilmCatalog";
import { films } from "../data/homeData";

export default function FilmCatalog() {
  const { catalogRef, activeFilmIndex } = useFilmCatalog();
  const overlayRef = useRef(null);
  const swipeStart = useRef(null);
  const film = films[activeFilmIndex];
  const selectFilm = (index) => {
    const section = catalogRef.current;
    if (!section) return;
    const next = Math.max(0, Math.min(films.length - 1, index));
    window.scrollTo({
      top: window.scrollY + section.getBoundingClientRect().top +
        (section.offsetHeight - window.innerHeight) * ((next + 0.5) / films.length),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };
  useEffect(() => {
    const overlay = overlayRef.current;
    overlay.classList.remove("is-visible");
    const frame = requestAnimationFrame(() => overlay.classList.add("is-visible"));
    return () => cancelAnimationFrame(frame);
  }, [activeFilmIndex]);

  return (
    <section id="films" className="catalog catalog-video-showcase" ref={catalogRef} aria-labelledby="feature-showcase-title">
      <header className="catalog-section-heading">
        <h2 id="feature-showcase-title">Feature Showcase</h2>
      </header>
      <div className="catalog-stage">
        <div className="catalog-frame"
          onPointerDown={(event) => { swipeStart.current = event.clientX; }}
          onPointerCancel={() => { swipeStart.current = null; }}
          onPointerUp={(event) => {
            if (swipeStart.current === null) return;
            const delta = event.clientX - swipeStart.current;
            swipeStart.current = null;
            if (Math.abs(delta) > 42) selectFilm(activeFilmIndex + (delta < 0 ? 1 : -1));
          }}>
          {films.map((item, index) => (
            <video key={item.title}
              className={`catalog-media ${index === activeFilmIndex ? "is-active" : ""}`}
              src={item.video} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
          ))}
          <div className="catalog-vignette" />
          <div className="catalog-grain" aria-hidden="true" />
          <div className="catalog-siena-overlay" ref={overlayRef}>
            <div className="siena-copy">
              <h2>{film.title}</h2>
              <p className="film-director-credit"><span>DIRECTOR</span><span>{film.director}</span></p>
              <a className="film-trailer-link" href={film.trailerUrl} target="_blank" rel="noopener noreferrer"
                aria-label={`Watch ${film.title} trailer (opens in a new tab)`}>
                Watch Trailer <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <div className="siena-acclaim">
              {film.acclaim.map((award) => (
                <div key={award}><FestivalLaurel /><strong>{award}</strong></div>
              ))}
            </div>
          </div>
          <nav className="catalog-dots" aria-label="Featured films">
            {films.map((item, index) => (
              <button key={item.title} type="button" className={index === activeFilmIndex ? "is-active" : ""}
                aria-label={`Show ${item.title}`} aria-current={index === activeFilmIndex ? "true" : undefined}
                onClick={() => selectFilm(index)}><span /></button>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
