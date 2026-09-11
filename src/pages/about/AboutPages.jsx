import storyImage from "../../asstes/images/maxres1.jpg";
import founderImage from "../../asstes/images/masaan-our-stories.jpg";
import teamImage from "../../asstes/images/channels4_banner.jpg";
import portraitOne from "../../asstes/images/siya/3.jpg";
import portraitTwo from "../../asstes/images/siya/5.jpg";
import portraitThree from "../../asstes/images/siya/8.jpg";
import aaravMehta from '../../asstes/images/team/aarav-mehta.png';
import meeraKapoor from '../../asstes/images/team/meera-kapoor.png';
import kabirAnand from '../../asstes/images/team/kabir-anand.png';
import nainaRao from '../../asstes/images/team/naina-rao.png';
import ishaSen from '../../asstes/images/team/isha-sen.png';
import rohanBedi from '../../asstes/images/team/rohan-bedi.png';
import taraNair from '../../asstes/images/team/tara-nair.png';
import vivaanShah from '../../asstes/images/team/vivaan-shah.png';

const team = [
  { name: 'Aarav Mehta', role: 'Founder & Managing Director', group: 'Leadership', image: aaravMehta, slug: 'aarav-mehta', bio: 'A producer and studio builder committed to independent voices and stories with lasting cultural value.' },
  { name: 'Meera Kapoor', role: 'Creative Director', group: 'Leadership', image: meeraKapoor, slug: 'meera-kapoor', bio: 'She shapes the studio creative slate, partnering with filmmakers from the first idea through the final frame.' },
  { name: 'Kabir Anand', role: 'Head of Production', group: 'Leadership', image: kabirAnand, slug: 'kabir-anand', bio: 'He brings ambitious stories to screen with craft, clarity and deep respect for every creative collaborator.' },
  { name: 'Naina Rao', role: 'Executive Producer', group: 'Leadership', image: nainaRao, slug: 'naina-rao', bio: 'An experienced producer connecting creative ambition with rigorous, thoughtful execution.' },
  { name: 'Isha Sen', role: 'Head of Development', group: 'Studio', image: ishaSen, slug: 'isha-sen', bio: 'She discovers original voices and works closely with writers to develop distinctive screen stories.' },
  { name: 'Rohan Bedi', role: 'Post-Production Lead', group: 'Studio', image: rohanBedi, slug: 'rohan-bedi', bio: 'He guides picture and sound through the final stages, protecting the emotional rhythm of each film.' },
  { name: 'Tara Nair', role: 'Festivals & Marketing', group: 'Studio', image: taraNair, slug: 'tara-nair', bio: 'She creates thoughtful journeys for films, from first announcement to festivals and global audiences.' },
  { name: 'Vivaan Shah', role: 'Business & Partnerships', group: 'Studio', image: vivaanShah, slug: 'vivaan-shah', bio: 'He builds partnerships that help bold Indian stories travel farther and find the audiences they deserve.' },
];

const PageHero = ({ index, eyebrow, title, italic, copy, image }) => (
  <section className="about-hero">
    <img className="about-hero-media" src={image} alt="" />
    <div className="about-hero-shade" />
    <div className="about-hero-number">{index} / 04</div>
    <div className="about-hero-copy">
      <p>{eyebrow}</p>
      <h1>{title}<br /><em>{italic}</em></h1>
      <span>{copy}</span>
    </div>
    <div className="about-scroll-cue"><i /> SCROLL TO DISCOVER</div>
  </section>
);

function AboutDrishyam({ onNavigate }) {
  return <>
    <PageHero index="01" eyebrow="ABOUT DRISHYAM" title="Stories with" italic="a point of view." copy="Independent cinema from India, made for the world." image={storyImage} />
    <section className="about-manifesto">
      <div className="about-section-label"><span>01</span> WHO WE ARE</div>
      <div>
        <h2>We believe the most local stories can carry the most <em>universal truth.</em></h2>
        <div className="about-two-column"><p>Drishyam Films is an independent Indian motion picture studio founded with a singular purpose: to champion powerful stories and the filmmakers brave enough to tell them.</p><p>From first-time voices to celebrated auteurs, we nurture cinema with patience, integrity and craft—taking distinct Indian narratives from the page to audiences across the world.</p></div>
      </div>
    </section>
    <section className="about-stats">
      <article><strong>2014</strong><span>THE JOURNEY BEGAN</span></article>
      <article><strong>20+</strong><span>ORIGINAL STORIES</span></article>
      <article><strong>30+</strong><span>GLOBAL FESTIVALS</span></article>
      <article><strong>1</strong><span>UNWAVERING VISION</span></article>
    </section>
    <section className="about-belief">
      <p>OUR NORTH STAR</p><blockquote>“Cinema should move you before it tries to impress you.”</blockquote>
      <button className="about-link-button" onClick={() => onNavigate("/from-founder")}>HEAR FROM OUR FOUNDER <span>↗</span></button>
    </section>
  </>;
}

