import founderBanner from "../../assets/images/founder-banner.png";
import founderPortrait from "../../assets/images/founder-portrait.png";
import teamBanner from "../../assets/images/team/team-detail-banner.png";

export default function FromFounderPage({ onNavigate }) {
  return (
    <div className="about-content-page founder-page">
      <section className="founder-premium-hero">
        <img
          src={founderBanner}
          alt="A filmmaker watching a film in a private screening room"
          fetchPriority="high"
        />
        <div className="founder-premium-hero-shade" />
        <div className="founder-premium-hero-copy">
          <p>FROM THE FOUNDER</p>
          <h1>
            Why I started <br /> <em>Drishyam Films.</em>
          </h1>
          <span>
            A note from Manish Mundra.
          </span>
        </div>
      </section>

      <section className="founder-premium-letter-wrap">
        <article className="founder-premium-letter">
          <aside>
            <div className="founder-premium-name">
              <span>THE FOUNDER</span>
              <h2>
                Manish
                <br />
                <em>Mundra</em>
              </h2>
              <p>FOUNDER · PRODUCER · FILMMAKER</p>
            </div>
            <div className="founder-premium-portrait">
              <img
                src={founderPortrait}
                alt="Manish Mundra, founder of Drishyam Films"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="founder-premium-location">
              <span>DRISHYAM FILMS</span>
              <p>NEW DELHI / INDIA</p>
            </div>
          </aside>
          <div className="founder-premium-letter-copy">
            <p className="founder-premium-salutation">
              To our filmmakers and audiences,
            </p>
            <p>
              I started Drishyam Films to support filmmakers and the stories they wanted to tell. I wanted to help make films that interested me as a viewer.
            </p>
            <p>
              The films I return to are often about a particular person or place. Their details matter: the way people speak, their relationships and the decisions they face. Audiences can recognise something of their own lives in those details, even when the setting is unfamiliar.
            </p>
            <p>
              Making a film takes a great deal of work from people across many departments. As a producer, I want to give the director a team they can rely on and the room to make their own decisions. Some things change during a shoot or in the edit. That is part of the work.
            </p>
            <p>
              I hope we can keep making films that people want to watch, discuss and return to. Thank you to everyone who has worked with us, and to everyone who has taken the time to watch our films.
            </p>
            <div className="founder-premium-signature">
              Manish Mundra<span>FOUNDER, DRISHYAM FILMS</span>
            </div>
          </div>
        </article>
      </section>

      <section className="founder-premium-next-wrap">
        <button
          className="founder-premium-next"
          onClick={() => onNavigate("/meet-our-team")}
        >
          <div className="founder-premium-next-copy">
            <h2>
              Meet <em>our team.</em>
            </h2>
            <b>
              MEET OUR TEAM <i aria-hidden="true">&rarr;</i>
            </b>
          </div>
          <div className="founder-premium-next-mark" aria-hidden="true">
            <img src={teamBanner} alt="" loading="lazy" decoding="async" />
            <span className="founder-premium-next-shade" />
            <span className="founder-premium-next-arrow">
              <svg viewBox="0 0 48 48">
                <path d="M14 34 34 14M18 14h16v16" />
              </svg>
            </span>
          </div>
        </button>
      </section>
    </div>
  );
}
