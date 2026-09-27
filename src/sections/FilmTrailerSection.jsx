import { useState } from "react";
import { films } from "../data/homeData";
import siyaStill from "../assets/images/siya/3.jpg";

const trailerUrl = films.find((film) => film.title === "Siya").trailerUrl;
const videoId = new URL(trailerUrl).searchParams.get("v");

export default function FilmTrailerSection() {
  const [playing, setPlaying] = useState(false);
  return (
    <section id="siya-trailer" className="film-trailer-section" aria-labelledby="siya-trailer-title">
      <div className="film-trailer-heading">
        <h2 id="siya-trailer-title">Official Trailer</h2>
        <a href={trailerUrl} target="_blank" rel="noopener noreferrer">Watch on YouTube <span aria-hidden="true">&nearr;</span></a>
      </div>
      <div className="film-trailer-player">
        {playing ? (
          <iframe
            src={"https://www.youtube-nocookie.com/embed/" + videoId + "?autoplay=1&rel=0"}
            title="Siya official trailer - Drishyam Films"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            onLoad={(event) => event.currentTarget.focus()}
          />
        ) : (
          <button type="button" className="film-trailer-preview" aria-label="Play Siya official trailer"
            onClick={() => setPlaying(true)}>
            <img src={siyaStill} alt="" loading="lazy" decoding="async" />
            <span className="film-trailer-play" aria-hidden="true">&#9654;</span>
            <span className="film-trailer-label">Watch Siya Trailer</span>
          </button>
        )}
      </div>
    </section>
  );
}