function FromFounder({ onNavigate }) {
  return <>
    <PageHero index="02" eyebrow="FROM THE FOUNDER" title="A note on" italic="why we tell stories." copy="Manish Mundra on conviction, craft and a cinema without compromise." image={founderImage} />
    <section className="founder-letter">
      <aside><span>THE FOUNDER</span><h2>Manish<br />Mundra</h2><p>FOUNDER · PRODUCER · FILMMAKER</p></aside>
      <article>
        <span className="founder-dropcap">“</span>
        <h3>I have always believed that a meaningful story finds its audience when it is made with honesty.</h3>
        <p>Drishyam Films began as a promise to stand behind original voices—the kind that look closely at the world, ask difficult questions and stay with you long after the lights come on.</p>
        <p>Every film is a leap of faith. We take that leap alongside our writers, directors, actors and crews, protecting the heart of their idea while giving it the care and scale it deserves.</p>
        <p>Our ambition is simple: build a home for enduring Indian cinema, and carry its many voices to every corner of the world.</p>
        <div className="founder-signature">Manish Mundra <small>FOUNDER, DRISHYAM FILMS</small></div>
      </article>
    </section>
    <section className="about-next"><span>CONTINUE THE STORY</span><h2>Meet the people<br /><em>behind the pictures.</em></h2><button onClick={() => onNavigate("/meet-our-team")}>MEET OUR TEAM ↗</button></section>
  </>;
}

function MeetTeam({ onNavigate }) {
  const openProfile = (member) => onNavigate(`/team-detail?member=${member.slug}`);
  const renderGroup = (group, label, index) => <section className="team-directory" key={group}>
    <div className="team-directory-heading"><span>{index}</span><p>{label}</p><small>04 PEOPLE</small></div>
    <div className="team-grid">
      {team.filter((member) => member.group === group).map((member, memberIndex) => <article key={member.slug} tabIndex={0} role="button" aria-label={`View ${member.name} profile`} onClick={() => openProfile(member)} onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && openProfile(member)}>
        <div className="team-card-image"><img src={member.image} alt="" loading="lazy" decoding="async" /><span>{String(memberIndex + 1).padStart(2, '0')}</span><div className="team-card-reveal"><p>{member.bio}</p><b>VIEW PROFILE ↗</b></div></div>
        <div className="team-card-meta"><div><p>{member.role}</p><h3>{member.name}</h3></div><i aria-hidden="true">↗</i></div>
      </article>)}
    </div>
  </section>;
  return <>
    <PageHero index="03" eyebrow="MEET OUR TEAM" title="Many minds." italic="One shared instinct." copy="A collective of filmmakers, producers and collaborators devoted to singular cinema." image={teamImage} />
    <section className="team-intro"><div className="about-section-label"><span>03</span> OUR PEOPLE</div><h2>Good films are never made <em>alone.</em></h2><p>We are a close-knit team of producers, story champions and studio specialists who bring curiosity, rigour and respect to every frame.</p></section>
    {renderGroup('Leadership', 'Creative leadership', '01')}
    <section className="team-quote"><span>THE COLLECTIVE</span><blockquote>Different disciplines.<br /><em>One cinematic language.</em></blockquote></section>
    {renderGroup('Studio', 'The studio team', '02')}
    <section className="team-culture"><p>HOW WE WORK</p><h2>Curiosity in the room.<br />Courage on the page.<br /><em>Care in every frame.</em></h2></section>
  </>;
}

