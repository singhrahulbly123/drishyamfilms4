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
        <div className="about-hero-copy">
          <p>Drishyam Films</p>
          <h1>
            The <em>Journal.</em>
          </h1>
          <span>
            Notes on writing, filming, sound and the work behind our films.
          </span>
        </div>
      </section>
      <section className="j-stories j-wrap" aria-labelledby="stories-title">
        <div className="j-section-heading">
          <div>
            <h2 id="stories-title">
              Recent <em>articles.</em>
            </h2>
          </div>
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
          {visible.length} STORIES{" "}
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
            <h3>No articles found.</h3>
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
      </section>
      <JournalClosing onNavigate={onNavigate} />
    </div>
  );
}
