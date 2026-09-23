import teamDetailBanner from "../../assets/images/team/team-detail-banner.png";
import team from "../../data/teamData";

export default function TeamDetailPage({ onNavigate }) {
  const selectedSlug = new URLSearchParams(window.location.search).get(
    "member",
  );
  const member = team.find((item) => item.slug === selectedSlug) || team[0];
  const [firstName, ...lastNameParts] = member.name.split(" ");
  const lastName = lastNameParts.join(" ");
  const memberIndex = team.findIndex((item) => item.slug === member.slug);
  const nextMember = team[(memberIndex + 1) % team.length];
  const isLeadership = member.group === "Leadership";

  return (
    <div className="about-content-page">
      <section className="team-profile-banner">
        <img
          src={teamDetailBanner}
          alt="Film crew collaborating on a studio set"
        />
        <div className="team-profile-banner-shade" />
        <div className="team-profile-banner-copy">
          <p>DRISHYAM FILMS / OUR PEOPLE</p>
          <h1>
            Team <em>Detail</em>
          </h1>
        </div>
        <span className="team-profile-banner-index">
          PROFILE {String(memberIndex + 1).padStart(2, "0")} /{" "}
          {String(team.length).padStart(2, "0")}
        </span>
      </section>
      <section className="team-profile-section">
        <button
          className="team-profile-back"
          onClick={() => onNavigate("/meet-our-team")}
        >
          &larr; BACK TO ALL TEAM
        </button>
        <article className="team-profile-frame">
          <div className="team-profile-image">
            <img src={member.image} alt={member.name} />
            <span>{String(memberIndex + 1).padStart(2, "0")}</span>
          </div>
          <div className="team-profile-content">
            <p className="team-profile-role">{member.role}</p>
            <h2>
              {firstName} <em>{lastName}</em>
            </h2>
            <div className="team-profile-rule" />
            <p className="team-profile-lead">{member.bio}</p>
            <div className="team-profile-description">
              <p>
                {firstName} works at the meeting point of creative instinct and
                thoughtful execution, helping distinctive ideas grow into films
                that feel honest, relevant and emotionally lasting.
              </p>
              <p>
                {isLeadership
                  ? `As part of Drishyam Films' leadership team, ${firstName} brings clarity to every stage of the process—from finding the heart of a story to building the right team around it. The work is rooted in patient collaboration, careful listening and a firm belief that original voices deserve both protection and ambition.`
                  : `At Drishyam Films, ${firstName} works closely with filmmakers and collaborators across the life of a project. Every decision is guided by care for the story, respect for the people making it and a clear understanding of the audience it hopes to reach.`}
              </p>
              <p>
                Beyond individual productions, {firstName} contributes to a
                studio culture built on curiosity, rigour and trust—one where
                bold Indian stories can travel confidently from their first
                draft to audiences around the world.
              </p>
            </div>
            <dl className="team-profile-meta">
              <div>
                <dt>DEPARTMENT</dt>
                <dd>{member.group}</dd>
              </div>
              <div>
                <dt>BASED IN</dt>
                <dd>New Delhi, India</dd>
              </div>
            </dl>
          </div>
        </article>
      </section>
      <section className="team-profile-next-wrap">
        <button
          className="team-profile-next"
          onClick={() => onNavigate(`/team-detail?member=${nextMember.slug}`)}
          aria-label={`View ${nextMember.name} profile`}
        >
          <div className="team-profile-next-copy">
            <p>NEXT PROFILE</p>
            <h2>{nextMember.name}</h2>
            <span>{nextMember.role}</span>
            <b>
              VIEW PROFILE <i aria-hidden="true">&rarr;</i>
            </b>
          </div>
          <div className="team-profile-next-image">
            <img src={nextMember.image} alt="" />
          </div>
        </button>
      </section>
    </div>
  );
}
