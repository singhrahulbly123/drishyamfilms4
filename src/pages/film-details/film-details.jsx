import masaanStoriesImage from "../../asstes/images/masaan-our-stories.jpg";

const Arrow = () => <span className={"arrow"}>→</span>;

export default function FilmDetailsPage({ onPlay, onExplore }) {
  return (
    <section id={"film-details"} className={"about-imdb-page"}>
      <div className={"imdb-about-layout"}>
   
   
        <div className={"imdb-about-media"}>
          <img
            className={"imdb-about-poster"}
            src={masaanStoriesImage}
            alt={"Masaan film poster still"}
          />
          <button
            className={"imdb-about-feature ticket-button"}
            type={"button"}
            onClick={onPlay}
            aria-label={"Play Masaan film"}
          >
            <img src={masaanStoriesImage} alt={""} />
            <span>▶</span>
            <b>PLAY FEATURE</b>
          </button>
          <div className={"imdb-about-tiles"}>
            <button className={"ticket-button"} type={"button"} onClick={onPlay}>
              <b>▶</b>
              <span>
                WATCH
                <br />
                MASAAN
              </span>
            </button>
            <div>
              <b>✦</b>
              <span>
                OUR
                <br />
                FILMS
              </span>
            </div>
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
          aria-labelledby={"masaan-review-title"}
        >
          <div className={"masaan-review-intro"}>
            <span>FEATURE REVIEW</span>
            <h2 id={"masaan-review-title"}>
              Masaan <i>(2015)</i>
            </h2>
            <p>
              <b>Masaan</b> (Crematorium), released internationally as{" "}
              <i>Fly Away Solo</i>, is a Hindi romance drama and Neeraj
              Ghaywan’s directorial debut.
            </p>
            <button
              className={"imdb-about-watch ticket-button ticket-button--solid"}
              type={"button"}
              onClick={onPlay}
            >
              <span>▶</span> WATCH MASAAN <Arrow />
            </button>
          </div>
          <dl className={"masaan-facts"}>
            <div>
              <dt>YEAR / LANGUAGE</dt>
              <dd>2015 · Hindi</dd>
            </div>
            <div>
              <dt>RUNTIME</dt>
              <dd>109 min</dd>
            </div>
            <div>
              <dt>GENRE</dt>
              <dd>Romance · Drama</dd>
            </div>
            <div>
              <dt>DIRECTOR</dt>
              <dd>Neeraj Ghaywan</dd>
            </div>
            <div>
              <dt>WRITER</dt>
              <dd>Varun Grover</dd>
            </div>
            <div>
              <dt>PREMIERE</dt>
              <dd>68th Cannes · Un Certain Regard</dd>
            </div>
          </dl>
          <div className={"masaan-review-grid"}>
            <section>
              <span>CAST &amp; CREW</span>
              <div className={"masaan-credit-list"}>
                <p>
                  <b>Richa Chadha</b>Devi Pathak
                </p>
                <p>
                  <b>Vicky Kaushal</b>Deepak Kumar · screen debut
                </p>
                <p>
                  <b>Shweta Tripathi</b>Shaalu Gupta
                </p>
                <p>
                  <b>Sanjay Mishra</b>Vidyadhar Pathak
                </p>
                <p>
                  <b>Pankaj Tripathi</b>Sadhya ji
                </p>
                <p>
                  <b>Avinash Arun</b>Cinematography
                </p>
                <p>
                  <b>Nitin Baid</b>Editing
                </p>
                <p>
                  <b>Indian Ocean / Bruno Coulais</b>Music
                </p>
              </div>
            </section>
            <section>
              <span>AWARDS &amp; FESTIVALS</span>
              <div className={"masaan-awards"}>
                <p>
                  <b>FIPRESCI Prize</b>Cannes 2015 · Un Certain Regard
                </p>
                <p>
                  <b>Prix de l’Avenir</b>Promising Future Prize
                </p>
                <p>
                  <b>5-minute standing ovation</b>Cannes premiere · 19 May 2015
                </p>
                <p>
                  <b>6th Jagran Film Festival</b>India premiere · Delhi
                </p>
              </div>
            </section>
          </div>
          <div className={"masaan-producers"}>
            <span>PRODUCERS</span>
            <p>
              Manish Mundra · Melita Toscan du Plantier · Marie-Jeanne Pascal ·
              Guneet Monga · Shaan Vyas · Vikas Bahl · Vikramaditya Motwane ·
              Anurag Kashyap
            </p>
          </div>
          <div className={"masaan-links"}>
            <span>READ THE REVIEWS</span>
            <a
              href={
                "https://variety.com/2015/film/festivals/cannes-film-review-masaan-1201504265/"
              }
              target={"_blank"}
              rel={"noreferrer"}
            >
              Variety ↗
            </a>
            <a
              href={
                "https://indianexpress.com/article/entertainment/movie-review/masaan-movie-review/"
              }
              target={"_blank"}
              rel={"noreferrer"}
            >
              Indian Express ↗
            </a>
            <a
              href={
                "https://www.hollywoodreporter.com/movies/movie-news/masaan-cannes-review-797795/"
              }
              target={"_blank"}
              rel={"noreferrer"}
            >
              Hollywood Reporter ↗
            </a>
            <a
              href={"https://letterboxd.com/film/masaan/"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              Letterboxd ↗
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
