import "./Home.css";

function Home({ onOpenIssue }) {
  return (
    <main className="home-page">
      <section className="home-intro">
        <p className="home-overline">THE WORLD OF STYLE PRESENTS</p>
        <h2>Stories Beyond Fashion</h2>
        <p className="home-description">
          Discover the stories, traditions, peaple and ideas that make our world
          beautiful.
        </p>
      </section>
      <section className="issues-section" id="issues">
        <div className="section-heading">
          <span>EXPLORE OUR WORLD</span>
          <h2>Latest Issues</h2>
        </div>
        <div className="issue-grid">
          <article
            className="issue-card christmas-card"
            onClick={() => onOpenIssue("christmas")}
          >
            <div className="issue-cover christmas-cover">
              <span className="cover-number">ISSUE 01 / 2026</span>
              <h3>
                РІЗДВЯНА
                <br />
                КАЗКА
              </h3>
              <p>UKRAINIAN CHRISTMAS STORY</p>
            </div>
            <h3 className="issue-title">A Ukrainian Christmas Story</h3>
            <p className="issue-category">CULTURE / TRADITIONS / FOOD</p>
          </article>
          <article
            className="issue-card dior-card"
            onClick={() => onOpenIssue("dior")}
          >
            <div className="issue-cover dior-cover">
              <span className="cover-number">ISSUE 02 / 2026</span>
              <h3>
                {" "}
                THE HOUSE
                <br /> OF DIOR
              </h3>
              <p> THE STORY OF A LEGEND</p>
            </div>
            <h3 className="issue-title"> The House of Dior</h3>
            <p className="issue-category">FASHION / HISTORY / ICONS</p>
          </article>
        </div>
      </section>
    </main>
  );
}
export default Home;
