import teamImage from "../../assets/images/team/meet-our-team-banner.png";
import team from "../../data/teamData";

const ProfileArrow = () => (
  <svg className="team-profile-arrow" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 18 18 6M9 6h9v9" />
  </svg>
);

const TeamHero = () => (
  <section className="about-hero meet-team-hero">
    <img
      className="about-hero-media"
      src={teamImage}
      alt="Indian film crew collaborating on a studio set"
      fetchPriority="high"
    />
    <div className="about-hero-shade" />
    <div className="about-hero-number">03 / 04</div>
    <div className="about-hero-copy">
      <p>MEET OUR TEAM</p>
      <h1>
        Many minds.
        <br />
        <em>One shared instinct.</em>
      </h1>
      <span>
        A collective of filmmakers, producers and collaborators devoted to
        singular cinema.
      </span>
    </div>
    <div className="about-scroll-cue">
      <i /> SCROLL TO DISCOVER
    </div>
  </section>
);

export default function MeetOurTeamPage({ onNavigate }) {
  const openProfile = (member) =>
    onNavigate(`/team-detail?member=${member.slug}`);
  const renderGroup = (group, label, index) => (
    <section className="team-directory" key={group}>
      <div className="team-directory-heading">
        <span>{index}</span>
        <p>{label}</p>
        <small>04 PEOPLE</small>
      </div>
      <div className="team-grid">
        {team
          .filter((member) => member.group === group)
          .map((member, memberIndex) => (
            <article
              key={member.slug}
              tabIndex={0}
              role="button"
              aria-label={`View ${member.name} profile`}
              onClick={() => openProfile(member)}
              onKeyDown={(event) =>
                (event.key === "Enter" || event.key === " ") &&
                openProfile(member)
              }
            >
              <div className="team-card-image">
                <img
                  src={member.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <span>{String(memberIndex + 1).padStart(2, "0")}</span>
                <div className="team-card-reveal">
                  <p>{member.bio}</p>
                  <b>
                    VIEW PROFILE <ProfileArrow />
                  </b>
                </div>
              </div>
              <div className="team-card-meta">
                <div>
                  <p>{member.role}</p>
                  <h3>{member.name}</h3>
                </div>
                <i aria-hidden="true">
                  <ProfileArrow />
                </i>
              </div>
            </article>
          ))}
      </div>
    </section>
  );

  return (
    <div className="about-content-page">
      <TeamHero />
      <section className="team-intro">
        <div className="about-section-label">
          <span>03</span> OUR PEOPLE
        </div>
        <h2>
          Good films are never made <em>alone.</em>
        </h2>
        <p>
          We are a close-knit team of producers, story champions and studio
          specialists who bring curiosity, rigour and respect to every frame.
        </p>
      </section>
      {renderGroup("Leadership", "Creative leadership", "01")}
      <section className="team-quote">
        <span>THE COLLECTIVE</span>
        <blockquote>
          Different disciplines.
          <br />
          <em>One cinematic language.</em>
        </blockquote>
      </section>
      {renderGroup("Studio", "The studio team", "02")}
      <section className="team-culture">
        <p>HOW WE WORK</p>
        <h2>
          Curiosity in the room.
          <br />
          Courage on the page.
          <br />
          <em>Care in every frame.</em>
        </h2>
      </section>
    </div>
  );
}
