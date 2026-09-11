import founderBanner from '../../asstes/images/founder-banner.png';
import founderPortrait from '../../asstes/images/founder-portrait.png';
import teamBanner from '../../asstes/images/team/team-detail-banner.png';

export default function FromFounderPage({ onNavigate }) {
  return <div className="about-content-page founder-page">
    <section className="founder-premium-hero">
      <img src={founderBanner} alt="A filmmaker watching a film in a private screening room" fetchPriority="high" />
      <div className="founder-premium-hero-shade" />
      <span className="founder-premium-index">02 / 04</span>
      <div className="founder-premium-hero-copy">
        <p>FROM THE FOUNDER</p>
        <h1>A note on<br /><em>why we tell stories.</em></h1>
        <span>Manish Mundra on conviction, craft and cinema without compromise.</span>
      </div>
      <div className="about-scroll-cue"><i /> SCROLL TO READ</div>
    </section>



    <section className="founder-premium-letter-wrap">
      <article className="founder-premium-letter">
        <aside>
          <div className="founder-premium-name"><span>THE FOUNDER</span><h2>Manish<br /><em>Mundra</em></h2><p>FOUNDER · PRODUCER · FILMMAKER</p></div>
          <div className="founder-premium-portrait"><img src={founderPortrait} alt="Manish Mundra, founder of Drishyam Films" loading="lazy" decoding="async" /></div>
          <div className="founder-premium-location"><span>DRISHYAM FILMS</span><p>NEW DELHI / INDIA</p></div>
        </aside>
        <div className="founder-premium-letter-copy">
          <p className="founder-premium-salutation">To every storyteller with something honest to say,</p>
          <p>Drishyam Films began as a promise to stand behind original voices—the kind that look closely at the world, ask difficult questions and stay with you long after the lights come on.</p>
          <p>I have never believed that cinema needs to choose between artistic courage and an audience. The stories that move us most deeply are often the ones rooted in a specific place, a particular truth and a filmmaker’s unmistakable point of view. When made with care, those stories travel farther than we imagine.</p>
          <p>Every film is a leap of faith. We take that leap alongside our writers, directors, actors and crews, protecting the heart of their idea while giving it the patience, craft and scale it deserves. Our role is not to make every voice sound the same; it is to create the conditions in which each voice can become fully itself.</p>
          <p>Our ambition remains simple: to build a home for enduring Indian cinema and carry its many voices to every corner of the world. We will keep choosing curiosity over convention, conviction over convenience and stories that leave something meaningful behind.</p>
          <div className="founder-premium-signature">Manish Mundra<span>FOUNDER, DRISHYAM FILMS</span></div>
        </div>
      </article>
    </section>



    <section className="founder-premium-next-wrap">
      <button className="founder-premium-next" onClick={() => onNavigate('/meet-our-team')}>
        <div className="founder-premium-next-copy">
          <span>CONTINUE THE STORY</span>
          <h2>Meet the people<br /><em>behind the pictures.</em></h2>
          <b>MEET OUR TEAM <i aria-hidden="true">&rarr;</i></b>
        </div>
        <div className="founder-premium-next-mark" aria-hidden="true">
          <img src={teamBanner} alt="" loading="lazy" decoding="async" />
          <span className="founder-premium-next-shade" />
          <small>03 / 04</small>
          <span className="founder-premium-next-arrow"><svg viewBox="0 0 48 48"><path d="M14 34 34 14M18 14h16v16" /></svg></span>
        </div>
      </button>
    </section>
  </div>;
}
