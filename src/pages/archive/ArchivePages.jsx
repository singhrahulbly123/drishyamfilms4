import useDocumentTitle from "../../hooks/useDocumentTitle";
import InternalLink from "../../components/InternalLink";
import { gallery, awards } from "../../data/archiveData";
import GalleryLightbox from "../../components/GalleryLightbox";
import { useState } from "react";
import awardsGalleryHero from "../../assets/images/awards-gallery-hero.png";
import "../../styles/archive.css";

function Laurel() {
  return (
    <svg
      className="ar-laurel"
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M39 88C8 73 9 34 30 12M61 88C92 73 91 34 70 12"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i} transform={`translate(0 ${i * 10})`}>
          <path
            d={`M${24 - Math.sin(i / 2) * 7} ${20}q-14-6-10-15q12 3 10 15q11-1 12-11q-11-1-12 11`}
            fill="currentColor"
          />
          <path
            d={`M${76 + Math.sin(i / 2) * 7} ${20}q14-6 10-15q-12 3-10 15q-11-1-12-11q11-1 12 11`}
            fill="currentColor"
          />
        </g>
      ))}
      <path
        d="m50 36 3.5 7 8 1-5.8 5.6 1.4 8-7.1-3.8-7.1 3.8 1.4-8-5.8-5.6 8-1Z"
        fill="currentColor"
      />
    </svg>
  );
}
export default function ArchivePages({ onNavigate }) {
  useDocumentTitle("Awards & Gallery | Drishyam Films");

  return (
    <div className="archive-page ar-combined-page">
      <section className="ar-hero">
        <img
          className="ar-hero-image"
          src={awardsGalleryHero}
          alt=""
          fetchPriority="high"
          width="1672"
          height="941"
        />
        <div className="ar-hero-shade" />
        <div className="ar-hero-content ar-wrap">
          <div className="ar-breadcrumb">
            <InternalLink to="/" onNavigate={onNavigate}>
              HOME
            </InternalLink>
            <span>/</span>
            <span>AWARDS &amp; GALLERY</span>
          </div>
          <div className="ar-hero-body">
            <h1>
              Awards <em>&amp; Gallery</em>
            </h1>
            <p className="ar-hero-description">
              Awards received by our films, alongside posters and stills from the productions.
            </p>
            <nav
              className="ar-section-links"
              aria-label="Explore Awards & Gallery"
            >
              <a className="ar-link" href="#awards">
                OUR AWARDS <span aria-hidden="true">↓</span>
              </a>
              <a className="ar-link" href="#gallery">
                THE GALLERY <span aria-hidden="true">↓</span>
              </a>
            </nav>
          </div>
        </div>
      </section>
      <div className="ar-festival-strip">
        <span>Film festivals & awards</span>
        <p>
          Cannes <i>✦</i> Berlinale <i>✦</i> National Film Awards
        </p>
      </div>
      <ArchiveCollection isGallery={false} />
      <ArchiveCollection isGallery />
      <section className="ar-closing">
        <h2>
          Watch <em>our films.</em>
        </h2>
        <InternalLink className="ar-link" to="/#films" onNavigate={onNavigate}>
          EXPLORE OUR FILMS <span aria-hidden="true">↗</span>
        </InternalLink>
      </section>
    </div>
  );
}

function ArchiveCollection({ isGallery }) {
  const [filter, setFilter] = useState("All");
  const [activeImage, setActiveImage] = useState(null);
  const items = isGallery
    ? gallery.filter((item) => filter === "All" || item.category === filter)
    : awards.filter((item) => filter === "All" || item.film === filter);
  const filters = isGallery
    ? ["All", "Film stills", "Posters"]
    : ["All", "Masaan", "Dhanak", "Newton"];
  return (
    <>
      <section
        id={isGallery ? "gallery" : "awards"}
        className="ar-wrap ar-collection"
      >
        <header className="ar-section-heading">
          <div>
            <h2>
              {isGallery ? "Stills & posters" : "Awards"}
            </h2>
          </div>
          <p>
            {isGallery
              ? "Browse film stills and original posters. Select an image to view it in full."
              : "Festival and national awards, organised by film."}
          </p>
        </header>
        <div className="ar-toolbar">
          <div
            className="ar-filters"
            role="group"
            aria-label={isGallery ? "Filter gallery" : "Filter awards by film"}
          >
            {filters.map((name) => (
              <button
                key={name}
                aria-pressed={filter === name}
                onClick={() => setFilter(name)}
              >
                {name === "All"
                  ? isGallery
                    ? "All frames"
                    : "All films"
                  : name}
              </button>
            ))}
          </div>
          <span className="ar-count" aria-live="polite">
            {items.length}{" "}
            {isGallery ? "FRAMES" : "HONOURS"}
          </span>
        </div>
        {isGallery ? (
          <div className="ar-gallery-grid">
            {items.map((item, index) => (
              <button
                className={`ar-photo ${item.category === "Posters" ? "ar-photo-poster" : ""}`}
                key={item.image}
                onClick={() => setActiveImage(index)}
                aria-label={`View ${item.title}`}
              >
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="ar-photo-overlay">
                  <span>
                    <small>
                      {item.category} / {item.film}
                    </small>
                    <strong>{item.title}</strong>
                  </span>
                  <b aria-hidden="true">↗</b>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="ar-awards-grid">
            {items.map((item, index) => (
              <article className="ar-award-card" key={item.prize}>
                <div className="ar-award-top">
                  <span>{item.type}</span>
                  <span>{item.year || "INDIA"}</span>
                </div>
                <Laurel />
                <p className="ar-award-event">{item.event}</p>
                <h3>{item.prize}</h3>
                <div className="ar-award-film">
                  <img
                    src={item.image}
                    alt={`${item.film} poster`}
                    loading="lazy"
                  />
                  <div>
                    <h4>{item.film}</h4>
                    <p>{item.note}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
      {activeImage !== null && (
        <GalleryLightbox
          items={items}
          initialIndex={activeImage}
          onClose={() => setActiveImage(null)}
        />
      )}
    </>
  );
}
