import { useState } from "react";
import journalBanner from "../../assets/blog/journal-banner.png";
import { posts } from "../../data/blogData";
import { StoryCard, JournalClosing } from "../../components/JournalContent";

export default function JournalPage({ onNavigate }) {
  const [category, setCategory] = useState("All Stories");
  const [query, setQuery] = useState("");
  const categories = [
    "All Stories",
    ...new Set(posts.map((post) => post.category)),
  ];
  const visible = posts.filter(
    (post) =>
      (category === "All Stories" || post.category === category) &&
      `${post.title} ${post.intro} ${post.category}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <div className="journal-page">
      <section className="about-hero meet-team-hero j-listing-hero">
        <img
          className="about-hero-media"
          src={journalBanner}
          alt="Film journals, screenplay notes and film reels on a warmly lit editorial desk"
          fetchPriority="high"
        />
        <div className="about-hero-shade" />
        <div className="about-hero-number">BLOG / FILM &amp; CULTURE</div>
        <div className="about-hero-copy">
          <p>THE DRISHYAM BLOG</p>
          <h1>
            Film stories.
            <br />
            <em>Fresh perspectives.</em>
          </h1>
          <span>
            Explore articles on filmmaking, behind-the-scenes stories, festival
            journeys and conversations from the world of cinema.
          </span>
        </div>
        <div className="about-scroll-cue">
          <i /> SCROLL TO DISCOVER
        </div>
      </section>
      <section className="j-stories j-wrap" aria-labelledby="stories-title">
        <div className="j-section-heading">
          <div>
            <p className="j-eyebrow">NOTES FROM OUR WORLD</p>
            <h2 id="stories-title">
              The latest <em>stories.</em>
            </h2>
          </div>
          <span className="j-edition">CINEMA. CULTURE. CONVERSATION.</span>
        </div>
        <div className="j-toolbar">
          <div className="j-filters" aria-label="Filter stories">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <label className="j-search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10" cy="10" r="6" />
              <path d="m15 15 5 5" />
            </svg>
            <input
              type="search"
              aria-label="Search stories"
              placeholder="Find a story"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>
        <p className="j-results" aria-live="polite">
          {String(visible.length).padStart(2, "0")} STORIES{" "}
          {category !== "All Stories" && ` / ${category.toUpperCase()}`}
        </p>
        <div className="j-grid">
          {visible.map((post, index) => (
            <StoryCard
              key={post.slug}
              post={post}
              index={index}
              onNavigate={onNavigate}
            />
          ))}
        </div>
        {!visible.length && (
          <div className="j-empty">
            <h3>No stories in this frame.</h3>
            <p>Try another search or explore all categories.</p>
            <button
              onClick={() => {
                setQuery("");
                setCategory("All Stories");
              }}
            >
              Reset filters ↗
            </button>
          </div>
        )}
        <div className="j-endnote">
          <span />
          YOU’RE ALL CAUGHT UP
          <span />
        </div>
      </section>
      <JournalClosing onNavigate={onNavigate} />
    </div>
  );
}
