import NewsletterSection from "../sections/NewsletterSection";
import { contactEmail } from "../data/siteData";
import TicketButton from "./TicketButton";
import { useState } from "react";
import whiteLogo from "../assets/logo/white-logo.svg";
import pinkLogo from "../assets/logo/pink.png";

const SocialIcon = ({ platform }) =>
  platform === "instagram" ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle className="social-icon-dot" cx="17.5" cy="6.5" r="1" />
    </svg>
  ) : platform === "linkedin" ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7M8 7v.01M12 17v-7m0 3a3 3 0 0 1 6 0v4" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="4" />
      <path className="social-icon-play" d="m10 9 5 3-5 3Z" />
    </svg>
  );

export default function SiteFooter({ onNavigate, showNewsletter }) {
  const [hovered, setHovered] = useState(false);
  const link = (event, target) => {
    event.preventDefault();
    onNavigate(target);
  };
  return (
    <footer className="cinema-footer compact-footer">
      <div className="footer-layout">
      <div className="footer-top">
        <div
          className="footer-brand footer-logo"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img src={hovered ? pinkLogo : whiteLogo} alt="Drishyam Films" />
        </div>
        <a className="footer-mail" href={`mailto:${contactEmail}`}>
          {contactEmail} <span>↗</span>
        </a>
      </div>
      <div className="footer-columns">
        <div>
          <p className="footer-label">EXPLORE</p>
          <a href="/#films" onClick={(e) => link(e, "/#films")}>
            Films &amp; Series
          </a>
          <a href="/about-drishyam" onClick={(e) => link(e, "/about-drishyam")}>
            About Drishyam
          </a>
          <a href="/meet-our-team" onClick={(e) => link(e, "/meet-our-team")}>
            Our Team
          </a>
          <a href="/blog" onClick={(e) => link(e, "/blog")}>
            The Journal
          </a>
          <a href="/awards-gallery" onClick={(e) => link(e, "/awards-gallery")}>
            Awards &amp; Gallery
          </a>
          <a href="/contact-us" onClick={(e) => link(e, "/contact-us")}>
            Contact Us
          </a>
        </div>
        <div>
          <p className="footer-label">CONNECT</p>
          <a className="footer-social-link" href="/#contact">
            <SocialIcon platform="instagram" />
            Instagram
          </a>
          <a className="footer-social-link" href="/#contact">
            <SocialIcon platform="linkedin" />
            LinkedIn
          </a>
          <a className="footer-social-link" href="/#contact">
            <SocialIcon platform="youtube" />
            YouTube
          </a>
        </div>
        {showNewsletter && <NewsletterSection />}
      </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 DRISHYAM FILMS. ALL RIGHTS RESERVED.</p>
        <TicketButton
          type="button"
          className="footer-scroll-ticket"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span>SCROLL TO BEGIN</span>
          <i aria-hidden="true">&uarr;</i>
        </TicketButton>
      </div>
    </footer>
  );
}
