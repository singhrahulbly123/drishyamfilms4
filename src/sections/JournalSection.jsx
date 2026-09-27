import TicketButton from "../components/TicketButton";
import Arrow from "../components/Arrow";
import { posts, postUrl } from "../data/blogData";

export default function JournalSection({ navigate }) {
  return (
    <section id="journal" className="journal" aria-labelledby="journal-section-title">
      <div className="journal-heading">
        <h2 id="journal-section-title">Journal / Blog</h2>
        <TicketButton
          type="button"
          className="contact-submit ticket-button"
          onClick={() => navigate("/blog")}
        >
          ALL STORIES <Arrow />
        </TicketButton>
      </div>
      <div className="journal-grid">
        {posts.slice(0, 3).map((post) => (
          <article key={post.slug}>
            <div className="journal-poster">
              <img src={post.image} alt={post.alt} />
            </div>
            <span>{post.category.toUpperCase()} / 2026</span>
            <h3>{post.title}</h3>
            <a
              href={postUrl(post)}
              onClick={(event) => {
                event.preventDefault();
                navigate(postUrl(post));
              }}
            >
              READ MORE <Arrow />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
