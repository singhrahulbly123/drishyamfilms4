import { useEffect, useState } from 'react';
import { posts, postUrl } from './blogData';
import './blog.css';
import journalBanner from '../../asstes/blog/journal-banner.png';

function JournalLink({ to, onNavigate, children, ...props }) {
  return <a href={to} {...props} onClick={(event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault(); onNavigate(to);
  }}>{children}</a>;
}
const Arrow = () => <span aria-hidden="true">↗</span>;
const readingTime = (post) => `${Math.max(2, Math.ceil(post.sections.flat().join(' ').split(/\s+/).length / 200))} MIN READ`;
function StoryCard({ post, onNavigate, index }) {
  return <article className="j-card">
    <JournalLink to={postUrl(post)} onNavigate={onNavigate} className="j-card-link">
      <div className="j-card-image"><img src={post.image} alt={post.alt} loading="lazy" /><span className="j-card-arrow"><Arrow /></span></div>
      <div className="j-meta"><span>{post.category}</span><span>{readingTime(post)}</span></div>
      <h3>{post.title}</h3><p>{post.intro}</p>
      <div className="j-card-bottom"><span>READ STORY <Arrow /></span><small>{String(index + 1).padStart(2, '0')}</small></div>
    </JournalLink>
  </article>;
}

export default function BlogPages({ currentPath, onNavigate }) {
  const slug = currentPath.startsWith('/blog/') ? currentPath.split('/')[2] : currentPath === '/blog-details' ? new URLSearchParams(window.location.search).get('story') || posts[0].slug : null;
  const post = posts.find((item) => item.slug === slug);
  useEffect(() => {
    const previous = document.title;
    document.title = `${slug ? post?.title || 'Story not found' : 'The Journal'} | Drishyam Films`;
    return () => { document.title = previous; };
  }, [slug, post]);
  if (slug && !post) return <div className="journal-page j-not-found"><p className="j-eyebrow">THE JOURNAL / 404</p><h1>This story is<br /><em>still unwritten.</em></h1><JournalLink className="j-text-link" to="/blog" onNavigate={onNavigate}>Explore all stories <Arrow /></JournalLink></div>;
  return post ? <ArticlePage key={post.slug} post={post} onNavigate={onNavigate} /> : <JournalPage onNavigate={onNavigate} />;
}

