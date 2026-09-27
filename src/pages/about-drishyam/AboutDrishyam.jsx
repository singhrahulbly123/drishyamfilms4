import "../../styles/internal-editorial.css";
import TicketButton from "../../components/TicketButton";
import heroImage from "../../assets/images/about-drishyam-hero.png";
import processImage from "../../assets/images/about-drishyam-process.png";
import teamImage from "../../assets/images/team/meet-our-team-banner.png";
import studioImage from "../../assets/images/about-production-house-v2.png";

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 18 18 6M9 6h9v9" />
  </svg>
);

const process = [
  [
    "Discover",
    "We read scripts and speak with filmmakers about the films they want to make.",
  ],
  [
    "Develop",
    "We work through drafts with the writer and director before moving into production.",
  ],
  [
    "Produce",
    "We bring the cast and crew together and plan the shoot around the script.",
  ],
  [
    "Connect",
    "We work on release plans for theatres, streaming platforms and film festivals.",
  ],
];

export default function AboutDrishyamPage({ onNavigate }) {
  return (
    <div className="about-content-page about-studio-page">
      <section className="about-studio-hero">
        <img
          src={heroImage}
          alt="Independent filmmakers working together on an Indian film set"
          fetchPriority="high"
        />
        <div className="about-studio-hero-shade" />
        <div className="about-studio-hero-copy">
          <p>ABOUT DRISHYAM FILMS</p>
          <h1>
            Independent <br /> <em>Indian cinema.</em>
          </h1>
          <span>
            Films made in India, for audiences here and around the world.
          </span>
        </div>
      </section>

      <section className="about-studio-overview-wrap">
        <article className="about-studio-overview">
          <div className="about-studio-overview-image">
            <img
              src={studioImage}
              alt="A cinematic moment from a Drishyam Films production"
              loading="lazy"
              decoding="async"
            />
            <span>Drishyam Films</span>
          </div>
          <div className="about-studio-overview-content">
            <p className="about-studio-overview-label">
              Drishyam Films
            </p>
            <h2>
              A film starts <em>with its filmmaker.</em>
            </h2>
            <p className="about-studio-overview-lead">
              Drishyam Films is an independent Indian production house. We work with writers and directors to develop, produce and release their films.
            </p>
            <div className="about-studio-overview-copy">
              <p>
                We begin with the script and the person behind it. Working together, we ask what the film needs, what needs another draft and how to get it made.
              </p>
              <p>
                That work continues through the shoot, the edit and the release. Each stage brings different decisions, with the filmmaker closely involved throughout.
              </p>
            </div>
            <dl className="about-studio-overview-meta">
              <div>
                <dt>FOUNDED</dt>
                <dd>2014</dd>
              </div>
              <div>
                <dt>BASED IN</dt>
                <dd>New Delhi, India</dd>
              </div>
              <div>
                <dt>FOCUS</dt>
                <dd>Independent Indian Cinema</dd>
              </div>
            </dl>
          </div>
        </article>
      </section>

      <section className="about-studio-intro">
        <div>
          <h2>
            Films rooted <em>in everyday India.</em>
          </h2>
          <div className="about-studio-intro-copy">
            <p>
              Our films follow people dealing with the circumstances around them: family, work, ambition, loss and the choices they have to make.
            </p>
            <p>
              We work with both new and established filmmakers. Each brings a different background and a different way of telling a story.
            </p>
            <p>
              During development, we read, discuss and revise. A script needs room to change before the practical demands of a shoot take over.
            </p>
            <p>
              Our job is to support those decisions and help the finished film reach its audience, in theatres, at festivals and through streaming.
            </p>
          </div>
        </div>
      </section>

      <section className="about-studio-stats" aria-label="Studio highlights">
        <article>
          <strong>2014</strong>
          <span>Founded</span>
        </article>
        <article>
          <strong>20+</strong>
          <span>Films</span>
        </article>
        <article>
          <strong>30+</strong>
          <span>Film festivals</span>
        </article>
        <article>
          <strong>India</strong> <span>Our home</span>
        </article>
      </section>

      <section className="about-studio-process">
        <div className="about-studio-process-image">
          <img
            src={processImage}
            alt="Filmmaker reviewing a screenplay beside a production monitor"
            loading="lazy"
            decoding="async"
          />
          <span>On set</span>
        </div>
        <div className="about-studio-process-copy">
          <header>
            <h2>
              Making <em>a film.</em>
            </h2>
          </header>
          <div className="about-studio-process-list">
            {process.map(([title, description]) => (
              <article key={title}>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-studio-principles">
        <header>
          <h2>
            What we look for <em>in a film.</em>
          </h2>
        </header>
        <div>
          <article>
            <h3>A personal perspective</h3>
            <p>
              A filmmaker with a clear idea of the story they want to tell, and why they want to tell it.
            </p>
          </article>
          <article>
            <h3>A sense of place</h3>
            <p>
              Characters whose language, surroundings and daily lives feel specific to where they come from.
            </p>
          </article>
          <article>
            <h3>Attention to detail</h3>
            <p>
              Care in the writing, performances, sound and edit, including the small details a viewer may only notice later.
            </p>
          </article>
        </div>
      </section>

      <section className="about-studio-next-wrap">
        <button
          className="about-studio-next"
          onClick={() => onNavigate("/from-founder")}
        >
          <div>
            <h2>
              Hear from
              <br />
              <em>the founder.</em>
            </h2>
            <b>
              READ THE LETTER <ArrowUpRight />
            </b>
          </div>
          <span className="about-studio-next-image">
            <img src={teamImage} alt="" loading="lazy" decoding="async" />
          </span>
        </button>
        <TicketButton
          className="about-studio-team-link"
          onClick={() => onNavigate("/meet-our-team")}
        >
          MEET OUR TEAM <ArrowUpRight />
        </TicketButton>
      </section>
    </div>
  );
}
