import siyaFeatureVideo from "../../asstes/videos/Siya_1.mp4";
import siyaPoster from "../../asstes/images/siya-poster.jpg";
import masaanPoster from "../../asstes/images/masaan-poster.jpg";
import dhanakPoster from "../../asstes/images/dhanak-poster.jpg";
import newtonPoster from "../../asstes/images/newton-poster.png";
import siyaGalleryPoster from "../../asstes/images/siya-gallery-poster.jpg";

const Arrow = () => <span className={"arrow"}>→</span>;
const galleryRows = [
  [
    { title: "Siya", detail: "Official poster", poster: siyaGalleryPoster },
    { title: "Masaan", detail: "Official poster", poster: masaanPoster },
    { title: "Newton", detail: "Official poster", poster: newtonPoster },
    { title: "Dhanak", detail: "Official poster", poster: dhanakPoster },
  ],
  [
    { title: "Newton", detail: "Official poster", poster: newtonPoster },
    { title: "Dhanak", detail: "Official poster", poster: dhanakPoster },
    { title: "Siya", detail: "Official poster", poster: siyaGalleryPoster },
    { title: "Masaan", detail: "Official poster", poster: masaanPoster },
  ],
];

function GalleryCard({ item, duplicate }) {
  return (
    <figure className={"film-gallery-card"} aria-hidden={duplicate || undefined}>
      <img
        src={item.poster}
        alt={duplicate ? "" : `${item.title} movie poster`}
        loading={"lazy"}
        decoding={"async"}
      />
      <figcaption>
        <span>{item.detail}</span>
        <b>{item.title}</b>
      </figcaption>
    </figure>
  );
}


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
              className={"imdb-about-watch ticket-button"}
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
        <section className={"film-gallery"} aria-labelledby={"film-gallery-title"}>
          <div className={"film-gallery-heading"}>
            <span>FRAMES FROM OUR FILMS</span>
            <h2 id={"film-gallery-title"}>Gallery</h2>
            <p>Moments that live beyond the final cut.</p>
          </div>
          <div className={"film-gallery-reels"}>
            {galleryRows.map((row, rowIndex) => (
              <div
                className={`film-gallery-marquee film-gallery-marquee--${rowIndex === 0 ? "left" : "right"}`}
                key={rowIndex}
              >
                <div className={"film-gallery-track"}>
                  {[false, true].map((duplicate) => (
                    <div className={"film-gallery-group"} key={String(duplicate)}>
                      {row.map((item, itemIndex) => (
                        <GalleryCard
                          item={item}
                          duplicate={duplicate}
                          key={`${item.title}-${itemIndex}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
