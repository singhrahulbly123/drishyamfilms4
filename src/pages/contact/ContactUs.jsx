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
        <div className="about-hero-number">CONTACT / DRISHYAM FILMS</div>
        <div className="about-hero-copy">
          <p>CONTACT US</p>
          <h1>
            Say hello.
            <br />
            <em>Start something.</em>
          </h1>
          <span>
            Every collaboration begins with a conversation. Tell us what you
            have in mind.
          </span>
        </div>
        <div className="about-scroll-cue">
          <i /> SCROLL TO CONNECT
        </div>
      </section>
      <section
        className="cu-connect cu-wrap"
        id="enquiry"
        aria-labelledby="enquiry-title"
      >
        <div className="cu-intro">
          <p className="cu-label">01 / LET’S CONNECT</p>
          <h2 id="enquiry-title">
            A thought. An idea.
            <br />
            <em>A possibility.</em>
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
          <div className="cu-note">
            <span aria-hidden="true">✳</span>
            <p>
              Meaningful cinema starts with people coming together. This could
              be the first frame.
            </p>
          </div>
        </div>
        <ContactEnquiryForm topic={topic} setTopic={setTopic} />
      </section>
      <section className="cu-pathways cu-wrap" aria-labelledby="pathways-title">
        <div className="cu-section-heading">
          <p className="cu-label">02 / THE RIGHT CONVERSATION</p>
          <h2 id="pathways-title">
            Many ways to <em>connect.</em>
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
                <span className="cu-label">{number} /</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="cu-pathway-link">
                  LET’S TALK <b aria-hidden="true">↗</b>
                </span>
              </a>
            ),
          )}
        </div>
      </section>
      <section className="cu-faq cu-wrap">
        <div>
          <p className="cu-label">03 / BEFORE YOU WRITE</p>
          <h2>
            A little <em>clarity.</em>
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
        <p className="cu-label">WHILE YOU’RE HERE</p>
        <h2>
          Get to know
          <br />
          <em>the stories we tell.</em>
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
