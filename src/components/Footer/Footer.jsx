import translation from "../../translation/translation";
import "./Footer.css";
function Footer({ language, setLanguage, onOpenIssue, onHome }) {
  const t = translation[language];
  return (
    <footer className={`home-footer ${language}`}>
      <div className="footer-column">
        <div className="footer-button">
          <button className="footer-brand" onClick={onHome}>
            MAGAZINE
          </button>
        </div>
        <p>
          {language === "ua"
            ? "Світ моди, історії і надхнення."
            : "The world of Fashion, history & inspiration."}
        </p>
        <p>
          {language === "ua"
            ? "НЕ КОМЕРЦІЙНИЙ ПРОЄКТ"
            : "NON-COMERTION PROJECT"}
        </p>
      </div>
      <div className={`footer-column ${language}`}>
        <h3>{language === "ua" ? "ВИПУСКИ" : "EXPLORE"}</h3>
        <button onClick={() => onOpenIssue("christmas")}>
          {t.christmasTitle}
        </button>
        <button onClick={() => onOpenIssue("dior")}>{t.diorIssueTitle}</button>
      </div>
      <div className="footer-column">
        <h3>{language === "ua" ? "МОВА" : "LANGUAGE"}</h3>
        <button
          className={language === "en" ? "active-language" : ""}
          onClick={() => setLanguage("en")}
        >
          English
        </button>
        <button
          className={language === "ua" ? "active-language" : ""}
          onClick={() => setLanguage("ua")}
        >
          Українська
        </button>
      </div>
    </footer>
  );
}
export default Footer;
