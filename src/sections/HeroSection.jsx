import TicketButton from "../components/TicketButton";
import Arrow from "../components/Arrow";
import { slides, sliderVideos } from "../data/homeData";

const Play = () => <span className="play">&#9654;</span>;

export default function HeroSection({
  activeSlide,
  setActiveSlide,
  setModal,
  scroll,
}) {
  const hero = slides[activeSlide];
  return (
    <section id="top" className="hero">
      <video
        key={sliderVideos[activeSlide]}
        className={"hero-media"}
        src={sliderVideos[activeSlide]}
        autoPlay
        muted
        playsInline
        preload={"metadata"}
        aria-hidden={"true"}
        onEnded={() => setActiveSlide((value) => (value + 1) % slides.length)}
      />
      <div className="hero-wash" />
      <div className="hero-content">
        <p>{hero.kicker}</p>
        <h1>{hero.title}</h1>
        <span>{hero.date}</span>
        <div className="hero-actions">
          <TicketButton
            className="button light ticket-button"
            onClick={() => setModal(hero)}
          >
            WATCH TRAILER <Play />
          </TicketButton>
          <TicketButton
            className="button ghost ticket-button"
            onClick={() => scroll("#films")}
          >
            DISCOVER FILM <Arrow />
          </TicketButton>
        </div>
      </div>
      <div className="slide-tabs">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            className={i === activeSlide ? "active" : ""}
            onClick={() => setActiveSlide(i)}
          >
            <b>0{i + 1}</b>
            <span>{slide.title}</span>
          </button>
        ))}
      </div>
      <div className="hero-credit">DRISHYAM FILMS</div>
    </section>
  );
}
