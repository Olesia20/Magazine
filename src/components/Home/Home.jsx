import translation from "../../translation/translation";
import "./Home.css";

function Home({ onOpenIssue, language }) {
  const t = translation[language];
  return (
    <main className="home-page">
      {/* <section className="home-intro">
        <p className="home-overline">THE WORLD OF STYLE PRESENTS</p>
        <h2>Stories Beyond Fashion</h2>
        <p className="home-description">
          Discover the stories, traditions, peaple and ideas that make our world
          beautiful.
        </p>
      </section> */}
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
            <div className={`issue-cover christmas-cover ${language}`}>
              <span className="cover-number">ISSUE 01 / 2026</span>
              <h3>
                {language === "en" ? (
                  <>
                    A CHRISTMAS
                    <br />
                    TALE
                  </>
                ) : (
                  <>
                    РІЗДВЯНА
                    <br />
                    КАЗКА
                  </>
                )}
              </h3>
              <p>UKRAINIAN CHRISTMAS STORY</p>
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
            <div className={`issue-cover dior-cover ${language}`}>
              <span className="cover-number">ISSUE 02 / 2026</span>
              <h3>
                {" "}
                THE HOUSE
                <br /> OF DIOR
              </h3>
              <p> THE STORY OF A LEGEND</p>
            </div>
            <div className={`issue-title ${language}`}>
              <h3>{t.diorIssueTitle}</h3>
              <p className="issue-category">{t.diorCategory}</p>
            </div>
          </article>
        </div>
        <p className="header-issue">NON COMERTION PROJECT</p>
      </section>
    </main>
  );
}
export default Home;
