import TicketButton from "../components/TicketButton";

import Arrow from "../components/Arrow";

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="signup">
      <div className="signup-glow" />
      <div className="signup-copy">
        <p className="eyebrow">STAY IN THE FRAME</p>
        <h2>
          Stories worth
          <br />
          <em>waiting for.</em>
        </h2>
        <p>
          News, releases and a look behind the scenes. Delivered occasionally,
          never on autoplay.
        </p>
      </div>
      <div className="signup-card">
        <span className="card-index">01 / DRISHYAM LETTERS</span>
        <h3>
          Get the next story
          <br />
          before the credits roll.
        </h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email">EMAIL ADDRESS</label>
          <div>
            <input id="email" type="email" placeholder="you@example.com" />
            <TicketButton
              type="submit"
              className="ticket-button signup-submit"
              aria-label="Subscribe"
            >
              SUBSCRIBE <Arrow />
            </TicketButton>
          </div>
        </form>
        <small>
          By subscribing, you agree to receive occasional studio news.
        </small>
      </div>
    </section>
  );
}
