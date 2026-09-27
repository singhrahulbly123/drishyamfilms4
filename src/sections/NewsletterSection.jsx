
export default function NewsletterSection() {
  return (
    <form id="newsletter" className="footer-subscription" aria-label="Newsletter subscription"
      onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="newsletter-email">Email address</label>
      <div className="footer-subscription-fields">
        <input id="newsletter-email" name="email" type="email" autoComplete="email"
          placeholder="you@example.com" required />
        <button type="submit" className="footer-signup-button">
          SIGN UP
        </button>
      </div>
    </form>
  );
}
