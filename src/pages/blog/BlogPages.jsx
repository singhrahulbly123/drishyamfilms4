import useDocumentTitle from "../../hooks/useDocumentTitle";
import InternalLink from "../../components/InternalLink";
import { JournalArrow as Arrow } from "../../components/JournalContent";
import { posts } from "../../data/blogData";
import ArticlePage from "./ArticlePage";
import JournalPage from "./JournalPage";
import "../../styles/blog.css";

export default function BlogPages({ currentPath, onNavigate }) {
  const slug = currentPath.startsWith("/blog/")
    ? currentPath.split("/")[2]
    : currentPath === "/blog-details"
      ? new URLSearchParams(window.location.search).get("story") ||
        posts[0].slug
      : null;
  const post = posts.find((item) => item.slug === slug);
  useDocumentTitle(
    `${slug ? post?.title || "Story not found" : "The Journal"} | Drishyam Films`,
  );
  if (slug && !post)
    return (
      <div className="journal-page j-not-found">
        <p className="j-eyebrow">THE JOURNAL / 404</p>
        <h1>
          This story is
          <br />
          <em>still unwritten.</em>
        </h1>
        <InternalLink
          className="j-text-link"
          to="/blog"
          onNavigate={onNavigate}
        >
          Explore all stories <Arrow />
        </InternalLink>
      </div>
    );
  return post ? (
    <ArticlePage key={post.slug} post={post} onNavigate={onNavigate} />
  ) : (
    <JournalPage onNavigate={onNavigate} />
  );
}
