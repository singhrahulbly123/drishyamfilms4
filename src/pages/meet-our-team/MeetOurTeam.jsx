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
    <div className="about-hero-copy">
      <p>MEET OUR TEAM</p>
      <h1>
        The team at <br /> <em>Drishyam Films.</em>
      </h1>
      <span>
        Meet the people working across development, production and the studio.
      </span>
    </div>
  </section>
);

export default function MeetOurTeamPage({ onNavigate }) {
  const openProfile = (member) =>
    onNavigate(`/team-detail?member=${member.slug}`);
  const renderGroup = (group, label) => (
    <section className="team-directory" key={group}>
      <div className="team-directory-heading">
        <p>{label}</p>
      </div>
      <div className="team-grid">
        {team
          .filter((member) => member.group === group)
          .map((member) => (
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
        <h2>
          Who you will <em>work with.</em>
        </h2>
        <p>
          Our team works with writers, directors and crews through each stage of a film. Read more about their roles below.
        </p>
      </section>
      {renderGroup("Leadership", "Creative leadership")}
      <section className="team-quote">
        <blockquote>
          Writing, production, post. <br /> <em>It takes a whole crew.</em>
        </blockquote>
      </section>
      {renderGroup("Studio", "The studio team")}
      <section className="team-culture">
        <h2>
          We work together, <br /> <em>from the first draft <br /> to the final edit.</em>
        </h2>
      </section>
    </div>
  );
}
