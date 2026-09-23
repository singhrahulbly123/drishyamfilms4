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
    "We seek original voices and stories rooted in a distinct, honest point of view.",
  ],
  [
    "Develop",
    "Writers and filmmakers get the time, conversation and creative rigour a story needs.",
  ],
  [
    "Produce",
    "Every department works together to protect the emotional truth behind each frame.",
  ],
  [
    "Connect",
    "We take Indian cinema to theatres, streaming audiences and festivals around the world.",
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
        <span className="about-studio-index">01 / 04</span>
        <div className="about-studio-hero-copy">
          <p>ABOUT DRISHYAM FILMS</p>
          <h1>
            Stories with
            <br />
            <em>a point of view.</em>
          </h1>
          <span>
            Independent cinema from India, made with conviction for audiences
            everywhere.
          </span>
        </div>
        <div className="about-scroll-cue">
          <i /> SCROLL TO DISCOVER
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
            <span>DRISHYAM FILMS / NEW DELHI</span>
          </div>
          <div className="about-studio-overview-content">
            <p className="about-studio-overview-label">
              ABOUT US / THE PRODUCTION HOUSE
            </p>
            <h2>
              An independent home for cinema with <em>something to say.</em>
            </h2>
            <p className="about-studio-overview-lead">
              Drishyam Films develops and produces distinctive Indian motion
              pictures, bringing artist-led stories from their earliest spark to
              audiences around the world.
            </p>
            <div className="about-studio-overview-copy">
              <p>
                Our work begins with a voice worth listening to. We partner
                closely with writers and directors, shaping every project
                through thoughtful development while protecting the character
                and conviction that made the story original.
              </p>
              <p>
                Across production, post-production and release, we bring
                together exceptional creative talent and practical
                expertise—building films that are culturally rooted, emotionally
                precise and made to endure beyond the moment.
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
        <aside>
          <span>01</span>
          <p>WHO WE ARE</p>
        </aside>
        <div>
          <h2>
            The most local stories can carry the most <em>universal truth.</em>
          </h2>
          <div className="about-studio-intro-copy">
            <p>
              Drishyam Films is an independent Indian motion picture studio
              built to champion powerful stories and the filmmakers brave enough
              to tell them.
            </p>
            <p>
              From emerging voices to celebrated auteurs, we nurture cinema with
              patience, integrity and craft—taking distinctive Indian narratives
              from their first idea to audiences across the world.
            </p>
            <p>
              Our approach is filmmaker-first. We create room for writers,
              directors and craftspeople to test ideas, take creative risks and
              preserve the instinct that made each project worth pursuing.
            </p>
            <p>
              From development and production to the final release, every
              decision is guided by the story—its emotional truth, cultural
              specificity and the audience it hopes to reach.
            </p>
          </div>
        </div>
      </section>

      <section className="about-studio-stats" aria-label="Studio highlights">
        <article>
          <strong>2014</strong>
          <span>THE JOURNEY BEGAN</span>
        </article>
        <article>
          <strong>20+</strong>
          <span>ORIGINAL STORIES</span>
        </article>
        <article>
          <strong>30+</strong>
          <span>GLOBAL FESTIVALS</span>
        </article>
        <article>
          <strong>01</strong>
          <span>UNWAVERING VISION</span>
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
          <span>FROM PAGE / TO SCREEN</span>
        </div>
        <div className="about-studio-process-copy">
          <header>
            <p>02 / HOW WE WORK</p>
            <h2>
              A home for stories,
              <br />
              <em>from instinct to impact.</em>
            </h2>
          </header>
          <div className="about-studio-process-list">
            {process.map(([title, description], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
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
          <p>03 / WHAT WE CHAMPION</p>
          <h2>
            Cinema led by
            <br />
            <em>clarity and courage.</em>
          </h2>
        </header>
        <div>
          <article>
            <span>01</span>
            <h3>Original voices</h3>
            <p>
              Filmmakers whose way of seeing the world is unmistakably their
              own.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Cultural truth</h3>
            <p>
              Stories grounded in real places, lived experience and a precise
              sense of humanity.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Enduring craft</h3>
            <p>
              Patient, collaborative filmmaking designed to stay with an
              audience beyond the final frame.
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
            <p>CONTINUE OUR STORY</p>
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
            <i>02 / 04</i>
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
