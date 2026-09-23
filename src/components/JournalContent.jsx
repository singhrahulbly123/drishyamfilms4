import InternalLink from "./InternalLink";
import { postUrl } from "../data/blogData";

export const JournalArrow = () => <span aria-hidden="true">↗</span>;
export const readingTime = (post) =>
  `${Math.max(2, Math.ceil(post.sections.flat().join(" ").split(/\s+/).length / 200))} MIN READ`;
export function StoryCard({ post, onNavigate, index }) {
  return (
    <article className="j-card">
      <InternalLink
        to={postUrl(post)}
        onNavigate={onNavigate}
        className="j-card-link"
      >
        <div className="j-card-image">
          <img src={post.image} alt={post.alt} loading="lazy" />
          <span className="j-card-arrow">
            <JournalArrow />
          </span>
        </div>
        <div className="j-meta">
          <span>{post.category}</span>
          <span>{readingTime(post)}</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.intro}</p>
        <div className="j-card-bottom">
          <span>
            READ STORY <JournalArrow />
          </span>
          <small>{String(index + 1).padStart(2, "0")}</small>
        </div>
      </InternalLink>
    </article>
  );
}

export function JournalClosing({ onNavigate }) {
  return (
    <section className="j-closing">
      <p className="j-eyebrow">FROM THE PAGE TO THE SCREEN</p>
      <h2>
        Some stories are read.
        <br />
        <em>Others are felt.</em>
      </h2>
      <InternalLink
        to="/#films"
        onNavigate={onNavigate}
        className="j-text-link"
      >
        EXPLORE OUR FILMS <JournalArrow />
      </InternalLink>
      <span className="j-closing-mark" aria-hidden="true">
        DF
      </span>
    </section>
  );
}
