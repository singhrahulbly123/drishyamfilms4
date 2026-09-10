import { useState } from "react";
import siyaFeatureVideo from "../../asstes/videos/Siya_1.mp4";
import siyaPoster from "../../asstes/images/siya-poster.jpg";
import siyaPoster1 from "../../asstes/images/siya-poster1.jpg";
const Arrow = () => <span className={"arrow"}>→</span>;
const siyaGalleryImages = import.meta.glob("../../asstes/images/siya/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});
const galleryItems = Object.entries(siyaGalleryImages)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, poster], index) => ({
    title: "Siya",
    detail: "Gallery / " + String(index + 1).padStart(2, "0"),
    alt: "Siya gallery image " + (index + 1),
    poster,
  }));
const galleryRows = [
  galleryItems.slice(0, Math.ceil(galleryItems.length / 2)),
  galleryItems.slice(Math.ceil(galleryItems.length / 2)),
];

function GalleryCard({ item, duplicate }) {
  return (
    <figure className={"film-gallery-card"} aria-hidden={duplicate || undefined}>
      <img
        src={item.poster}
        alt={duplicate ? "" : item.alt}
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


const watchOptions = [
  { id: "stream", label: "Stream On", description: "Settle in. Let the story unfold.", providers: [
    ["Disney+", "Disney+", "disney", "https://www.disneyplus.com/"],
    ["Hulu", "hulu", "hulu", "https://www.hulu.com/"],
  ] },
  { id: "buy", label: "Buy On", description: "A story to return to, whenever you want.", providers: [
    ["Prime Video", "prime video", "prime", "https://www.primevideo.com/search?phrase=Siya"],
    ["Apple TV", "tv", "apple", "https://tv.apple.com/search?term=Siya"],
    ["Fandango at Home", "F", "fandango", "https://athome.fandango.com/"],
    ["YouTube", "▶", "youtube", "https://www.youtube.com/results?search_query=Siya+2022+movie"],
  ] },
  { id: "rent", label: "Rent On", description: "Make tonight a night for cinema.", providers: [
    ["Prime Video", "prime video", "prime", "https://www.primevideo.com/search?phrase=Siya"],
    ["Apple TV", "tv", "apple", "https://tv.apple.com/search?term=Siya"],
    ["Fandango at Home", "F", "fandango", "https://athome.fandango.com/"],
  ] },
  { id: "bluray", label: "Own Blu-ray From", description: "For the shelf. For the love of cinema.", providers: [
    ["Amazon", "amazon", "prime", "https://www.amazon.in/s?k=Siya+2022+blu+ray"],
    ["Walmart", "✳", "walmart", "https://www.walmart.com/search?q=Siya+blu+ray"],
  ] },
];

function FilmWatchSection() {
  const [selected, setSelected] = useState(0);
  function handleTabKey(event, index) {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % watchOptions.length;
    else if (event.key === "ArrowLeft") next = (index + watchOptions.length - 1) % watchOptions.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = watchOptions.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    document.getElementById("watch-tab-" + watchOptions[next].id)?.focus();
  }
  return (
    <section className="film-watch" aria-labelledby="film-watch-title">
      <div className="film-watch-art">
        <img src={siyaPoster} alt="Siya official film poster" loading="lazy" />
        <span className="film-watch-edition">THE DRISHYAM COLLECTION <span>01 / SIYA</span></span>
      </div>
      <div className="film-watch-content">
        <span className="film-watch-eyebrow">WATCH, RENT OR OWN</span>
        <h2 id="film-watch-title">Spend a moment<br />in this <em>story.</em></h2>
        <p className="film-watch-intro">A voice that refuses to be silenced. A story that stays with you.</p>
        <div className="film-watch-tabs" role="tablist" aria-label="Ways to watch Siya">
          {watchOptions.map((tab, index) => (
            <button key={tab.id} id={"watch-tab-" + tab.id} type="button" role="tab"
              aria-selected={selected === index} aria-controls={"watch-panel-" + tab.id}
              tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)} onKeyDown={(event) => handleTabKey(event, index)}>
              {tab.label}
            </button>
          ))}
        </div>
        {watchOptions.map((tab, index) => (
          <div key={tab.id} id={"watch-panel-" + tab.id} role="tabpanel"
            aria-labelledby={"watch-tab-" + tab.id} hidden={selected !== index} tabIndex={0}
            className="film-watch-panel">
            <div className="film-watch-panel-heading"><h3>{tab.label}</h3><span>{String(tab.providers.length).padStart(2, "0")} PLATFORMS</span></div>
            <p>{tab.description}</p>
            <div className="film-watch-providers">
              {tab.providers.map(([name, mark, tone, href]) => (
                <a className="film-watch-provider" key={name} href={href}
                  target="_blank" rel="noopener noreferrer" aria-label={"Explore " + name + " for Siya (opens in a new tab)"}>
                  <span className={"film-watch-logo film-watch-logo--" + tone} aria-hidden="true">{mark}</span>
                  <span className="film-watch-provider-name">{name}</span>
                  <span className="film-watch-provider-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <small>Explore platforms for availability in your region.</small>
          </div>
        ))}
        <div className="film-watch-synopsis">
          <span>THE STORY</span>
          <p>A young woman fights for justice against a system determined to silence her, in an unflinching story of courage and resilience.</p>
          <div>SIYA <span>2022 / HINDI / DRAMA</span></div>
        </div>
      </div>
    </section>
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
              src={siyaPoster1}
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
        <FilmWatchSection />
        <section className={"film-gallery"} aria-labelledby={"film-gallery-title"}>
          <div className={"film-gallery-heading"}>
            <span>FRAMES FROM SIYA</span>
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
