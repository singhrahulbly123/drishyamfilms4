import FilmWatchSection from "../../sections/FilmWatchSection";
import FilmGallery from "../../sections/FilmGallery";
import siyaFeatureVideo from "../../assets/videos/Siya_1.mp4";

export default function FilmDetailsPage() {
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
            <p>DRISHYAM FILMS PRESENTS</p>
            <h1>SIYA</h1>
            <span>A STORY OF COURAGE AND RESISTANCE</span>
            <ul aria-label={"Film details"}>
              <li>2022</li>
              <li>HINDI</li>
              <li>REALIST CRIME DRAMA</li>
            </ul>
          </div>
          <div className={"film-details-banner-credit"}>
            <span>DIRECTED BY</span>
            <b>MANISH MUNDRA</b>
          </div>
        </div>
        <section
          className="film-story-compact"
          aria-labelledby="siya-review-title"
        >
          <div className="film-story-inner">
            <div className="film-story-heading">
              <span className="film-story-eyebrow">THE STORY BEHIND SIYA</span>
              <h2 id="siya-review-title">
                A voice that
                <br />
                <em>refuses to fade.</em>
              </h2>
              <p className="film-story-meta">
                2022 <span aria-hidden="true">/</span> Hindi{" "}
                <span aria-hidden="true">/</span> 110 min
              </p>
            </div>
            <div className="film-story-copy">
              <p className="film-story-lead">
                <strong>Siya</strong> follows a young woman who chooses to fight
                for justice against a system determined to silence her.
              </p>
              <p>
                As she confronts powerful interests and the pressure to remain
                silent, her pursuit of justice becomes a story of courage and
                resilience. Manish Mundra's directorial debut places her voice
                at the centre of this Hindi realist crime drama.
              </p>
              <dl className="film-story-credits">
                <div>
                  <dt>Directed by</dt>
                  <dd>Manish Mundra</dd>
                </div>
                <div>
                  <dt>Starring</dt>
                  <dd>Pooja Pandey &amp; Vineet Kumar Singh</dd>
                </div>
                <div>
                  <dt>Genre</dt>
                  <dd>Realist crime drama</dd>
                </div>
                <div>
                  <dt>Release</dt>
                  <dd>16 September 2022</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        <FilmWatchSection />
        <FilmGallery />
      </div>
    </section>
  );
}
