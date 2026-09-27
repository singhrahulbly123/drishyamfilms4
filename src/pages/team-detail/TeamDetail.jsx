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


  return (
    <div className="about-content-page">
      <section className="team-profile-banner">
        <img
          src={teamDetailBanner}
          alt="Film crew collaborating on a studio set"
        />
        <div className="team-profile-banner-shade" />
        <div className="team-profile-banner-copy">
          <p>Our team</p>
          <h1>
            {firstName} <em>{lastName}</em>
          </h1>
        </div>
      </section>
      <section className="team-profile-section">
        <button
          className="team-profile-back"
          onClick={() => onNavigate("/meet-our-team")}
        >
          &larr; BACK TO THE TEAM
        </button>
        <article className="team-profile-frame">
          <div className="team-profile-image">
            <img src={member.image} alt={member.name} />
          </div>
          <div className="team-profile-content">
            <p className="team-profile-role">{member.role}</p>
            <h2>
              {firstName} <em>{lastName}</em>
            </h2>
            <div className="team-profile-rule" />
            <p className="team-profile-lead">{member.bio}</p>

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