function JournalPage({ onNavigate }) {
  const [category, setCategory] = useState('All Stories');
  const [query, setQuery] = useState('');
  const categories = ['All Stories', ...new Set(posts.map((post) => post.category))];
  const visible = posts.filter((post) => (category === 'All Stories' || post.category === category) && `${post.title} ${post.intro} ${post.category}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <div className="journal-page">
    <section className="about-hero meet-team-hero j-listing-hero">
      <img className="about-hero-media" src={journalBanner} alt="Film journals, screenplay notes and film reels on a warmly lit editorial desk" fetchPriority="high" />
      <div className="about-hero-shade" />
      <div className="about-hero-number">BLOG / FILM &amp; CULTURE</div>
      <div className="about-hero-copy">
        <p>THE DRISHYAM BLOG</p>
        <h1>Film stories.<br /><em>Fresh perspectives.</em></h1>
        <span>Explore articles on filmmaking, behind-the-scenes stories, festival journeys and conversations from the world of cinema.</span>
      </div>
      <div className="about-scroll-cue"><i /> SCROLL TO DISCOVER</div>
    </section>
    <section className="j-stories j-wrap" aria-labelledby="stories-title"><div className="j-section-heading"><div><p className="j-eyebrow">NOTES FROM OUR WORLD</p><h2 id="stories-title">The latest <em>stories.</em></h2></div><span className="j-edition">CINEMA. CULTURE. CONVERSATION.</span></div>
      <div className="j-toolbar"><div className="j-filters" aria-label="Filter stories">{categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="j-search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="6" /><path d="m15 15 5 5" /></svg><input type="search" aria-label="Search stories" placeholder="Find a story" value={query} onChange={(event) => setQuery(event.target.value)} /></label></div>
      <p className="j-results" aria-live="polite">{String(visible.length).padStart(2, '0')} STORIES {category !== 'All Stories' && ` / ${category.toUpperCase()}`}</p>
      <div className="j-grid">{visible.map((post, index) => <StoryCard key={post.slug} post={post} index={index} onNavigate={onNavigate} />)}</div>
      {!visible.length && <div className="j-empty"><h3>No stories in this frame.</h3><p>Try another search or explore all categories.</p><button onClick={() => { setQuery(''); setCategory('All Stories'); }}>Reset filters ↗</button></div>}
      <div className="j-endnote"><span />YOU’RE ALL CAUGHT UP<span /></div>
    </section>
    <JournalClosing onNavigate={onNavigate} />
  </div>;
}

function JournalClosing({ onNavigate }) {
  return <section className="j-closing"><p className="j-eyebrow">FROM THE PAGE TO THE SCREEN</p><h2>Some stories are read.<br /><em>Others are felt.</em></h2><JournalLink to="/#films" onNavigate={onNavigate} className="j-text-link">EXPLORE OUR FILMS <Arrow /></JournalLink><span className="j-closing-mark" aria-hidden="true">DF</span></section>;
}

function ArticlePage({ post, onNavigate }) {
  const [shareStatus, setShareStatus] = useState('');
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const article = document.getElementById('journal-article');
      if (!article) return;
      const box = article.getBoundingClientRect();
      setProgress(Math.min(100, Math.max(0, (window.innerHeight - box.top) / box.height * 100)));
    };
    update(); window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  const copyLink = async () => {
    try { await navigator.clipboard.writeText(window.location.href); setShareStatus('Story link copied.'); }
    catch { setShareStatus('Copy the page address from your browser to share this story.'); }
  };
  return <div className="journal-page j-detail"><div className="j-reading-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
    <header className="j-article-header j-wrap"><JournalLink to="/blog" onNavigate={onNavigate} className="j-back">← BACK TO THE JOURNAL</JournalLink><p className="j-eyebrow">{post.category} <span> / </span> {readingTime(post)}</p><h1>{post.title}<em>.</em></h1><p className="j-standfirst">{post.intro}</p><div className="j-byline"><span className="j-author-mark">DF</span><div><strong>The Drishyam Journal</strong><span>Reflections on cinema &amp; the creative process</span></div><span className="j-edition">A CLOSER LOOK / VOL. 01</span></div></header>
    <figure className="j-article-figure j-wrap"><img src={post.image} alt={post.alt} fetchPriority="high" /><figcaption><span>THE DRISHYAM JOURNAL</span><span>{post.category} / A different way of seeing</span></figcaption></figure>
    <div className="j-article-layout j-wrap"><aside className="j-contents"><p className="j-eyebrow">IN THIS STORY</p><nav aria-label="Article contents">{post.sections.map(([title], index) => <a key={title} href={`#chapter-${index + 1}`}><span>0{index + 1}</span>{title}</a>)}</nav><div className="j-share"><p className="j-eyebrow">PASS THE STORY ON</p><button type="button" onClick={copyLink}>Copy story link <Arrow /></button><a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(window.location.href)}`}>Share by email <Arrow /></a><p role="status">{shareStatus}</p></div></aside>
      <article id="journal-article" className="j-article-body">{post.sections.map(([title, ...paragraphs], index) => <section id={`chapter-${index + 1}`} key={title}><p className="j-chapter">0{index + 1} /</p><h2>{title}</h2>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{index === 1 && <blockquote><span aria-hidden="true">“</span>{post.quote}<cite>A NOTE ON THE CRAFT</cite></blockquote>}</section>)}<div className="j-article-end"><span aria-hidden="true">✳</span><p>END OF STORY. START OF A CONVERSATION.</p></div><div className="j-author-box"><span className="j-author-mark">DF</span><div><p className="j-eyebrow">THE DRISHYAM JOURNAL</p><p>A space for the ideas, people and craft behind meaningful cinema.</p><JournalLink to="/blog" onNavigate={onNavigate}>More from the journal <Arrow /></JournalLink></div></div></article>
    </div>
    <section className="j-related j-wrap"><div className="j-section-heading"><div><p className="j-eyebrow">KEEP EXPLORING</p><h2>Another <em>perspective.</em></h2></div><JournalLink className="j-text-link" to="/blog" onNavigate={onNavigate}>ALL STORIES <Arrow /></JournalLink></div><div className="j-grid">{posts.filter((item) => item.slug !== post.slug).slice(0, 3).map((item, index) => <StoryCard key={item.slug} post={item} onNavigate={onNavigate} index={index} />)}</div></section><JournalClosing onNavigate={onNavigate} />
  </div>;
}
