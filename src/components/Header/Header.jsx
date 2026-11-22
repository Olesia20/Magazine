import "./Header.css";

function Header({ onHome, language, setLanguage }) {
  return (
    <>
      <nav className="header-nav">
        <button onClick={onHome}>HOME</button>
        <a href="#issues">ISSUES</a>
        <a href="#fashion">FASHION</a>
        <a href="#culture">CULTURE</a>
        <div className="language-switcher">
          <button
            className={language === "en" ? "active" : ""}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
          <span>|</span>
          <button
            className={language === "ua" ? "active" : ""}
            onClick={() => setLanguage("ua")}
          >
            UA
          </button>
        </div>
      </nav>
      <header className="site-header">
        <div className="header-top">
          <h1 className="header-logo">MAGAZINE</h1>
        </div>
      </header>
    </>
  );
}
export default Header;
