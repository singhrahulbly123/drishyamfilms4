import { useEffect, useRef, useState } from 'react';
import masaan from '../../asstes/images/masaan-our-stories.jpg';
import masaanPoster from '../../asstes/images/masaan-poster.jpg';
import dhanak from '../../asstes/images/dhanak-poster.jpg';
import newton from '../../asstes/images/newton-poster.png';
import siya from '../../asstes/images/siya-gallery-poster.jpg';
import awardsGalleryHero from '../../asstes/images/awards-gallery-hero.png';
import './archive.css';

const stills = Object.entries(import.meta.glob('../../asstes/images/siya/*.jpg', { eager: true, query: '?url', import: 'default' }))
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, image], index) => ({ image, film: 'Siya', category: 'Film stills', title: `Siya / Frame ${String(index + 1).padStart(2, '0')}`, alt: `A moment from Siya, film still ${index + 1}` }));
const gallery = [
  { image: masaan, film: 'Masaan', category: 'Film stills', title: 'Masaan / A world by the river', alt: 'A cinematic frame from Masaan' },
  { image: dhanak, film: 'Dhanak', category: 'Posters', title: 'Dhanak / A journey of hope', alt: 'Dhanak film poster' },
  ...stills.slice(0, 2),
  { image: newton, film: 'Newton', category: 'Posters', title: 'Newton / A matter of conviction', alt: 'Newton film poster' },
  { image: masaanPoster, film: 'Masaan', category: 'Posters', title: 'Masaan / The official poster', alt: 'Masaan film poster' },
  ...stills.slice(2),
  { image: siya, film: 'Siya', category: 'Posters', title: 'Siya / A voice that matters', alt: 'Siya film artwork' },
];
// Recognition already featured in the site's film catalogue.
const awards = [
  { film: 'Masaan', event: 'Cannes Film Festival', year: '2015', prize: 'FIPRESCI Prize', note: 'An intimate story. An international resonance.', image: masaanPoster, type: 'International recognition' },
  { film: 'Masaan', event: 'Cannes Film Festival', year: '2015', prize: 'Prix de l’Avenir', note: 'A distinctive new voice in Indian cinema.', image: masaanPoster, type: 'International recognition' },
  { film: 'Dhanak', event: 'Berlin International Film Festival', year: '2015', prize: 'Crystal Bear · Grand Prix', note: 'A little hope can travel a very long way.', image: dhanak, type: 'International recognition' },
  { film: 'Dhanak', event: 'National Film Awards', year: null, prize: 'Best Children’s Film', note: 'Celebrating the wonder of a child’s world.', image: dhanak, type: 'National recognition' },
  { film: 'Newton', event: 'Berlin International Film Festival', year: '2017', prize: 'CICAE Art Cinema Award', note: 'A story of conscience, seen around the world.', image: newton, type: 'International recognition' },
  { film: 'Newton', event: 'National Film Awards', year: null, prize: 'Best Hindi Film', note: 'Independent in spirit. Universal in impact.', image: newton, type: 'National recognition' },
];
function ArchiveLink({ to, onNavigate, children, ...props }) {
  return <a href={to} {...props} onClick={event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault(); onNavigate(to);
  }}>{children}</a>;
}
function Laurel() {
  return <svg className="ar-laurel" viewBox="0 0 100 100" fill="none" aria-hidden="true"><path d="M39 88C8 73 9 34 30 12M61 88C92 73 91 34 70 12" stroke="currentColor" strokeWidth="1.4" />{[0, 1, 2, 3, 4, 5].map(i => <g key={i} transform={`translate(0 ${i * 10})`}><path d={`M${24 - Math.sin(i / 2) * 7} ${20}q-14-6-10-15q12 3 10 15q11-1 12-11q-11-1-12 11`} fill="currentColor" /><path d={`M${76 + Math.sin(i / 2) * 7} ${20}q14-6 10-15q-12 3-10 15q-11-1-12-11q11-1 12 11`} fill="currentColor" /></g>)}<path d="m50 36 3.5 7 8 1-5.8 5.6 1.4 8-7.1-3.8-7.1 3.8 1.4-8-5.8-5.6 8-1Z" fill="currentColor" /></svg>;
}
function Lightbox({ items, initialIndex, onClose }) {
  const [index, setIndex] = useState(initialIndex);
  const dialog = useRef(null);
  const item = items[index];
  useEffect(() => {
    const previousFocus = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current.showModal();
    return () => { document.body.style.overflow = overflow; previousFocus?.focus(); };
  }, []);
  const move = delta => setIndex(value => (value + delta + items.length) % items.length);
  return <dialog ref={dialog} className="ar-lightbox" aria-label="Gallery image viewer" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }} onKeyDown={event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
  }}><div className="ar-viewer-top"><span className="ar-eyebrow">DRISHYAM / THE VISUAL ARCHIVE</span><button autoFocus onClick={onClose} aria-label="Close image viewer">✕</button></div><div className="ar-viewer-image"><button onClick={() => move(-1)} aria-label="Previous image">←</button><img src={item.image} alt={item.alt} /><button onClick={() => move(1)} aria-label="Next image">→</button></div><div className="ar-viewer-bottom" aria-live="polite"><div><p className="ar-eyebrow">{item.category}</p><h2>{item.title}</h2></div><span>{String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span></div></dialog>;
}
export default function ArchivePages({ onNavigate }) {
  useEffect(() => {
    const previous = document.title;
    document.title = 'Awards & Gallery | Drishyam Films';
    return () => { document.title = previous; };
  }, []);

  return <div className="archive-page ar-combined-page">
    <section className="ar-hero">
      <img className="ar-hero-image" src={awardsGalleryHero} alt="" fetchPriority="high" width="1672" height="941" />
      <div className="ar-hero-shade" />
      <div className="ar-hero-content ar-wrap">
        <div className="ar-breadcrumb"><ArchiveLink to="/" onNavigate={onNavigate}>HOME</ArchiveLink><span>/</span><span>AWARDS &amp; GALLERY</span></div>
        <div className="ar-hero-body">
          <p className="ar-eyebrow">DRISHYAM FILMS / A CELEBRATION OF CINEMA</p>
          <h1>Awards <em>&amp; Gallery</em></h1>
          <p className="ar-hero-description">The honours that celebrate our stories. The moments that bring them to life. Step into the world of Drishyam Films.</p>
          <nav className="ar-section-links" aria-label="Explore Awards & Gallery">
            <a className="ar-link" href="#awards">OUR AWARDS <span aria-hidden="true">↓</span></a>
            <a className="ar-link" href="#gallery">THE GALLERY <span aria-hidden="true">↓</span></a>
          </nav>
        </div>
        <div className="ar-hero-foot"><span>INDEPENDENT SPIRIT. LASTING IMPACT.</span><span>HONOURS &amp; MOMENTS, TOGETHER</span></div>
      </div>
    </section>
    <div className="ar-festival-strip"><span>STORIES WITHOUT BORDERS</span><p>Cannes <i>✦</i> Berlinale <i>✦</i> National Film Awards</p></div>
    <ArchiveCollection isGallery={false} />
    <ArchiveCollection isGallery />
    <section className="ar-closing">
      <p className="ar-eyebrow">THE DRISHYAM PERSPECTIVE</p>
      <h2>Behind every honour,<br /><em>a story worth telling.</em></h2>
      <ArchiveLink className="ar-link" to="/#films" onNavigate={onNavigate}>EXPLORE OUR FILMS <span aria-hidden="true">↗</span></ArchiveLink>
    </section>
  </div>;
}

