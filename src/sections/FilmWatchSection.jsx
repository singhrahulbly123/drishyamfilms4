import { useRef, useState } from "react";
import siyaPoster from "../assets/images/siya-poster.jpg";
import { watchOptions } from "../data/watchOptions";

export default function FilmWatchSection() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const tabRefs = useRef([]);
  function handleTabKey(event, index) {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % watchOptions.length;
    else if (event.key === "ArrowLeft")
      next = (index + watchOptions.length - 1) % watchOptions.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = watchOptions.length - 1;
    else return;
    event.preventDefault();
    setSelectedTabIndex(next);
    tabRefs.current[next]?.focus();
  }
  return (
    <section className="film-watch" aria-labelledby="film-watch-title">
      <div className="film-watch-art">
        <img src={siyaPoster} alt="Siya official film poster" loading="lazy" />
        <span className="film-watch-edition">
          THE DRISHYAM COLLECTION <span>01 / SIYA</span>
        </span>
      </div>
      <div className="film-watch-content">
        <span className="film-watch-eyebrow">WATCH, RENT OR OWN</span>
        <h2 id="film-watch-title">
          Spend a moment
          <br />
          in this <em>story.</em>
        </h2>
        <p className="film-watch-intro">
          A voice that refuses to be silenced. A story that stays with you.
        </p>
        <div
          className="film-watch-tabs"
          role="tablist"
          aria-label="Ways to watch Siya"
        >
          {watchOptions.map((tab, index) => (
            <button
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              key={tab.id}
              id={"watch-tab-" + tab.id}
              type="button"
              role="tab"
              aria-selected={selectedTabIndex === index}
              aria-controls={"watch-panel-" + tab.id}
              tabIndex={selectedTabIndex === index ? 0 : -1}
              onClick={() => setSelectedTabIndex(index)}
              onKeyDown={(event) => handleTabKey(event, index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {watchOptions.map((tab, index) => (
          <div
            key={tab.id}
            id={"watch-panel-" + tab.id}
            role="tabpanel"
            aria-labelledby={"watch-tab-" + tab.id}
            hidden={selectedTabIndex !== index}
            tabIndex={0}
            className="film-watch-panel"
          >
            <div className="film-watch-panel-heading">
              <h3>{tab.label}</h3>
              <span>
                {String(tab.providers.length).padStart(2, "0")} PLATFORMS
              </span>
            </div>
            <p>{tab.description}</p>
            <div className="film-watch-providers">
              {tab.providers.map(({ name, mark, tone, href }) => (
                <a
                  className="film-watch-provider"
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    "Explore " + name + " for Siya (opens in a new tab)"
                  }
                >
                  <span
                    className={"film-watch-logo film-watch-logo--" + tone}
                    aria-hidden="true"
                  >
                    {mark}
                  </span>
                  <span className="film-watch-provider-name">{name}</span>
                  <span
                    className="film-watch-provider-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
            <small>Explore platforms for availability in your region.</small>
          </div>
        ))}
      </div>
    </section>
  );
}
