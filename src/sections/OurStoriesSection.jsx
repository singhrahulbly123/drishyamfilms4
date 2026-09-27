import TicketButton from "../components/TicketButton";
import ourStoryVideo from "../assets/videos/DrishyamFilms.mp4";
import Arrow from "../components/Arrow";

export default function OurStoriesSection({ scroll, setPremiereOpen }) {
  return (
    <section className="premiere">
      <div className="premiere-copy">
        <h2>Our <em>Story</em></h2>
        <p>
          Founded in 2014 by Manish Mundra, Drishyam Films produces independent
          Indian cinema, including Masaan, Dhanak and Newton.
        </p>
        <TicketButton
          onClick={() => scroll("#films")}
          className="discover ticket-button"
        >
          <span className="ticket-label">EXPLORE</span> <Arrow />
        </TicketButton>
      </div>
      <div className="premiere-art">
        <video
          className="premiere-film-cover"
          src={ourStoryVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Drishyam Films - Our Story preview"
        />
        <button
          type="button"
          className="premiere-play"
          onClick={() => setPremiereOpen(true)}
          aria-label="Play Our Stories video"
        >
          <span aria-hidden="true">&#9654;</span>
        </button>
      </div>
    </section>
  );
}
