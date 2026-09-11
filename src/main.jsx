import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import FilmDetailsPage from './pages/film-details/film-details';
import AboutDrishyamPage from './pages/about-drishyam/AboutDrishyam';
import MeetOurTeamPage from './pages/meet-our-team/MeetOurTeam';
import TeamDetailPage from './pages/team-detail/TeamDetail';
import FromFounderPage from './pages/from-founder/FromFounder';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import "./styles.css";
import blogImage1 from './asstes/blog/1.png';
import blogImage2 from './asstes/blog/2.png';
import blogImage3 from './asstes/blog/3.png';
import masaanCatalogVideo from './asstes/videos/Masaan_1.mp4';
import dhanakCatalogVideo from './asstes/videos/Dhanak_1.mp4';
import newtonCatalogVideo from './asstes/videos/Newton_4.mp4';
import drishyamFilmsVideo from './asstes/videos/DrishyamFilms.mp4';
import siyaCatalogVideo from './asstes/videos/Siya_1.mp4';
import ourStoriesImage from './asstes/images/maxres1.jpg';
import contactBackgroundImage from './asstes/images/maxres1.jpg';

const sliderVideos = [masaanCatalogVideo, siyaCatalogVideo, newtonCatalogVideo];
const catalogVideos = [masaanCatalogVideo, dhanakCatalogVideo, newtonCatalogVideo, siyaCatalogVideo];

const slides = [
  {
    title: "MASAAN",
    kicker: "A STORY OF CONSCIENCE",
    date: "AWARD-WINNING CINEMA",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=90",
  },
  {
    title: "SIYA",
    kicker: "A DRISHYAM FILMS RELEASE",
    date: "NOW STREAMING",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2200&q=90",
  },
   {
    title: "NEWTON",
    kicker: "A STORY OF CONSCIENCE",
    date: "AWARD-WINNING CINEMA",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=90",
  },
];
const films = [
  {
    year: '2022',
    director: 'Manish Mundra',
    award: 'OFFICIAL SELECTION',
    title: "Masaan",
    genre: "Romance / Drama",
    image:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1000&q=88",
  },
  {
    title: "Dhanak",
    genre: "Drama",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=88",
  },
  {
    title: "Newton",
    genre: "Black Comedy / Political Satire",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=88",
  },
  {
    title: "Siya",
    genre: "Realist Crime Drama",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=88",
  },
];
const Arrow = () => <span className={'arrow'} aria-hidden={true}><svg xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 11 10'}><path fill={'currentColor'} d={'M4.481.005a6.65 6.65 0 0 1 6.46 4.659c.078.229.08.479-.003.706C10.302 7.105 8.318 10 4.48 10V8.39c.941.127 2.922-.257 4.442-2.603H0V4.208h8.938c-.756-1.229-2.216-2.78-4.457-2.78V.006Z'} /></svg></span>;
const Play = () => <span className="play">&#9654;</span>;
const SocialIcon = ({ platform }) => {
  if (platform === 'instagram') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="social-icon-dot" cx="17.5" cy="6.5" r="1" /></svg>;
  }
  if (platform === 'linkedin') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7v.01M12 17v-7m0 3a3 3 0 0 1 6 0v4" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="4" /><path className="social-icon-play" d="m10 9 5 3-5 3Z" /></svg>;
};
const filmDetails = [
  { year: '2015', director: 'Neeraj Ghaywan', award: 'FIPRESCI PRIZE\nCANNES 2015', acclaim: ['Cannes 2015', 'FIPRESCI Prize', 'Prix de l Avenir'] },
  { year: '2016', director: 'Nagesh Kukunoor', award: 'NATIONAL FILM AWARD\nBEST CHILDRENS FILM', acclaim: ['Crystal Bear', 'Grand Prix', 'Berlinale 2015'] },
  { year: '2017', director: 'Amit V. Masurkar', award: 'NATIONAL FILM AWARD\nBEST HINDI FILM', acclaim: ['India Official Entry', 'CICAE Art Cinema Award', 'Berlinale 2017'] },
  { year: '2022', director: 'Manish Mundra', award: 'ZEE5\nDIGITAL PREMIERE', acclaim: ['IFFI Selection', 'New York Indian Film Festival', 'UK Asian Film Festival'] },
];

