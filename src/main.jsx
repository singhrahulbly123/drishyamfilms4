import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import whiteLogo from './asstes/logo/white-logo.svg';
import siyaVideo from './asstes/slider/siya.mp4';
import newtonVideo from './asstes/slider/newton.mp4';
import kaamyaabVideo from './asstes/slider/kaamyaab.mp4';
import umrikaVideo from './asstes/slider/umrika.mp4';

const sliderVideos = [siyaVideo, newtonVideo, kaamyaabVideo, umrikaVideo];

const slides = [
  {
    title: "SIYA",
    kicker: "A DRISHYAM FILMS RELEASE",
    date: "NOW STREAMING",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=90",
  },
  {
    title: "NEWTON",
    kicker: "A STORY OF CONSCIENCE",
    date: "AWARD-WINNING CINEMA",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2200&q=90",
  },
  {
    title: "KAAMYAAB",
    kicker: "THE EXTRAORDINARY ORDINARY",
    date: "WATCH NOW",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2200&q=90",
  },
  {
    title: "UMRIKA",
    kicker: "A STORY OF RESILIENCE",
    date: "NOW STREAMING",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2200&q=90",
  }
];
const films = [
  {
    title: "Siya",
    genre: "Drama",
    image:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1000&q=88",
  },
  {
    title: "Newton",
    genre: "Drama / Satire",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=88",
  },
  {
    title: "Kaamyaab",
    genre: "Drama",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=88",
  },
  {
    title: "Umrika",
    genre: "Drama / Comedy",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=88",
  },
];
const Arrow = () => <span className="arrow">&#8594;</span>;
const Play = () => <span className="play">&#9654;</span>;
function App() {
  const [dark, setDark] = useState(true),
    [active, setActive] = useState(0),
    [modal, setModal] = useState(null),
    [menu, setMenu] = useState(false),
    [heroHovered, setHeroHovered] = useState(false),
    [premiereOpen, setPremiereOpen] = useState(false),
    [catalogFilm, setCatalogFilm] = useState(0),
    [catalogProgress, setCatalogProgress] = useState(0);
  const catalogRef = useRef(null);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);
  useEffect(() => {
    if (heroHovered) return;
    const t = setInterval(
      () => setActive((v) => (v + 1) % slides.length),
      6500,
    );
    return () => clearInterval(t);
  }, [heroHovered]);
  useEffect(() => {
    let frame;
    const updateCatalog = () => {
      const section = catalogRef.current;
      if (!section) return;
      const progress = Math.min(1, Math.max(0, -section.getBoundingClientRect().top / Math.max(section.offsetHeight - window.innerHeight, 1)));
      setCatalogProgress(progress);
      setCatalogFilm(Math.min(films.length - 1, Math.floor(progress * films.length)));
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(updateCatalog); };
    updateCatalog();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
  const scroll = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  const hero = slides[active];
  return (
    <main>
      <header className="site-header">
        <button className="brand" onClick={() => scroll("#top")}>
          <img src={whiteLogo} alt="Drishyam Films" />
         
        </button>
        <nav>
          {/* <button onClick={() => scroll("#films")}>Films &amp; Series</button>
          <button onClick={() => scroll("#about")}>About</button>
          <button onClick={() => scroll("#journal")}>Stories</button>
          <button onClick={() => scroll("#contact")}>Contact</button> */}
        </nav>
        <button
          onClick={() => setMenu(true)}
          className="menu-button"
          aria-label="Open menu"
        >
          <span className={'hamburger'} aria-hidden={'true'}>
            <i />
            <i />
            <i />
          </span>
        </button>
        <aside className={`side-menu ${menu ? "open" : ""}`}>
          <div className="side-top">
            <span>DRISHYAM FILMS</span>
            <button onClick={() => setMenu(false)} aria-label="Close menu">
              &times;
            </button>
          </div>
          <div className="side-links">
            <button
              onClick={() => {
                scroll("#films");
                setMenu(false);
              }}
            >
              Films &amp; Series <b>01</b>
            </button>
            <button
              onClick={() => {
                scroll("#about");
                setMenu(false);
              }}
            >
              About <b>02</b>
            </button>
            <button
              onClick={() => {
                scroll("#journal");
                setMenu(false);
              }}
            >
              Stories <b>03</b>
            </button>
            <button
              onClick={() => {
                scroll("#contact");
                setMenu(false);
              }}
            >
              Contact <b>04</b>
            </button>
          </div>
          <div className="side-contact">
            <p>START A CONVERSATION</p>
            <a href="mailto:hello@drishyamfilms.com">hello@drishyamfilms.com</a>
            <div>
              <a href="#contact">INSTAGRAM</a>
              <a href="#contact">LINKEDIN</a>
              <a href="#contact">YOUTUBE</a>
            </div>
          </div>
        </aside>
      </header>
      <section id="top" className="hero">
        <video
          key={sliderVideos[active]}
          className={'hero-media'}
          src={sliderVideos[active]}
          autoPlay
          muted
          loop
          playsInline
          preload={'auto'}
          aria-hidden={'true'}
          onMouseEnter={() => setHeroHovered(true)}
          onMouseLeave={() => setHeroHovered(false)}
        />
        <div className="hero-wash" />
        <div className="hero-content">
          <p>{hero.kicker}</p>
          <h1>{hero.title}</h1>
          <span>{hero.date}</span>
          <div className="hero-actions">
            <button className="button light" onClick={() => setModal(hero)}>
              <Play /> WATCH TRAILER
            </button>
            <button className="button ghost" onClick={() => scroll("#films")}>
              DISCOVER FILM <Arrow />
            </button>
          </div>
        </div>
        <div className="slide-tabs">
          {slides.map((slide, i) => (
            <button
              key={slide.title}
              className={i === active ? "active" : ""}
              onClick={() => setActive(i)}
            >
              <b>0{i + 1}</b>
              <span>{slide.title}</span>
            </button>
          ))}
        </div>
        <div className="hero-credit">DRISHYAM FILMS / INDEPENDENT CINEMA</div>
      </section>
      <section className="premiere">
        <div className="premiere-copy">
          <p className="eyebrow">ABOUT US PREMIERE</p>
          <h2>
            Cinema for
            <br />
            <em>the curious.</em>
          </h2>
          <p>
            Stories from India that meet the world with heart, craft and a
            singular point of view. Stories from India that meet the world with heart, craft and a
            singular point of view. Stories from India that meet the world with heart, craft and a
            singular point of view. Stories from India that meet the world with heart, craft and a
            singular point of view. Stories from India that meet the world with heart, craft and a
            singular point of view.
          </p>
          <button onClick={() => scroll("#films")} className="discover">
            EXPLORE <Arrow />
          </button>
        </div>
        <div className="premiere-art">
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1500&q=88"
            alt="Film projection"
          />
          <button
            className={'premiere-play'}
            onClick={() => setPremiereOpen(true)}
            aria-label={'Play About Us premiere video'}
          >
            <span aria-hidden={'true'}>&#9654;</span>
            <small>PLAY</small>
          </button>
          <div className="art-label">
            EST.
            <br />
            2010
            <br />
            <b>NEW DELHI</b>
          </div>
        </div>
      </section>
      <section id="films" className="catalog" ref={catalogRef}>
        <div className="catalog-stage"><div className="catalog-frame">
          {films.map((film, index) => <video key={film.title} className={`catalog-media ${index === catalogFilm ? "is-active" : ""}`} src={sliderVideos[index]} poster={film.image} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />)}
          <div className="catalog-vignette" /><div className="catalog-grain" aria-hidden="true" />
          <div className="catalog-topline"><p>OUR FILMS</p><span>{String(catalogFilm + 1).padStart(2, "0")} / {String(films.length).padStart(2, "0")}</span></div>
          <div className="catalog-copy"><p className="catalog-genre">{films[catalogFilm].genre}</p><h2 key={films[catalogFilm].title}>{films[catalogFilm].title}</h2><p className="catalog-description">A Drishyam Films story, made to stay with you long after the screen fades to black.</p><button onClick={() => setModal({ ...films[catalogFilm], video: sliderVideos[catalogFilm] })}>EXPLORE FILM <Arrow /></button></div>
          <div className="catalog-side-note">SCROLL TO DISCOVER</div><div className="catalog-progress" aria-hidden="true"><i style={{ transform: `scaleX(${Math.max(.06, catalogProgress)})` }} /></div>
          <div className="catalog-dots">{films.map((film, index) => <button key={film.title} className={index === catalogFilm ? "is-active" : ""} aria-label={`View ${film.title}`} onClick={() => { const target = catalogRef.current; if (target) window.scrollTo({ top: target.offsetTop + (target.offsetHeight - window.innerHeight) * (index / films.length), behavior: "smooth" }); }}><span>0{index + 1}</span></button>)}</div>
        </div></div>
      </section>
      <section id="about" className="spotlight">
        <img
          src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=2200&q=90"
          alt="Theatre audience"
        />
        <div className="spotlight-shade" />
        <div className="spotlight-copy">
          <p className="eyebrow">OUR DRISHYAM TESTIMONIALS</p>
          <h2>
            Independent
            <br />
            <em>by nature.</em>
          </h2>
          <p>
            We believe the best films leave space for you to find yourself in
            them.
          </p>
          <button className="button light">
            OUR STORY <Arrow />
          </button>
        </div>
      </section>
      <section id="journal" className="journal">
        <div className="journal-heading">
          <p className="eyebrow">JOURNAL</p>
          <h2>
            The people
            <br />
            behind the picture.
          </h2>
          <button>
            ALL STORIES <Arrow />
          </button>
        </div>
        <div className="journal-grid">
          <article>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85"
              alt=""
            />
            <span>STUDIO NOTES / 2026</span>
            <h3>Where a story begins</h3>
            <a href="#journal">
              READ MORE <Arrow />
            </a>
          </article>
          <article>
            <img
              src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?auto=format&fit=crop&w=900&q=85"
              alt=""
            />
            <span>FESTIVALS / 2026</span>
            <h3>Taking stories across borders</h3>
            <a href="#journal">
              READ MORE <Arrow />
            </a>
          </article>
          <article>
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=85"
              alt=""
            />
            <span>CONVERSATIONS / 2026</span>
            <h3>The next generation of filmmakers</h3>
            <a href="#journal">
              READ MORE <Arrow />
            </a>
          </article>
        </div>
      </section>
      <section id="contact" className="signup">
        <div className="signup-glow" />
        <div className="signup-copy">
          <p className="eyebrow">STAY IN THE FRAME</p>
          <h2>
            Stories worth
            <br />
            <em>waiting for.</em>
          </h2>
          <p>
            News, releases and a look behind the scenes. Delivered occasionally,
            never on autoplay.
          </p>
        </div>
        <div className="signup-card">
          <span className="card-index">01 / DRISHYAM LETTERS</span>
          <h3>
            Get the next story
            <br />
            before the credits roll.
          </h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email">EMAIL ADDRESS</label>
            <div>
              <input id="email" type="email" placeholder="you@example.com" />
              <button aria-label="Subscribe">&#8594;</button>
            </div>
          </form>
          <small>
            By subscribing, you agree to receive occasional studio news.
          </small>
        </div>
      </section>
      <footer className="cinema-footer">
        <div className="footer-top">
          <div className="footer-brand footer-logo">
            <img src={whiteLogo} alt="Drishyam Films" />
           
          </div>
          <p>
           
          </p>
          <a className="footer-mail" href="mailto:hello@drishyamfilms.com">
            hello@drishyamfilms.com <span>&#8599;</span>
          </a>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          DRISHYAM
        </div>
        <div className="footer-columns">
          <div>
            <p className="footer-label">EXPLORE</p>
            <a href="#films">Films &amp; Series</a>
            <a href="#about">The Studio</a>
            <a href="#journal">Journal</a>
          </div>
          <div>
            <p className="footer-label">CONNECT</p>
            <a href="#contact">Instagram</a>
            <a href="#contact">LinkedIn</a>
            <a href="#contact">YouTube</a>
          </div>
          <div className="footer-cta">
            <p className="footer-label">A STORY TO TELL?</p>
            <a href="mailto:hello@drishyamfilms.com">
              Start a conversation <span>&#8594;</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 DRISHYAM FILMS. ALL RIGHTS RESERVED.</p>
          <p>INDEPENDENT CINEMA / WORLDWIDE</p>
          <p>SCROLL TO BEGIN &#8593;</p>
        </div>
      </footer>
      {premiereOpen && (
        <div
          className={'video-modal'}
          role={'dialog'}
          aria-modal={'true'}
          aria-label={'About Us premiere video'}
          onClick={() => setPremiereOpen(false)}
        >
          <div
            className={'video-modal-content'}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={'video-modal-close'}
              onClick={() => setPremiereOpen(false)}
              aria-label={'Close video'}
            >
              &times;
            </button>
            <video src={siyaVideo} autoPlay controls playsInline />
          </div>
        </div>
      )}
      {modal && (
        <div className="modal" onClick={() => setModal(null)}>
          <div
            className="modal-content film-video-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${modal.title} video`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setModal(null)}>
              &times;
            </button>
            <video
              src={modal.video}
              poster={modal.image}
              autoPlay
              controls
              playsInline
            />
          </div>
        </div>
      )}
    </main>
  );
}
createRoot(document.getElementById("root")).render(<App />);
