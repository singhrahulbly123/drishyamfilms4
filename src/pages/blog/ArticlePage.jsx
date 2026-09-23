import { useEffect, useRef, useState } from "react";
import { posts } from "../../data/blogData";
import InternalLink from "../../components/InternalLink";
import {
  JournalArrow as Arrow,
  readingTime,
  StoryCard,
  JournalClosing,
} from "../../components/JournalContent";

export default function ArticlePage({ post, onNavigate }) {
  const [shareStatus, setShareStatus] = useState("");
  const [progress, setProgress] = useState(0);
  const articleRef = useRef(null);
  useEffect(() => {
    const update = () => {
      const article = articleRef.current;
      if (!article) return;
      const box = article.getBoundingClientRect();
      setProgress(
        Math.min(
          100,
          Math.max(0, ((window.innerHeight - box.top) / box.height) * 100),
        ),
      );
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareStatus("Story link copied.");
    } catch {
      setShareStatus(
        "Copy the page address from your browser to share this story.",
      );
    }
  };
  return (
    <div className="journal-page j-detail">
      <div
        className="j-reading-progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
      <header className="j-article-header j-wrap">
        <InternalLink to="/blog" onNavigate={onNavigate} className="j-back">
          ← BACK TO THE JOURNAL
        </InternalLink>
        <p className="j-eyebrow">
          {post.category} <span> / </span> {readingTime(post)}
        </p>
        <h1>
          {post.title}
          <em>.</em>
        </h1>
        <p className="j-standfirst">{post.intro}</p>
        <div className="j-byline">
          <span className="j-author-mark">DF</span>
          <div>
            <strong>The Drishyam Journal</strong>
            <span>Reflections on cinema &amp; the creative process</span>
          </div>
          <span className="j-edition">A CLOSER LOOK / VOL. 01</span>
        </div>
      </header>
      <figure className="j-article-figure j-wrap">
        <img src={post.image} alt={post.alt} fetchPriority="high" />
        <figcaption>
          <span>THE DRISHYAM JOURNAL</span>
          <span>{post.category} / A different way of seeing</span>
        </figcaption>
      </figure>
      <div className="j-article-layout j-wrap">
        <aside className="j-contents">
          <p className="j-eyebrow">IN THIS STORY</p>
          <nav aria-label="Article contents">
            {post.sections.map(([title], index) => (
              <a key={title} href={`#chapter-${index + 1}`}>
                <span>0{index + 1}</span>
                {title}
              </a>
            ))}
          </nav>
          <div className="j-share">
            <p className="j-eyebrow">PASS THE STORY ON</p>
            <button type="button" onClick={copyLink}>
              Copy story link <Arrow />
            </button>
            <a
              href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(window.location.href)}`}
            >
              Share by email <Arrow />
            </a>
            <p role="status">{shareStatus}</p>
          </div>
        </aside>
        <article
          ref={articleRef}
          id="journal-article"
          className="j-article-body"
        >
          {post.sections.map(([title, ...paragraphs], index) => (
            <section id={`chapter-${index + 1}`} key={title}>
              <p className="j-chapter">0{index + 1} /</p>
              <h2>{title}</h2>
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {index === 1 && (
                <blockquote>
                  <span aria-hidden="true">“</span>
                  {post.quote}
                  <cite>A NOTE ON THE CRAFT</cite>
                </blockquote>
              )}
            </section>
          ))}
          <div className="j-article-end">
            <span aria-hidden="true">✳</span>
            <p>END OF STORY. START OF A CONVERSATION.</p>
          </div>
          <div className="j-author-box">
            <span className="j-author-mark">DF</span>
            <div>
              <p className="j-eyebrow">THE DRISHYAM JOURNAL</p>
              <p>
                A space for the ideas, people and craft behind meaningful
                cinema.
              </p>
              <InternalLink to="/blog" onNavigate={onNavigate}>
                More from the journal <Arrow />
              </InternalLink>
            </div>
          </div>
        </article>
      </div>
      <section className="j-related j-wrap">
        <div className="j-section-heading">
          <div>
            <p className="j-eyebrow">KEEP EXPLORING</p>
            <h2>
              Another <em>perspective.</em>
            </h2>
          </div>
          <InternalLink
            className="j-text-link"
            to="/blog"
            onNavigate={onNavigate}
          >
            ALL STORIES <Arrow />
          </InternalLink>
        </div>
        <div className="j-grid">
          {posts
            .filter((item) => item.slug !== post.slug)
            .slice(0, 3)
            .map((item, index) => (
              <StoryCard
                key={item.slug}
                post={item}
                onNavigate={onNavigate}
                index={index}
              />
            ))}
        </div>
      </section>
      <JournalClosing onNavigate={onNavigate} />
    </div>
  );
}
