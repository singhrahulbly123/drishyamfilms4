import { useEffect, useRef } from "react";
import Arrow from "../components/Arrow";
import TicketButton from "../components/TicketButton";
import { films } from "../data/homeData";

export default function FilmCatalog({
  catalogRef,
  activeFilmIndex,
  currentPath,
  scroll,
  setModal,
}) {
  const frameRef = useRef(null);
  const overlayRef = useRef(null);
  const swipeStart = useRef(0);
  const film = films[activeFilmIndex];
  const exploreFilm = () =>
    film.title === "Siya" ? scroll("#film-details") : setModal(film);
  const handleSwipe = (event) => {
    const delta = event.clientX - swipeStart.current;
    if (Math.abs(delta) < 42) return;
    const next = Math.max(
      0,
      Math.min(films.length - 1, activeFilmIndex + (delta < 0 ? 1 : -1)),
    );
    const section = catalogRef.current;
    if (section)
      window.scrollTo({
        top:
          section.offsetTop +
          (section.offsetHeight - window.innerHeight) *
            (next / (films.length - 1)),
        behavior: "smooth",
      });
  };
  useEffect(() => {
    const frame = frameRef.current;
    const overlay = overlayRef.current;
    // Restart the existing CSS transitions without remounting the playing videos.
    frame.classList.remove("is-changing");
    overlay.classList.remove("is-visible");
    const animationFrame = requestAnimationFrame(() => {
      frame.classList.add("is-changing");
      overlay.classList.add("is-visible");
    });
    return () => cancelAnimationFrame(animationFrame);
  }, [activeFilmIndex, currentPath]);
  return (
    <section id="films" className="catalog" ref={catalogRef}>
      <div className="catalog-stage">
        <div
          className="catalog-frame"
          ref={frameRef}
          onPointerDown={(event) => {
            swipeStart.current = event.clientX;
          }}
          onPointerUp={handleSwipe}
        >
          {films.map((film, index) => (
            <video
              key={film.title}
              className={`catalog-media ${index === activeFilmIndex ? "is-active" : ""}`}
              src={film.video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
          ))}
          <div className="catalog-vignette" />
          <div className="catalog-grain" aria-hidden="true" />
          <div className="catalog-topline">
            <p>OUR FILMS</p>
            <span>
              {String(activeFilmIndex + 1).padStart(2, "0")} /{" "}
              {String(films.length).padStart(2, "0")}
            </span>
          </div>
          <div className="catalog-copy">
            <p className="catalog-genre">{film.genre}</p>
            <h2 key={film.title}>{film.title}</h2>
            <p className="catalog-description">
              A Drishyam Films story, made to stay with you long after the
              screen fades to black.
            </p>
            <TicketButton className="ticket-button" onClick={exploreFilm}>
              EXPLORE FILM <Arrow />
            </TicketButton>
          </div>
          <div className="catalog-side-note">SCROLL TO DISCOVER</div>
          <div className="catalog-siena-overlay" ref={overlayRef}>
            <div className="siena-copy">
              <h2>{film.title.toUpperCase()}</h2>
              <p>{"DIRECTOR                       " + film.director}</p>
              <TicketButton
                type="button"
                className="ticket-button"
                onClick={exploreFilm}
              >
                EXPLORE
                <svg className="arrow" viewBox="0 0 11 10" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M4.481.005a6.65 6.65 0 0 1 6.46 4.659c.078.229.08.479-.003.706C10.302 7.105 8.318 10 4.48 10V8.39c.941.127 2.922-.257 4.442-2.603H0V4.208h8.938c-.756-1.229-2.216-2.78-4.457-2.78V.006Z"
                  />
                </svg>
              </TicketButton>
            </div>
            <div className="siena-acclaim">
              {film.acclaim.map((quote) => (
                <div key={quote}>
                  <span>{"\u2605".repeat(5)}</span>
                  <strong>{quote}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