function App() {
  const [dark, setDark] = useState(true),
    [active, setActive] = useState(0),
    [modal, setModal] = useState(null),
    [currentPath, setCurrentPath] = useState(() => window.location.pathname),
    [routeVersion, setRouteVersion] = useState(0),
    [premiereOpen, setPremiereOpen] = useState(false),
    [catalogFilm, setCatalogFilm] = useState(0),
    [catalogProgress, setCatalogProgress] = useState(0);
  const catalogRef = useRef(null);
  const [contactStatus, setContactStatus] = useState('');
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);
  useEffect(() => {
    let audioContext;
    const unlockAudio = () => {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!audioContext) audioContext = new AudioContext();
      if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
    };
    let tearing;
    const playTicketHover = (event) => {
      const ticket = event.target.closest?.('.ticket-button');
      if (!ticket || ticket.disabled || ticket.contains(event.relatedTarget)) return;
      unlockAudio();
      if (audioContext?.state !== 'running') return;
      tearing?.stop();
      const now = audioContext.currentTime;
      const duration = 0.24;
      const buffer = audioContext.createBuffer(1, Math.ceil(audioContext.sampleRate * duration), audioContext.sampleRate);
      const samples = buffer.getChannelData(0);
      for (let i = 0; i < samples.length; i++) {
        const t = i / audioContext.sampleRate;
        // Uneven noise bursts imitate paper fibres tearing along perforations.
        const fibres = Math.pow(Math.max(0, Math.sin(t * 430) * Math.sin(t * 173)), 2);
        samples[i] = (Math.random() * 2 - 1) * (0.15 + fibres * 0.85);
      }
      const source = audioContext.createBufferSource();
      source.buffer = buffer;
      const filter = audioContext.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 1100;
      const gain = audioContext.createGain();
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
      source.connect(filter).connect(gain).connect(audioContext.destination);
      tearing = source;
      source.onended = () => {
        source.disconnect();
        filter.disconnect();
        gain.disconnect();
        if (tearing === source) tearing = null;
      };
      source.start(now);
    };
    window.addEventListener('pointerdown', unlockAudio, { once: true });
    window.addEventListener('keydown', unlockAudio, { once: true });
    document.addEventListener('pointerover', playTicketHover);
    return () => {
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
      document.removeEventListener('pointerover', playTicketHover);
      tearing?.stop();
      audioContext?.close().catch(() => {});
    };
  }, []);
  useEffect(() => {
    const svgNamespace = 'http://www.w3.org/2000/svg';
    const addTicketHoverSvg = (button) => {
      if (button.matches('.brand, .menu-button, .film-watch-tabs button, .side-top > button, .side-links button:not(.side-ticket), .modal-close, .video-modal-close, .premiere-play, .slide-tabs button, .team-profile-next, .team-profile-back, .founder-premium-next, .about-studio-next')) return;
      button.classList.add('ticket-button');
      if (button.querySelector(':scope > .ticket-default-svg')) return;
      const createTicketSvg = (className, outlineStroke, dividerStroke, outlineData, dividerData) => {
        const svg = document.createElementNS(svgNamespace, 'svg');
        svg.classList.add(className);
        svg.setAttribute('fill', 'none');
        svg.setAttribute('viewBox', '0 0 142 44');
        svg.setAttribute('preserveAspectRatio', 'none');
        svg.setAttribute('width', '100%');
        svg.setAttribute('aria-hidden', 'true');
        const outline = document.createElementNS(svgNamespace, 'path');
        outline.setAttribute('stroke', outlineStroke);
        outline.setAttribute('d', 'M5 1h90c0 1 .6 3 3 3s3-2 3-3h36c0 3.2 2.667 4.144 4 4.216V39c-3.2 0-4 2.667-4 4h-35c0-1.333-.8-4-4-4s-4 2.667-4 4H5c0-3.6-2.667-4.167-4-4V5c3.2 0 4-2.667 4-4Z');
        outline.setAttribute(outlineData, '');
        const divider = document.createElementNS(svgNamespace, 'path');
        divider.setAttribute('stroke', dividerStroke);
        divider.setAttribute('d', 'M98 4.5v34');
        divider.setAttribute('stroke-dasharray', '4');
        divider.setAttribute(dividerData, '');
        svg.append(outline, divider);
        return svg;
      };
      const defaultSvg = createTicketSvg('ticket-default-svg', 'white', 'currentColor', 'data-explore', 'data-explore-line');
      button.append(defaultSvg);
    };
    const attachTicketSvgs = (root = document) => {
      if (root instanceof HTMLButtonElement) addTicketHoverSvg(root);
      root.querySelectorAll?.('button').forEach(addTicketHoverSvg);
    };
    attachTicketSvgs();
    const observer = new MutationObserver((records) => records.forEach((record) => record.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) attachTicketSvgs(node);
    })));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const syncPage = () => {
      setCurrentPath(window.location.pathname);
      setRouteVersion((value) => value + 1);
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('popstate', syncPage);
    return () => window.removeEventListener('popstate', syncPage);
  }, []);
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
  useEffect(() => {
    const frame = document.querySelector('.catalog-frame');
    if (!frame) return;
    let startX = 0;
    const onDown = (event) => { startX = event.clientX; };
    const onUp = (event) => {
      const delta = event.clientX - startX;
      if (Math.abs(delta) < 42) return;
      const next = Math.max(0, Math.min(films.length - 1, catalogFilm + (delta < 0 ? 1 : -1)));
      const section = catalogRef.current;
      if (section) window.scrollTo({ top: section.offsetTop + (section.offsetHeight - window.innerHeight) * (next / (films.length - 1)), behavior: 'smooth' });
    };
    frame.addEventListener('pointerdown', onDown);
    frame.addEventListener('pointerup', onUp);
    return () => { frame.removeEventListener('pointerdown', onDown); frame.removeEventListener('pointerup', onUp); };
  }, [catalogFilm]);
  useEffect(() => {
    const frame = document.querySelector('.catalog-frame');
    if (!frame) return;
    frame.classList.remove('is-changing');
    const animationFrame = requestAnimationFrame(() => frame.classList.add('is-changing'));
    return () => cancelAnimationFrame(animationFrame);
  }, [catalogFilm]);
  useEffect(() => {
    const frame = document.querySelector('.catalog-frame');
    if (!frame) return;
    let overlay = frame.querySelector('.catalog-siena-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'catalog-siena-overlay';
      ['copy', 'acclaim'].forEach((name) => {
        const element = document.createElement('div');
        element.className = 'siena-' + name;
        overlay.append(element);
      });
      frame.append(overlay);
    }
    const details = filmDetails[catalogFilm];
    const film = films[catalogFilm];

    const copy = overlay.querySelector('.siena-copy');
    const acclaim = overlay.querySelector('.siena-acclaim');

    copy.replaceChildren();
    [film.title.toUpperCase(), 'DIRECTOR                       ' + details.director].forEach((value, index) => {
      const element = document.createElement(index === 0 ? 'h2' : 'p');
      element.textContent = value;
      copy.append(element);
    });
    const explore = document.createElement('button');
    explore.type = 'button';
    explore.className = 'ticket-button';
    explore.textContent = 'EXPLORE  →';
    explore.onclick = () => film.title === 'Siya'
      ? scroll('#film-details')
      : setModal({ ...film, video: catalogVideos[catalogFilm] });
    explore.textContent = 'EXPLORE';
    const exploreArrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    exploreArrow.classList.add('arrow');
    exploreArrow.setAttribute('viewBox', '0 0 11 10');
    exploreArrow.setAttribute('aria-hidden', 'true');
    const exploreArrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    exploreArrowPath.setAttribute('fill', 'currentColor');
    exploreArrowPath.setAttribute('d', 'M4.481.005a6.65 6.65 0 0 1 6.46 4.659c.078.229.08.479-.003.706C10.302 7.105 8.318 10 4.48 10V8.39c.941.127 2.922-.257 4.442-2.603H0V4.208h8.938c-.756-1.229-2.216-2.78-4.457-2.78V.006Z');
    exploreArrow.append(exploreArrowPath);
    explore.append(exploreArrow);
    copy.append(explore);
    acclaim.replaceChildren();
    details.acclaim.forEach((quote) => {
      const item = document.createElement('div');
      const stars = document.createElement('span');

      const text = document.createElement('strong');
      stars.textContent = '★★★★★';

      text.textContent = quote;
      item.append(stars, text);
      acclaim.append(item);
    });
    overlay.classList.remove('is-visible');
    const animationFrame = requestAnimationFrame(() => overlay.classList.add('is-visible'));
    return () => cancelAnimationFrame(animationFrame);
  }, [catalogFilm]);
  const navigate = (target) => {
    const url = new URL(target, window.location.origin);
    window.history.pushState({}, '', url.pathname + url.search + url.hash);
    setCurrentPath(url.pathname);
    setRouteVersion((value) => value + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (url.hash) requestAnimationFrame(() => document.querySelector(url.hash)?.scrollIntoView({ behavior: 'smooth' }));
  };
  const scroll = (id) => {
    if (id === '#film-details') return navigate('/film-details');
    if (currentPath !== '/') return navigate('/' + id);
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const isFilmDetails = currentPath === '/film-details';
  const isStandaloneAbout = ['/about-drishyam', '/from-founder', '/meet-our-team', '/team-detail'].includes(currentPath);
  const hero = slides[active];
  const activeFilm = films[catalogFilm];
  const activeFilmDetails = filmDetails[catalogFilm];
  const jumpToFilm = (index) => {
    const target = catalogRef.current;
    if (!target) return;
    window.scrollTo({ top: target.offsetTop + (target.offsetHeight - window.innerHeight) * (index / (films.length - 1)), behavior: 'smooth' });
  };
  const handleContactSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const mobile = String(data.get('mobile') || '').replace(/\D/g, '');
    const attachment = data.get('attachment');
    const validDocument = attachment instanceof File && /\.(pdf|doc|docx)$/i.test(attachment.name) && attachment.size <= 5 * 1024 * 1024;
    if (!/^\d{10}$/.test(mobile)) {
      setContactStatus('Please enter an exact 10-digit mobile number.');
      return;
    }
    if (!validDocument) {
      setContactStatus('Attach a PDF, DOC, or DOCX file up to 5 MB.');
      return;
    }
    setContactStatus('Form validated successfully. Our team will review your enquiry.');
    form.reset();
  };
  return (
    <main className={isFilmDetails ? 'about-page' : isStandaloneAbout ? 'standalone-about-page' : ''}>
      <SiteHeader onNavigate={navigate} currentPath={currentPath} />
      {false && (
      <header className="site-header">
        <button className="brand" onClick={() => scroll("#top")} onMouseEnter={() => setLogoHovered(true)} onMouseLeave={() => setLogoHovered(false)} onFocus={() => setLogoHovered(true)} onBlur={() => setLogoHovered(false)}>
          <img src={logoHovered ? pinkLogo : whiteLogo} alt="Drishyam Films" />
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
              Our Films <b>01</b>
            </button>
            <button
              onClick={() => {
                scroll("#film-details");
                setMenu(false);
              }}
            >
              Drishyam Films International <b>02</b>
            </button>
            <button
              onClick={() => {
                scroll("#journal");
                setMenu(false);
              }}
            >
              Drishyam Play <b>03</b>
            </button>
            <button
              onClick={() => {
                scroll("#contact");
                setMenu(false);
              }}
            >
              Our Story <b>04</b>
            </button>

             <button className="ticket-button side-ticket"
              onClick={() => {
                scroll("#contact");
                setMenu(false);
              }}
            >
              Core Team <b>05</b>
            </button>

             <button className="ticket-button side-ticket"
              onClick={() => {
                scroll("#contact");
                setMenu(false);
              }}
            >
              Let’s connect <b>06</b>
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
      </header>)}
      <section id="top" className="hero">
        <video
          key={sliderVideos[active]}
          className={'hero-media'}
          src={sliderVideos[active]}
          autoPlay
          muted
          playsInline
          preload={'metadata'}
          aria-hidden={'true'}
          onEnded={() => setActive((value) => (value + 1) % slides.length)}
        />
        <div className="hero-wash" />
        <div className="hero-content">
          <p>{hero.kicker}</p>
          <h1>{hero.title}</h1>
          <span>{hero.date}</span>
          <div className="hero-actions">
            <button className="button light ticket-button" onClick={() => setModal(hero)}>
              WATCH TRAILER <Play />
            </button>
            <button className="button ghost ticket-button" onClick={() => scroll("#films")}>
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
        <div className="hero-credit">DRISHYAM FILMS</div>
      </section>
      <section className="premiere">
        <div className="premiere-copy">
          <p className="eyebrow"> OUR STORIES </p>
          <h2>
            Stories with
            <br />
            <em>Soul</em>
          </h2>
          <p>
            Founded in 2014 by Manish Mundra, Drishyam Films operates on a distinct promise: cinema with a soul. The studio champions independent Indian cinema, giving a global platform to fearless storytellers who capture honest, deeply human truths without compromise.
          </p>
          <p>
           The studio has built an international presence through landmark releases including Ankhon Dekhi, Masaan, Dhanak, Waiting, and Newton—which won two National Film Awards and represented India at the 90th Academy Awards.
Looking forward, Drishyam remains dedicated to discovering bold directorial voices, expanding into international co-productions, and shaping cinema that endures.
          </p>
          <button onClick={() => scroll("#films")} className="discover ticket-button">
            <span className="ticket-label">EXPLORE</span> <Arrow />
          </button>
        </div>
        <div className="premiere-art">
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1500&q=88"
            alt="Film projection"
          />
          <img className={'premiere-film-cover'} src={ourStoriesImage} alt={'Drishyam Films — Our Story'} />
          <button
            type='button'
            className='premiere-play'
            onClick={() => setPremiereOpen(true)}
            aria-label='Play Our Stories video'
          >
            <span aria-hidden='true'>&#9654;</span>
          
          </button>
          <div className="art-label">
            EST.
            <br />
            2014
            <br />
            <b>NEW DELHI</b>
          </div>
        </div>
      </section>
      <section id="films" className="catalog" ref={catalogRef}>
        <div className="catalog-stage"><div className="catalog-frame">
          {films.map((film, index) => <video key={film.title} className={`catalog-media ${index === catalogFilm ? "is-active" : ""}`} src={catalogVideos[index]} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />)}
          <div className="catalog-vignette" /><div className="catalog-grain" aria-hidden="true" />
          <div className="catalog-topline"><p>OUR FILMS</p><span>{String(catalogFilm + 1).padStart(2, "0")} / {String(films.length).padStart(2, "0")}</span></div>
          <div className="catalog-copy"><p className="catalog-genre">{films[catalogFilm].genre}</p><h2 key={films[catalogFilm].title}>{films[catalogFilm].title}</h2><p className="catalog-description">A Drishyam Films story, made to stay with you long after the screen fades to black.</p><button className="ticket-button" onClick={() => films[catalogFilm].title === 'Siya' ? scroll('#film-details') : setModal({ ...films[catalogFilm], video: catalogVideos[catalogFilm] })}>EXPLORE FILM <Arrow /></button></div>
          <div className="catalog-side-note">SCROLL TO DISCOVER</div>
          {/* <div className="catalog-progress" aria-hidden="true"><i style={{ transform: `scaleX(${Math.max(.06, catalogProgress)})` }} /></div> */}
          {/* <div className="catalog-dots">{films.map((film, index) => <button key={film.title} className={index === catalogFilm ? "is-active" : ""} aria-label={`View ${film.title}`} onClick={() => { const target = catalogRef.current; if (target) window.scrollTo({ top: target.offsetTop + (target.offsetHeight - window.innerHeight) * (index / films.length), behavior: "smooth" }); }}><span>0{index + 1}</span></button>)}</div> */}
        </div></div>
      </section>

      <FilmDetailsPage onPlay={() => setModal({ title: 'Siya', video: siyaCatalogVideo })} onExplore={() => scroll('#films')} />
      {currentPath === '/about-drishyam' && <AboutDrishyamPage key={routeVersion} onNavigate={navigate} />}
      {currentPath === '/from-founder' && <FromFounderPage key={routeVersion} onNavigate={navigate} />}
      {currentPath === '/meet-our-team' && <MeetOurTeamPage key={routeVersion} onNavigate={navigate} />}
      {currentPath === '/team-detail' && <TeamDetailPage key={routeVersion} onNavigate={navigate} />}

      <section
        id='contact'
        className='contact-section px-5 py-20 text-[#f8f5ef] sm:px-8 lg:px-14 lg:py-28'
        style={{ '--contact-bg': `url(${contactBackgroundImage})` }}
      >
        <div className='contact-content mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20'>
          <div className='flex flex-col justify-between border-t border-white/25 pt-6'>
            <div>
              <p className='font-mono text-[10px] font-bold tracking-[.18em] text-[#e97f6f]'>CONTACT US</p>
              <h2 className='mt-5 max-w-md text-5xl font-extrabold leading-[.9] tracking-[-.07em] sm:text-6xl'>Start a <em>conversation.</em></h2>
              <p className='mt-7 max-w-md text-sm leading-7 text-white/65 sm:text-base'>

              Have a story, partnership, collaboration, or project you'd like to share? We'd love to hear from you.
</p>
              <p className='mt-7 max-w-md text-sm leading-7 text-white/65 sm:text-base'>
Send us the essential details about your idea, proposal, or project, and the Drishyam Films team will carefully review your enquiry. If your vision aligns with our creative interests and upcoming opportunities, our team will get in touch with you.</p>
              <b className='mt-7 max-w-md text-sm leading-7 text-white/65 sm:text-base'>
Let's explore the possibility of creating something meaningful together.
              </b>
            </div>
            <p className='mt-12 font-mono text-[10px] tracking-[.14em] text-white/45'>ALL FIELDS ARE REQUIRED</p>
          </div>

          <form className='border-t border-white/25 pt-6' onSubmit={handleContactSubmit}>
            <div className='grid gap-5 sm:grid-cols-2'>
              <label className='block sm:col-span-2'>
                <span className='mb-2 block font-mono text-[10px] font-bold tracking-[.14em] text-white/65'>FULL NAME *</span>
                <input className='w-full border border-white/25 bg-transparent px-4 py-3.5 text-sm outline-none transition focus:border-[#e97f6f]' name='fullName' type='text' autoComplete='name' required />
              </label>
              <label className='block'>
                <span className='mb-2 block font-mono text-[10px] font-bold tracking-[.14em] text-white/65'>EMAIL *</span>
                <input className='w-full border border-white/25 bg-transparent px-4 py-3.5 text-sm outline-none transition focus:border-[#e97f6f]' name='email' type='email' autoComplete='email' required />
              </label>
              <label className='block'>
                <span className='mb-2 block font-mono text-[10px] font-bold tracking-[.14em] text-white/65'>MOBILE NUMBER *</span>
                <input className='w-full border border-white/25 bg-transparent px-4 py-3.5 text-sm outline-none transition focus:border-[#e97f6f]' name='mobile' type='tel' inputMode='numeric' pattern='[0-9]{10}' minLength={10} maxLength={10} autoComplete='tel' required />
              </label>
              <label className='block sm:col-span-2'>
                <span className='mb-2 block font-mono text-[10px] font-bold tracking-[.14em] text-white/65'>MESSAGE *</span>
                <textarea className='min-h-32 w-full resize-y border border-white/25 bg-transparent px-4 py-3.5 text-sm outline-none transition focus:border-[#e97f6f]' name='message' required />
              </label>
              <label className='block sm:col-span-2'>
                <span className='mb-2 block font-mono text-[10px] font-bold tracking-[.14em] text-white/65'>ATTACH DOCUMENT *</span>
                <input className='block w-full border border-dashed border-white/30 bg-transparent px-4 py-3 text-xs text-white/70 file:mr-4 file:border-0 file:bg-[#e97f6f] file:px-3 file:py-2 file:font-mono file:text-[10px] file:font-bold file:tracking-[.1em] file:text-[#171114]' name='attachment' type='file' accept='.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document' required />
                <span className='mt-2 block font-mono text-[9px] tracking-[.1em] text-white/40'>PDF, DOC OR DOCX · MAXIMUM 5 MB</span>
              </label>
            </div>
            {contactStatus && <p className='mt-5 font-mono text-[11px] tracking-[.05em] text-[#e97f6f]' role='status'>{contactStatus}</p>}
            <button className='contact-submit ticket-button mt-7' type='submit'>SEND ENQUIRY <Arrow /></button>
          </form>
        </div>
      </section>

      <section id="journal" className="journal">
        <div className="journal-heading">
          <p className="eyebrow">JOURNAL</p>
          <h2>
            The people
            <br />
           <em> behind the picture.</em>
          </h2>
          <button type="button" className="contact-submit ticket-button">
            ALL STORIES <Arrow />
          </button>
        </div>
        <div className="journal-grid">
          <article>
            <img
              src={blogImage1}
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
              src={blogImage2}
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
              src={blogImage3}
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
      <section id="newsletter" className="signup">
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
              <button type="submit" className="ticket-button signup-submit" aria-label="Subscribe">SUBSCRIBE <Arrow /></button>
            </div>
          </form>
          <small>
            By subscribing, you agree to receive occasional studio news.
          </small>
        </div>
      </section>
      {false && <footer className="cinema-footer">
        <div className="footer-top">
          <div className="footer-brand footer-logo" onMouseEnter={() => setFooterLogoHovered(true)} onMouseLeave={() => setFooterLogoHovered(false)}>
            <img src={footerLogoHovered ? pinkLogo : whiteLogo} alt="Drishyam Films" />
           
          </div>
          <p>
           
          </p>
          <a className="footer-mail" href="mailto:hello@drishyamfilms.com">
            hello@drishyamfilms.com <span>&#8599;</span>
          </a>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          DRISHYAM FILMS
        </div>
        <div className="footer-columns">
          <div>
            <p className="footer-label">EXPLORE</p>
            <a href="#films">Films &amp; Series</a>
            <a href="#film-details">Film Details</a>
            <a href="#journal">Journal</a>
          </div>
          <div>
            <p className="footer-label">CONNECT</p>
            <a className="footer-social-link" href="#contact"><SocialIcon platform="instagram" />Instagram</a>
            <a className="footer-social-link" href="#contact"><SocialIcon platform="linkedin" />LinkedIn</a>
            <a className="footer-social-link" href="#contact"><SocialIcon platform="youtube" />YouTube</a>
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
          <p></p>
          <p>SCROLL TO BEGIN &#8593;</p>
        </div>
      </footer>}
      <SiteFooter onNavigate={navigate} />
      {premiereOpen && (
        <div
          className={'video-modal'}
          role={'dialog'}
          aria-modal={'true'}
          aria-label={'Drishyam Films — Our Story video'}
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
            <video src={drishyamFilmsVideo} autoPlay controls playsInline />
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
