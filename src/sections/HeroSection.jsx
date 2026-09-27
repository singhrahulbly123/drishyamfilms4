import { useRef } from "react";
import { slides, sliderVideos } from "../data/homeData";

export default function HeroSection({ activeSlide, setActiveSlide }) {
  const start = useRef(null);
  const hero = slides[activeSlide];
  const move = (step) => setActiveSlide(value => (value + step + slides.length) % slides.length);
  return (
    <section id="top" className="hero" aria-label="Featured films" aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={event => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
      onTouchStart={event => {
        const touch = event.touches[0];
        start.current = { x: touch.clientX, y: touch.clientY };
      }}
      onTouchCancel={() => { start.current = null; }}
      onTouchEnd={event => {
        if (!start.current) return;
        const touch = event.changedTouches[0];
        const dx = touch.clientX - start.current.x;
        const dy = touch.clientY - start.current.y;
        start.current = null;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
      }}>
      <video key={sliderVideos[activeSlide]} className="hero-media"
        src={sliderVideos[activeSlide]} autoPlay muted playsInline preload="metadata"
        aria-hidden="true" onEnded={() => move(1)} />
      <div className="hero-wash" />
      <p className="hero-tagline">Stories with Soul</p>
      <div className="hero-film-caption">
        <span>{hero.title}</span>
      </div>
      <div className="hero-credit">DRISHYAM FILMS</div>
      <div className="hero-carousel-controls" aria-label="Choose a film">
        <button type="button" className="hero-carousel-arrow" aria-label="Previous film" onClick={() => move(-1)}>
          <span aria-hidden="true">&#8592;</span>
        </button>
        <div className="hero-carousel-dots">
          {slides.map((slide, index) => (
            <button key={slide.title} type="button"
              className={index === activeSlide ? "is-active" : ""}
              aria-label={`Show ${slide.title}`}
              aria-pressed={index === activeSlide}
              title={slide.title}
              onClick={() => setActiveSlide(index)}>
              <span aria-hidden="true" />
            </button>
          ))}
        </div>
        <button type="button" className="hero-carousel-arrow" aria-label="Next film" onClick={() => move(1)}>
          <span aria-hidden="true">&#8594;</span>
        </button>
      </div>
      <span className="hero-carousel-status" aria-live="polite" aria-atomic="true">
        {hero.title}, film {activeSlide + 1} of {slides.length}
      </span>
    </section>
  );
}
