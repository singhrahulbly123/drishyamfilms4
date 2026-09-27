import { aboutLinks, archivePaths, contactEmail } from "../data/siteData";
import { useEffect, useState } from "react";
import whiteLogo from "../assets/logo/white-logo.svg";
import pinkLogo from "../assets/logo/pink.png";

export default function SiteHeader({ onNavigate, currentPath }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    const closeOnEscape = (event) =>
      event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const go = (target) => {
    onNavigate(target);
    setMenuOpen(false);
    setAboutOpen(false);
  };

  return (
    <header className="site-header">
      <button
        className="brand"
        onClick={() => go("/")}
        onMouseEnter={() => setLogoHovered(true)}
        onMouseLeave={() => setLogoHovered(false)}
        onBlur={() => setLogoHovered(false)}
      >
        <img src={logoHovered ? pinkLogo : whiteLogo} alt="Drishyam Films" />
      </button>
      <nav aria-label="Primary navigation" />
      <button
        onClick={() => setMenuOpen(true)}
        className="menu-button"
        aria-label="Open menu"
        aria-expanded={menuOpen}
      >
        <span className="hamburger" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>

      <button
        className={`menu-scrim ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
      />
      <aside
        className={`side-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="side-top">
          <span>DRISHYAM FILMS</span>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            &times;
          </button>
        </div>
        <div className="side-links">
          <button onClick={() => go("/#films")}>
            Our Films <b>01</b>
          </button>
          <button onClick={() => go("/film-details")}>
            Drishyam Films International <b>02</b>
          </button>
          <button onClick={() => go("/#journal")}>
            Drishyam Play <b>03</b>
          </button>

          <div
            className={`side-about ${aboutOpen ? "is-open" : ""}`}
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              className="side-about-trigger"
              onClick={() => setAboutOpen((value) => !value)}
              aria-expanded={aboutOpen}
            >
              About Us <span aria-hidden="true">{aboutOpen ? "−" : "+"}</span>
              <b>04</b>
            </button>
            <div className="side-about-submenu">
              {aboutLinks.map(({ label, path }, index) => (
                <button
                  className={currentPath === path ? "is-active" : ""}
                  onClick={() => go(path)}
                  key={path}
                >
                  <small>0{index + 1}</small>
                  <span>{label}</span>
                  <i aria-hidden="true">↗</i>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => go("/blog")}
            aria-current={currentPath.startsWith("/blog") ? "page" : undefined}
          >
            The Journal <b>05</b>
          </button>
          <button
            onClick={() => go("/awards-gallery")}
            aria-current={
              archivePaths.includes(currentPath.replace(/\/$/, ""))
                ? "page"
                : undefined
            }
          >
            Awards &amp; Gallery <b>06</b>
          </button>
          <button onClick={() => go("/contact-us")}>
            Let&apos;s connect <b>07</b>
          </button>
        </div>
        <div className="side-contact">
          <p>START A CONVERSATION</p>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <div>
            <a href="/#contact">INSTAGRAM</a>
            <a href="/#contact">LINKEDIN</a>
            <a href="/#contact">YOUTUBE</a>
          </div>
        </div>
      </aside>
    </header>
  );
}
