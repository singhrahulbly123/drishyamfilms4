import TicketButton from "../components/TicketButton";
import Arrow from "../components/Arrow";
import { posts, postUrl } from "../data/blogData";

export default function JournalSection({ navigate }) {
  return (
    <section id="journal" className="journal">
      <div className="journal-heading">
        <p className="eyebrow">JOURNAL</p>
        <h2>
          The people
          <br />
          <em> behind the picture.</em>
        </h2>
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
            <img src={post.image} alt="" />
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
