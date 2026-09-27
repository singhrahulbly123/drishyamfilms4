import FestivalLaurel from "../components/FestivalLaurel";
import { films } from "../data/homeData";
import siyaPoster from "../assets/images/siya-poster.jpg";
import masaanStill from "../assets/images/masaan-our-stories.jpg";
import dhanakPoster from "../assets/images/dhanak-poster.jpg";
import newtonPoster from "../assets/images/newton-poster.png";

const artwork = { Siya: siyaPoster, Masaan: masaanStill, Dhanak: dhanakPoster, Newton: newtonPoster };

export default function FilmCatalog() {
  return (
    <section id="films" className="catalog film-showcase" aria-labelledby="feature-showcase-title">
      <header className="showcase-heading">
        <h2 id="feature-showcase-title">Feature Showcase</h2>
      </header>
      <div className="showcase-grid">
        {films.map((film, index) => (
          <article className={"showcase-card showcase-card--" + index} key={film.title}>
            <a className="showcase-art" href={film.trailerUrl} target="_blank" rel="noopener noreferrer"
              aria-label={"Watch " + film.title + " trailer (opens in a new tab)"}>
              <img src={artwork[film.title]} alt={film.title + " film artwork"} loading="lazy" decoding="async" />
              <div className="showcase-overlay">
                <p>{film.year}</p>
                <p className="showcase-director"><span>Director</span><strong>{film.director}</strong></p>
                <div className="showcase-awards">
                  {film.acclaim.map(award => (
                    <div key={award}><FestivalLaurel /><span>{award}</span></div>
                  ))}
                </div>
                <span className="showcase-watch">Watch Trailer <span aria-hidden="true">&rarr;</span></span>
              </div>
            </a>
            <div className="showcase-caption">
              <p>{film.year} &middot; {film.genre}</p>
              <h3>{film.title}</h3>
              <p className="showcase-director-caption">Director <strong>{film.director}</strong></p>
              <a href={film.trailerUrl} target="_blank" rel="noopener noreferrer"
                aria-label={"Watch " + film.title + " trailer (opens in a new tab)"}>
                Watch Trailer <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
