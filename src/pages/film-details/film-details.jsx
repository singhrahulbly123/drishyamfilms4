import siyaFeatureVideo from "../../asstes/videos/Siya_1.mp4";
import siyaPoster from "../../asstes/images/siya-poster.jpg";

const Arrow = () => <span className={"arrow"}>→</span>;

export default function FilmDetailsPage({ onPlay, onExplore }) {
  return (
    <section id={"film-details"} className={"about-imdb-page"}>
      <div className={"imdb-about-layout"}>
   
   
        <div className={"film-details-banner"}>
          <video
            src={siyaFeatureVideo}
            autoPlay
            muted
            loop
            playsInline
            preload={"metadata"}
            aria-label={"Siya feature video"}
          />
          <div className={"film-details-banner-wash"} aria-hidden={"true"} />
          <div className={"film-details-banner-copy"}>
            <img
              className={"film-details-banner-poster"}
              src={siyaPoster}
              alt={"Siya film poster"}
            />
            <p>DRISHYAM FILMS PRESENTS</p>
            <h1>SIYA</h1>
            <span>A STORY OF COURAGE AND RESISTANCE</span>
            <ul aria-label={"Film details"}>
              <li>2022</li>
              <li>HINDI</li>
              <li>REALIST CRIME DRAMA</li>
            </ul>
            <p className={"film-details-banner-summary"}>
              A young woman fights for justice against a system determined to
              silence her, in an unflinching story of courage and resilience.
            </p>
          </div>
          <div className={"film-details-banner-credit"}>
            <span>DIRECTED BY</span>
            <b>MANISH MUNDRA</b>
          </div>
        </div>
        <div className={"imdb-about-details"}>
          <div className={"imdb-about-copy"}>
            <span>INDEPENDENT CINEMA</span>
            <p>
              We tell distinctive stories from India, made with care and a
              singular point of view for audiences everywhere.
            </p>
            <div>
              <b>FOCUS</b>
              <button className={"ticket-button"} type={"button"} onClick={onExplore}>
                FILMS / SERIES
              </button>
              <a href={"#journal"}>STORIES</a>
            </div>
          </div>
          <div className={"imdb-about-side"}>
            <p>
              <b>FOUNDED</b>2010 · New Delhi
            </p>
            <button
              className={"imdb-about-watch ticket-button ticket-button--solid"}
              type={"button"}
              onClick={onExplore}
            >
              <span>＋</span> EXPLORE OUR FILMS <Arrow />
            </button>
          </div>
        </div>
        <section
          className={"masaan-review"}
          aria-labelledby={"siya-review-title"}
        >
          <div className={"masaan-review-intro"}>
            <span>FILM DETAILS &amp; PREMISE</span>
            <h2 id={"siya-review-title"}>
              Siya <i>(2022)</i>
            </h2>
            <p>
              <b>Siya</b> is a Hindi realist crime drama about a young woman
              fighting for justice against a system determined to silence her.
              The film marks Manish Mundra’s directorial debut.
            </p>
            <button
              className={"ticket-button masaan-review-watch"}
              type={"button"}
              onClick={onPlay}
            >
              WATCH SIYA <Arrow />
            </button>
          </div>
          <dl className={"masaan-facts"}>
            <div>
              <dt>YEAR / LANGUAGE</dt>
              <dd>2022 · Hindi</dd>
            </div>
            <div>
              <dt>RUNTIME</dt>
              <dd>~110 min</dd>
            </div>
            <div>
              <dt>GENRE</dt>
              <dd>Realist crime drama</dd>
            </div>
            <div>
              <dt>DIRECTOR</dt>
              <dd>Manish Mundra · Directorial debut</dd>
            </div>
            <div>
              <dt>WRITERS</dt>
              <dd>Manish Mundra · Haider Rizvi · Samah</dd>
            </div>
            <div>
              <dt>RELEASE / PLATFORM</dt>
              <dd>16 September 2022 · ZEE5</dd>
            </div>
          </dl>
          <div className={"masaan-review-grid"}>
            <section>
              <span>CAST &amp; CREW</span>
              <div className={"masaan-credit-list"}>
                <p>
                  <b>Pooja Pandey</b>Siya / Seeta · debut lead performance
                </p>
                <p>
                  <b>Vineet Kumar Singh</b>Mahendar · lawyer and family friend
                </p>
                <p>
                  <b>Ambrish Kumar Saxena</b>Cast
                </p>
                <p>
                  <b>Rudra Chaudhary</b>Cast
                </p>
                <p>
                  <b>Rohit Pathak</b>The MLA
                </p>
                <p>
                  <b>Rafey Mehmood / Subhransu Das</b>Cinematography
                </p>
                <p>
                  <b>Manendra Singh Lodhi</b>Editing
                </p>
                <p>
                  <b>Rajarshi Sanyal / Neel Adhikari</b>Songs / original score
                </p>
              </div>
            </section>
            <section>
              <span>PREMIERE &amp; FESTIVAL JOURNEY</span>
              <div className={"masaan-awards"}>
                <p>
                  <b>International Film Festival of India</b>IFFI selection
                </p>
                <p>
                  <b>New York Indian Film Festival</b>Official selection
                </p>
                <p>
                  <b>UK Asian Film Festival</b>Official selection
                </p>
                <p>
                  <b>Ottawa / Chicago / Melbourne</b>Indian and South Asian film festivals
                </p>
              </div>
            </section>
          </div>
          <div className={"masaan-producers"}>
            <span>PRODUCTION &amp; WRITING</span>
            <p>
              Produced by Raghav Gupta · Drishyam Films + Panorama Studios ·
              Written by Manish Mundra, Haider Rizvi and Samah · Dialogues by
              Rashmi Somvanshi
            </p>
          </div>
          <div className={"masaan-links"}>
            <span>READ THE REVIEWS</span>
            <a
              href={
                "https://en.wikipedia.org/wiki/Siya_(film)"
              }
              target={"_blank"}
              rel={"noreferrer"}
            >
              Wikipedia ↗
            </a>
            <a
              href={
                "https://www.drishyamfilms.com/films/siya/"
              }
              target={"_blank"}
              rel={"noreferrer"}
            >
              Drishyam Films ↗
            </a>
            <a
              href={
                "https://www.cineblues.com/bollywood-movie-review/siya-pooja-pandey-vineet-kumar-singh-manish-mundra"
              }
              target={"_blank"}
              rel={"noreferrer"}
            >
              Cineblues ↗
            </a>
            <a
              href={"https://www.outlookindia.com/art-entertainment/-siya-movie-review-manish-mundra-plays-safe-with-a-hard-hitting-story-on-rape-survivors-pooja-pandey-vineet-kumar-singh-movie_reviews-225219"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              Outlook India ↗
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
