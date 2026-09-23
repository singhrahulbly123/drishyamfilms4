import { galleryRows } from "../data/filmGallery";

function GalleryCard({ item, duplicate }) {
  return (
    <figure
      className={"film-gallery-card"}
      aria-hidden={duplicate || undefined}
    >
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

export default function FilmGallery() {
  return (
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
  );
}
