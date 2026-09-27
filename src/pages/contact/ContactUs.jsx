import ContactEnquiryForm from "../../components/ContactEnquiryForm";
import {
  enquiryTopics,
  contactPathways,
  contactFaqs,
} from "../../data/contactData";
import { contactEmail } from "../../data/siteData";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { useState } from "react";
import contactBanner from "../../assets/images/contact-banner.png";
import "../../styles/contact.css";

export default function ContactUs({ onNavigate }) {
  const [topic, setTopic] = useState(enquiryTopics[0]);
  useDocumentTitle("Contact Us | Drishyam Films");
  return (
    <div className="contact-page">
      <section className="about-hero cu-hero">
        <img
          className="about-hero-media"
          src={contactBanner}
          alt="A warmly lit film studio meeting space with screenplay pages, coffee and an open notebook"
          fetchPriority="high"
        />
        <div className="about-hero-shade" />
        <div className="about-hero-copy">
          <p>CONTACT US</p>
          <h1>
            Get in <em>touch.</em>
          </h1>
          <span>
            For film enquiries, partnerships and press, contact our team below.
          </span>
        </div>
      </section>
      <section
        className="cu-connect cu-wrap"
        id="enquiry"
        aria-labelledby="enquiry-title"
      >
        <div className="cu-intro">
          <h2 id="enquiry-title">
            How can <em>we help?</em>
          </h2>
          <p>
            Have a film to talk about, a creative collaboration in mind or a
            question for our team? We’d love to hear from you.
          </p>
          <div className="cu-direct">
            <p className="cu-label">WRITE TO US</p>
            <a href={`mailto:${contactEmail}`}>
              {contactEmail}
              <span aria-hidden="true">↗</span>
            </a>
            <p>
              For film enquiries, partnerships, press and everything in between.
            </p>
          </div>
        </div>
        <ContactEnquiryForm topic={topic} setTopic={setTopic} />
      </section>
      <section className="cu-pathways cu-wrap" aria-labelledby="pathways-title">
        <div className="cu-section-heading">
          <h2 id="pathways-title">
            Choose your <em>enquiry.</em>
          </h2>
        </div>
        <div className="cu-pathway-grid">
          {contactPathways.map(
            ({ number, title, description, topic: selectedTopic }) => (
              <a
                key={number}
                href="#enquiry"
                onClick={() => setTopic(selectedTopic)}
              >
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="cu-pathway-link">
                  Enquire <b aria-hidden="true">↗</b>
                </span>
              </a>
            ),
          )}
        </div>
      </section>
      <section className="cu-faq cu-wrap">
        <div>
          <h2>
            Before <em>you write.</em>
          </h2>
        </div>
        <div>
          {contactFaqs.map(({ question, answer }) => (
            <details key={question}>
              <summary>
                {question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="cu-closing">
        <h2>
          Browse <em>our films.</em>
        </h2>
        <a
          href="/#films"
          onClick={(event) => {
            if (
              event.metaKey ||
              event.ctrlKey ||
              event.shiftKey ||
              event.altKey
            )
              return;
            event.preventDefault();
            onNavigate("/#films");
          }}
        >
          EXPLORE OUR FILMS <span aria-hidden="true">↗</span>
        </a>
      </section>
    </div>
  );
}
