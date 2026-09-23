import { archivePaths, aboutPaths } from "./data/siteData";
import useNavigation from "./hooks/useNavigation";
import useFilmCatalog from "./hooks/useFilmCatalog";
import FilmCatalog from "./sections/FilmCatalog";
import JournalSection from "./sections/JournalSection";
import useTicketSound from "./hooks/useTicketSound";
import VideoDialogs from "./components/VideoDialogs";
import HeroSection from "./sections/HeroSection";
import ContactSection from "./sections/ContactSection";
import NewsletterSection from "./sections/NewsletterSection";
import OurStoriesSection from "./sections/OurStoriesSection";
import { useEffect, useState } from "react";

import FilmDetailsPage from "./pages/film-details/FilmDetails";
import AboutDrishyamPage from "./pages/about-drishyam/AboutDrishyam";
import MeetOurTeamPage from "./pages/meet-our-team/MeetOurTeam";
import TeamDetailPage from "./pages/team-detail/TeamDetail";
import FromFounderPage from "./pages/from-founder/FromFounder";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import BlogPages from "./pages/blog/BlogPages";
import ContactUs from "./pages/contact/ContactUs";
import ArchivePages from "./pages/archive/ArchivePages";

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [modal, setModal] = useState(null);
  const [premiereOpen, setPremiereOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState("");
  const { currentPath, routeVersion, navigate, scroll } = useNavigation();
  const { catalogRef, activeFilmIndex } = useFilmCatalog();
  useEffect(() => {
    document.documentElement.dataset.theme = "dark";
  }, []);
  useTicketSound();
  const archivePath = currentPath.replace(/\/$/, "");
  const isArchive = archivePaths.includes(archivePath);
  const isContact = ["/contact", "/contact-us"].includes(
    currentPath.replace(/\/$/, ""),
  );
  const isBlog =
    currentPath === "/blog" ||
    currentPath === "/blog-details" ||
    currentPath.startsWith("/blog/");
  const isFilmDetails = currentPath === "/film-details";
  const isStandaloneAbout = aboutPaths.includes(currentPath);
  return (
    <main
      className={
        isFilmDetails
          ? "about-page"
          : isStandaloneAbout
            ? "standalone-about-page"
            : currentPath === "/"
              ? "home-page"
              : ""
      }
    >
      <svg
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
        style={{ position: "absolute", pointerEvents: "none" }}
      >
        <defs>
          <linearGradient
            id="brand-ticket-gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#f68e76" />
            <stop offset="100%" stopColor="#9b657c" />
          </linearGradient>
        </defs>
      </svg>
      <SiteHeader onNavigate={navigate} currentPath={currentPath} />
      {isArchive ? (
        <ArchivePages onNavigate={navigate} />
      ) : isContact ? (
        <ContactUs key={routeVersion} onNavigate={navigate} />
      ) : isBlog ? (
        <BlogPages
          key={routeVersion}
          currentPath={currentPath}
          onNavigate={navigate}
        />
      ) : (
        <>
          <HeroSection
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
            setModal={setModal}
            scroll={scroll}
          />
          <OurStoriesSection
            scroll={scroll}
            setPremiereOpen={setPremiereOpen}
          />
          <FilmCatalog
            catalogRef={catalogRef}
            activeFilmIndex={activeFilmIndex}
            currentPath={currentPath}
            scroll={scroll}
            setModal={setModal}
          />

          <FilmDetailsPage />
          {currentPath === "/about-drishyam" && (
            <AboutDrishyamPage key={routeVersion} onNavigate={navigate} />
          )}
          {currentPath === "/from-founder" && (
            <FromFounderPage key={routeVersion} onNavigate={navigate} />
          )}
          {currentPath === "/meet-our-team" && (
            <MeetOurTeamPage key={routeVersion} onNavigate={navigate} />
          )}
          {currentPath === "/team-detail" && (
            <TeamDetailPage key={routeVersion} onNavigate={navigate} />
          )}

          <ContactSection
            contactStatus={contactStatus}
            setContactStatus={setContactStatus}
          />
          <JournalSection navigate={navigate} />
          <NewsletterSection />
        </>
      )}
      <SiteFooter onNavigate={navigate} />
      <VideoDialogs
        premiereOpen={premiereOpen}
        setPremiereOpen={setPremiereOpen}
        modal={modal}
        setModal={setModal}
      />
    </main>
  );
}
