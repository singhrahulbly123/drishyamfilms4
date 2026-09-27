import FilmTrailerSection from "../../sections/FilmTrailerSection";
import siyaStill from "../../assets/images/siya/3.jpg";
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
            poster={siyaStill}
            autoPlay
            muted
            loop
            playsInline
            preload={"auto"}
            aria-label={"Siya film excerpt, playing on a continuous loop"}
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
        <section className="film-story-compact" aria-label="Siya story and credits">
          <div className="film-story-inner">
            <p className="film-logline">Siya follows a young woman who chooses to fight for justice against a system determined to silence her.</p>
            <dl className="film-story-credits">
              <div><dt>Directed by</dt><dd>Manish Mundra</dd></div>
              <div><dt>Starring</dt><dd>Pooja Pandey &amp; Vineet Kumar Singh</dd></div>
              <div><dt>Genre</dt><dd>Realist crime drama</dd></div>
              <div><dt>Release</dt><dd>16 September 2022</dd></div>
            </dl>
          </div>
        </section>
        <FilmTrailerSection />
        <FilmWatchSection />
        <FilmGallery />
      </div>
    </section>
  );
}