function TeamDetail({ onNavigate, member }) {
  const [firstName, ...lastNameParts] = member.name.split(' ');
  const lastName = lastNameParts.join(' ');
  const memberIndex = team.findIndex((item) => item.slug === member.slug);
  const nextMember = team[(memberIndex + 1) % team.length];
  const isLeadership = member.group === 'Leadership';
  return <>
    <section className="team-profile-banner">
      <img src={teamImage} alt="" />
      <div className="team-profile-banner-shade" />
      <div className="team-profile-banner-copy"><p>DRISHYAM FILMS / OUR PEOPLE</p><h1>Team <em>Detail</em></h1></div>
      <span className="team-profile-banner-index">PROFILE {String(memberIndex + 1).padStart(2, '0')} / {String(team.length).padStart(2, '0')}</span>
    </section>
    <section className="team-profile-section">
      <button className="team-profile-back" onClick={() => onNavigate('/meet-our-team')}>&larr; BACK TO ALL TEAM</button>
      <article className="team-profile-frame">
        <div className="team-profile-image"><img src={member.image} alt={member.name} /><span>{String(memberIndex + 1).padStart(2, '0')}</span></div>
        <div className="team-profile-content">
          <p className="team-profile-role">{member.role}</p>
          <h2>{firstName} <em>{lastName}</em></h2>
          <div className="team-profile-rule" />
          <p className="team-profile-lead">{member.bio}</p>
          <div className="team-profile-description">
            <p>{firstName} works at the meeting point of creative instinct and thoughtful execution, helping distinctive ideas grow into films that feel honest, relevant and emotionally lasting.</p>
            <p>{isLeadership ? `As part of Drishyam Films' leadership team, ${firstName} brings clarity to every stage of the process—from finding the heart of a story to building the right team around it. The work is rooted in patient collaboration, careful listening and a firm belief that original voices deserve both protection and ambition.` : `At Drishyam Films, ${firstName} works closely with filmmakers and collaborators across the life of a project. Every decision is guided by care for the story, respect for the people making it and a clear understanding of the audience it hopes to reach.`}</p>
            <p>Beyond individual productions, {firstName} contributes to a studio culture built on curiosity, rigour and trust—one where bold Indian stories can travel confidently from their first draft to audiences around the world.</p>
          </div>
          <dl className="team-profile-meta"><div><dt>DEPARTMENT</dt><dd>{member.group}</dd></div><div><dt>BASED IN</dt><dd>New Delhi, India</dd></div></dl>
        </div>
      </article>
    </section>
    <section className="team-profile-next-wrap">
      <button className="team-profile-next" onClick={() => onNavigate(`/team-detail?member=${nextMember.slug}`)} aria-label={`View ${nextMember.name} profile`}>
        <div className="team-profile-next-copy"><p>NEXT PROFILE</p><h2>{nextMember.name}</h2><span>{nextMember.role}</span><b>VIEW PROFILE <i aria-hidden="true">&rarr;</i></b></div>
        <div className="team-profile-next-image"><img src={nextMember.image} alt="" /></div>
      </button>
    </section>
  </>;

  /* Legacy profile composition retained below for reference.
  const expertise = [];
  return <>
    <section className="team-detail-hero">
      <div className="team-detail-photo">
        <img src={member.image} alt={member.name} />
        <div className="team-detail-photo-wash" />
        <span>PORTRAIT / {String(memberIndex + 1).padStart(2, '0')}</span>
      </div>
      <div className="team-detail-copy">
        <div className="team-detail-nav"><button onClick={() => onNavigate("/meet-our-team")}>&larr; ALL TEAM</button><span>PROFILE {String(memberIndex + 1).padStart(2, '0')} / {String(team.length).padStart(2, '0')}</span></div>
        <div className="team-detail-identity"><p>{member.role}</p><h1>{firstName}<br /><em>{lastName}</em></h1><p className="team-detail-summary">{member.bio}</p></div>
        <dl className="team-detail-meta"><div><dt>DISCIPLINE</dt><dd>{member.group}</dd></div><div><dt>BASED IN</dt><dd>New Delhi, India</dd></div></dl>
      </div>
    </section>
    <section className="team-detail-story">
      <aside><div className="about-section-label"><span>01</span> THE PROFILE</div><p>DRISHYAM FILMS<br />NEW DELHI / INDIA</p></aside>
      <article><h2>Backing stories that deserve to be <em>seen.</em></h2><p className="team-detail-lead">For {firstName}, meaningful cinema begins with listening—to the filmmaker, to the world around the story, and to what remains unspoken.</p><div className="about-two-column"><p>Working across development and production, {firstName} helps filmmakers protect the original instinct at the heart of every project. The process is grounded in honest conversation and an attention to the smallest creative choices.</p><p>The approach is collaborative, exacting and always guided by one question: what will make this story stay with its audience long after the final frame?</p></div></article>
    </section>
    <section className="team-detail-quote"><span>GUIDING THOUGHT</span><blockquote>“Every powerful film starts with the courage to see the world <em>differently.</em>”</blockquote></section>
    <section className="team-detail-expertise"><header><p>02 / EXPERTISE</p><h2>What {firstName}<br /><em>brings to the frame.</em></h2></header><div>{expertise.map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3><p>Thoughtful collaboration, clear decisions and a deep respect for the story at every stage.</p></article>)}</div></section>
    <section className="team-detail-next"><div><p>NEXT PROFILE</p><h2>{nextMember.name}</h2><span>{nextMember.role}</span><button onClick={() => onNavigate(`/team-detail?member=${nextMember.slug}`)}>VIEW PROFILE <b>↗</b></button></div><button className="team-detail-next-image" onClick={() => onNavigate(`/team-detail?member=${nextMember.slug}`)} aria-label={`View ${nextMember.name} profile`}><img src={nextMember.image} alt="" /></button></section>
  </>;
  */
}

export default function AboutPages({ path, onNavigate }) {
  const selectedSlug = new URLSearchParams(window.location.search).get('member');
  const selectedMember = team.find((member) => member.slug === selectedSlug) || team[0];
  const content = path === "/about-drishyam" ? <AboutDrishyam onNavigate={onNavigate} /> : path === "/from-founder" ? <FromFounder onNavigate={onNavigate} /> : path === "/meet-our-team" ? <MeetTeam onNavigate={onNavigate} /> : <TeamDetail onNavigate={onNavigate} member={selectedMember} />;
  return <div className="about-content-page">{content}</div>;
}
