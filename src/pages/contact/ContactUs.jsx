import { useEffect, useState } from 'react';
import contactBanner from '../../asstes/images/contact-banner.png';
import './contact.css';

const email = 'hello@drishyamfilms.com';
const topics = ['General enquiry', 'Film & creative collaboration', 'Partnerships & distribution', 'Press & media'];

export default function ContactUs({ onNavigate }) {
  const [topic, setTopic] = useState(topics[0]);
  const [status, setStatus] = useState('');
  const [draft, setDraft] = useState('');
  useEffect(() => {
    const previous = document.title;
    document.title = 'Contact Us | Drishyam Films';
    return () => { document.title = previous; };
  }, []);
  const prepareEmail = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name')).trim();
    const message = String(data.get('message')).trim();
    if (!name || !message) { setStatus('Please enter your name and a message.'); return; }
    const body = `Hello Drishyam Films,\n\n${message}\n\nName: ${name}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone') || 'Not provided'}\nOrganisation: ${data.get('organisation') || 'Not provided'}\nEnquiry: ${topic}`;
    setDraft(body);
    setStatus('Your email draft is ready. Review and send it from your email app. You can also copy the message below.');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`${topic} — ${name}`)}&body=${encodeURIComponent(body)}`;
  };
  const copyDraft = async () => {
    try { await navigator.clipboard.writeText(draft); setStatus('Message copied. Paste it into an email to hello@drishyamfilms.com.'); }
    catch { setStatus('Select and copy the message below, then email it to hello@drishyamfilms.com.'); }
  };
  return <div className="contact-page">
    <section className="about-hero cu-hero">
      <img className="about-hero-media" src={contactBanner} alt="A warmly lit film studio meeting space with screenplay pages, coffee and an open notebook" fetchPriority="high" />
      <div className="about-hero-shade" /><div className="about-hero-number">CONTACT / DRISHYAM FILMS</div>
      <div className="about-hero-copy"><p>CONTACT US</p><h1>Say hello.<br /><em>Start something.</em></h1><span>Every collaboration begins with a conversation. Tell us what you have in mind.</span></div>
      <div className="about-scroll-cue"><i /> SCROLL TO CONNECT</div>
    </section>
    <section className="cu-connect cu-wrap" id="enquiry" aria-labelledby="enquiry-title">
      <div className="cu-intro"><p className="cu-label">01 / LET’S CONNECT</p><h2 id="enquiry-title">A thought. An idea.<br /><em>A possibility.</em></h2><p>Have a film to talk about, a creative collaboration in mind or a question for our team? We’d love to hear from you.</p>
        <div className="cu-direct"><p className="cu-label">WRITE TO US</p><a href={`mailto:${email}`}>{email}<span aria-hidden="true">↗</span></a><p>For film enquiries, partnerships, press and everything in between.</p></div>
        <div className="cu-note"><span aria-hidden="true">✳</span><p>Meaningful cinema starts with people coming together. This could be the first frame.</p></div>
      </div>
      <form className="cu-form" onSubmit={prepareEmail}>
        <div className="cu-form-heading"><h3>Tell us your story</h3><span className="cu-label">* REQUIRED</span></div>
        <fieldset><legend className="cu-label">WHAT BRINGS YOU HERE?</legend><div className="cu-topics">{topics.map((item) => <label key={item} className={topic === item ? 'is-selected' : ''}><input type="radio" name="topic" value={item} checked={topic === item} onChange={() => setTopic(item)} /><span>{item}</span></label>)}</div></fieldset>
        <div className="cu-fields">
          <label><span>FULL NAME *</span><input name="name" autoComplete="name" placeholder="Your full name" maxLength={100} required /></label>
          <label><span>EMAIL ADDRESS *</span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={150} required /></label>
          <label><span>PHONE NUMBER</span><input name="phone" type="tel" autoComplete="tel" placeholder="Your contact number" maxLength={30} /></label>
          <label><span>ORGANISATION</span><input name="organisation" autoComplete="organization" placeholder="Studio, company or independent" maxLength={120} /></label>
          <label className="cu-message"><span>YOUR MESSAGE *</span><textarea name="message" placeholder="A little about your idea, project or enquiry…" rows={5} maxLength={3000} required /></label>
        </div>
        <p className="cu-form-help">This opens a draft in your email app. You can review your message and add any documents before sending.</p>
        <button className="cu-submit" type="submit">PREPARE ENQUIRY <span aria-hidden="true">↗</span></button>
        <p className="cu-status" role="status">{status}</p>
        {draft && <div className="cu-draft"><label htmlFor="enquiry-draft" className="cu-label">YOUR EMAIL DRAFT</label><textarea id="enquiry-draft" value={draft} readOnly rows={8} /><button type="button" onClick={copyDraft}>Copy message <span aria-hidden="true">↗</span></button></div>}
      </form>
    </section>
    <section className="cu-pathways cu-wrap" aria-labelledby="pathways-title"><div className="cu-section-heading"><p className="cu-label">02 / THE RIGHT CONVERSATION</p><h2 id="pathways-title">Many ways to <em>connect.</em></h2></div><div className="cu-pathway-grid">{[
      ['01', 'Creative collaborations', 'Tell us about your film, your perspective and the kind of collaboration you’re exploring.', topics[1]],
      ['02', 'Partnerships & distribution', 'Start a conversation about bringing meaningful cinema to new audiences.', topics[2]],
      ['03', 'Press & media', 'Get in touch about interviews, editorial features and film-related media enquiries.', topics[3]],
    ].map(([number, title, description, selected]) => <a key={number} href="#enquiry" onClick={() => setTopic(selected)}><span className="cu-label">{number} /</span><h3>{title}</h3><p>{description}</p><span className="cu-pathway-link">LET’S TALK <b aria-hidden="true">↗</b></span></a>)}</div></section>
    <section className="cu-faq cu-wrap"><div><p className="cu-label">03 / BEFORE YOU WRITE</p><h2>A little <em>clarity.</em></h2></div><div>{[
      ['What should I include in my enquiry?', 'Share your name, contact details, the purpose of your enquiry and a brief introduction to your idea or project. Relevant links can help give your message context.'],
      ['How can I share a proposal or document?', 'Prepare your enquiry using the form, then attach your proposal in your email app before sending. You can also include a link to your portfolio or project materials.'],
      ['Can I get in touch about press or partnerships?', 'Absolutely. Choose the relevant enquiry type above and tell us what you’re planning so your message has the right context.'],
    ].map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
    <section className="cu-closing"><p className="cu-label">WHILE YOU’RE HERE</p><h2>Get to know<br /><em>the stories we tell.</em></h2><a href="/#films" onClick={(event) => { if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return; event.preventDefault(); onNavigate('/#films'); }}>EXPLORE OUR FILMS <span aria-hidden="true">↗</span></a></section>
  </div>;
}
