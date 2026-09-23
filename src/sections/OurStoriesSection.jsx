import TicketButton from "../components/TicketButton";
import ourStoriesImage from "../assets/images/maxres1.jpg";
import Arrow from "../components/Arrow";

export default function OurStoriesSection({ scroll, setPremiereOpen }) {
  return (
    <section className="premiere">
      <div className="premiere-copy">
        <p className="eyebrow"> OUR STORIES </p>
        <h2>
          Stories with
          <br />
          <em>Soul</em>
        </h2>
        <p>
          Founded in 2014 by Manish Mundra, Drishyam Films operates on a
          distinct promise: cinema with a soul. The studio champions independent
          Indian cinema, giving a global platform to fearless storytellers who
          capture honest, deeply human truths without compromise.
        </p>
        <p>
          The studio has built an international presence through landmark
          releases including Ankhon Dekhi, Masaan, Dhanak, Waiting, and
          Newton—which won two National Film Awards and represented India at the
          90th Academy Awards. Looking forward, Drishyam remains dedicated to
          discovering bold directorial voices, expanding into international
          co-productions, and shaping cinema that endures.
        </p>
        <TicketButton
          onClick={() => scroll("#films")}
          className="discover ticket-button"
        >
          <span className="ticket-label">EXPLORE</span> <Arrow />
        </TicketButton>
      </div>
      <div className="premiere-art">
        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1500&q=88"
          alt="Film projection"
        />
        <img
          className={"premiere-film-cover"}
          src={ourStoriesImage}
          alt={"Drishyam Films — Our Story"}
        />
        <button
          type="button"
          className="premiere-play"
          onClick={() => setPremiereOpen(true)}
          aria-label="Play Our Stories video"
        >
          <span aria-hidden="true">&#9654;</span>
        </button>
        <div className="art-label">
          EST.
          <br />
          2014
          <br />
          <b>NEW DELHI</b>
        </div>
      </div>
    </section>
  );
}