function ArchiveCollection({ isGallery }) {
  const [filter, setFilter] = useState('All');
  const [activeImage, setActiveImage] = useState(null);
  const items = isGallery ? gallery.filter(item => filter === 'All' || item.category === filter) : awards.filter(item => filter === 'All' || item.film === filter);
  const filters = isGallery ? ['All', 'Film stills', 'Posters'] : ['All', 'Masaan', 'Dhanak', 'Newton'];
  return <>
    <section id={isGallery ? "gallery" : "awards"} className="ar-wrap ar-collection"><header className="ar-section-heading"><div><p className="ar-eyebrow">{isGallery ? '02 / THROUGH OUR LENS' : '01 / OUR ROLL OF HONOUR'}</p><h2>{isGallery ? 'Cinema, ' : 'Recognition that '}<em>{isGallery ? 'up close.' : 'matters.'}</em></h2></div><p>{isGallery ? 'Pause. Look closer. There is a story in every still.' : 'From festival screens to national honours, a shared celebration of fearless storytelling.'}</p></header>
      <div className="ar-toolbar"><div className="ar-filters" role="group" aria-label={isGallery ? 'Filter gallery' : 'Filter awards by film'}>{filters.map(name => <button key={name} aria-pressed={filter === name} onClick={() => setFilter(name)}>{name === 'All' ? isGallery ? 'All frames' : 'All films' : name}</button>)}</div><span className="ar-count" aria-live="polite">{String(items.length).padStart(2, '0')} {isGallery ? 'FRAMES' : 'HONOURS'}</span></div>
      {isGallery ? <div className="ar-gallery-grid">{items.map((item, index) => <button className={`ar-photo ${item.category === 'Posters' ? 'ar-photo-poster' : ''}`} key={item.image} onClick={() => setActiveImage(index)} aria-label={`View ${item.title}`}><img src={item.image} alt={item.alt} loading="lazy" /><span className="ar-photo-overlay"><span><small>{item.category} / {item.film}</small><strong>{item.title}</strong></span><b aria-hidden="true">↗</b></span><span className="ar-photo-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span></button>)}</div> : <div className="ar-awards-grid">{items.map((item, index) => <article className="ar-award-card" key={item.prize}><div className="ar-award-top"><span>{item.type}</span><span>{item.year || 'INDIA'}</span></div><Laurel /><p className="ar-award-event">{item.event}</p><h3>{item.prize}</h3><div className="ar-award-film"><img src={item.image} alt={`${item.film} poster`} loading="lazy" /><div><h4>{item.film}</h4><p>{item.note}</p></div><span className="ar-award-index">0{index + 1}</span></div></article>)}</div>}
      <div className="ar-endnote"><span />{isGallery ? 'MOMENTS THAT STAY WITH YOU' : 'THE STORY CONTINUES'}<span /></div>
    </section>
    {activeImage !== null && <Lightbox items={items} initialIndex={activeImage} onClose={() => setActiveImage(null)} />}
  </>;
}