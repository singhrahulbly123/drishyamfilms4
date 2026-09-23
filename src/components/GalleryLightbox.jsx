import { useEffect, useRef, useState } from "react";

export default function GalleryLightbox({ items, initialIndex, onClose }) {
  const [index, setIndex] = useState(initialIndex);
  const dialog = useRef(null);
  const item = items[index];
  useEffect(() => {
    const previousFocus = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current.showModal();
    return () => {
      document.body.style.overflow = overflow;
      previousFocus?.focus();
    };
  }, []);
  const move = (delta) =>
    setIndex((value) => (value + delta + items.length) % items.length);
  return (
    <dialog
      ref={dialog}
      className="ar-lightbox"
      aria-label="Gallery image viewer"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
      }}
    >
      <div className="ar-viewer-top">
        <span className="ar-eyebrow">DRISHYAM / THE VISUAL ARCHIVE</span>
        <button autoFocus onClick={onClose} aria-label="Close image viewer">
          ✕
        </button>
      </div>
      <div className="ar-viewer-image">
        <button onClick={() => move(-1)} aria-label="Previous image">
          ←
        </button>
        <img src={item.image} alt={item.alt} />
        <button onClick={() => move(1)} aria-label="Next image">
          →
        </button>
      </div>
      <div className="ar-viewer-bottom" aria-live="polite">
        <div>
          <p className="ar-eyebrow">{item.category}</p>
          <h2>{item.title}</h2>
        </div>
        <span>
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(items.length).padStart(2, "0")}
        </span>
      </div>
    </dialog>
  );
}
