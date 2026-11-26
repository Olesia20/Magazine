import translation from "../../translation/translation";
import ChristmasCover from "../Magazine/pages/ChristmasCover";
import Cover from "../Magazine/pages/Cover";
import "./Home.css";

function Home({ onOpenIssue, language }) {
  const t = translation[language];
  return (
    <main className="home-page">
      <section className="issues-section" id="issues">
        <div className={`section-heading ${language}`}>
          <span>{t.homeSubtitle}</span>
          <h2>{t.homeTitle}</h2>
        </div>
        <div className="issue-grid">
          <article
            className="issue-card christmas-card"
            onClick={() => onOpenIssue("christmas")}
          >
            <div className="issue-cover-preview christmas-preview">
              <ChristmasCover language={language} />
            </div>

            <div className={`issue-title ${language}`}>
              <h3>{t.christmasTitle}</h3>
              <p className="issue-category">{t.christmasCategory}</p>
              <span>{t.comingSoon}</span>
            </div>
          </article>
          <article
            className="issue-card dior-card"
            onClick={() => onOpenIssue("dior")}
          >
            <div className="issue-cover-preview dior-preview">
              <Cover language={language} preview={true} />
            </div>
            <div className={`issue-title ${language}`}>
              <h3>{t.diorIssueTitle}</h3>
              <p className="issue-category">{t.diorCategory}</p>
              <span>{t.comingSoon}</span>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
export default Home;
