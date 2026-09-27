import { useState } from "react";
import { enquiryTopics } from "../data/contactData";
import { contactEmail } from "../data/siteData";

export default function ContactEnquiryForm({ topic, setTopic }) {
  const [status, setStatus] = useState("");
  const [draft, setDraft] = useState("");
  const prepareEmail = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name")).trim();
    const message = String(data.get("message")).trim();
    if (!name || !message) {
      setStatus("Please enter your name and a message.");
      return;
    }
    const body = `Hello Drishyam Films,\n\n${message}\n\nName: ${name}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "Not provided"}\nOrganisation: ${data.get("organisation") || "Not provided"}\nEnquiry: ${topic}`;
    setDraft(body);
    setStatus(
      "Your email draft is ready. Review and send it from your email app. You can also copy the message below.",
    );
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(`${topic} — ${name}`)}&body=${encodeURIComponent(body)}`;
  };
  const copyDraft = async () => {
    try {
      await navigator.clipboard.writeText(draft);
      setStatus(`Message copied. Paste it into an email to ${contactEmail}.`);
    } catch {
      setStatus(
        `Select and copy the message below, then email it to ${contactEmail}.`,
      );
    }
  };
  return (
    <form className="cu-form" onSubmit={prepareEmail}>
      <div className="cu-form-heading">
        <h3>Your enquiry</h3>
      </div>
      <fieldset>
        <legend className="cu-label">ENQUIRY TYPE</legend>
        <div className="cu-topics">
          {enquiryTopics.map((item) => (
            <label key={item} className={topic === item ? "is-selected" : ""}>
              <input
                type="radio"
                name="topic"
                value={item}
                checked={topic === item}
                onChange={() => setTopic(item)}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="cu-fields">
        <label>
          <span>FULL NAME *</span>
          <input
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            maxLength={100}
            required
          />
        </label>
        <label>
          <span>EMAIL ADDRESS *</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            maxLength={150}
            required
          />
        </label>
        <label>
          <span>PHONE NUMBER</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Your contact number"
            maxLength={30}
          />
        </label>
        <label>
          <span>ORGANISATION</span>
          <input
            name="organisation"
            autoComplete="organization"
            placeholder="Studio, company or independent"
            maxLength={120}
          />
        </label>
        <label className="cu-message">
          <span>YOUR MESSAGE *</span>
          <textarea
            name="message"
            placeholder="A little about your idea, project or enquiry…"
            rows={5}
            maxLength={3000}
            required
          />
        </label>
      </div>
      <p className="cu-form-help">
        This opens a draft in your email app. You can review your message and
        add any documents before sending.
      </p>
      <button className="cu-submit" type="submit">
        PREPARE ENQUIRY <span aria-hidden="true">↗</span>
      </button>
      <p className="cu-status" role="status">
        {status}
      </p>
      {draft && (
        <div className="cu-draft">
          <label htmlFor="enquiry-draft" className="cu-label">
            YOUR EMAIL DRAFT
          </label>
          <textarea id="enquiry-draft" value={draft} readOnly rows={8} />
          <button type="button" onClick={copyDraft}>
            Copy message <span aria-hidden="true">↗</span>
          </button>
        </div>
      )}
    </form>
  );
}
