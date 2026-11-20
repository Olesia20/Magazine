import "./Header.css";

function Header({ onHome }) {
  return (
    <header className="site-header">
      <p className="header-issue">NON COMERTION PROJECT</p>
      <div className="header-top">
        {/* <p className="header-edition">THE WORLD OF STYLE</p> */}

        <h1 className="header-logo">MAGAZINE</h1>
      </div>
      <nav className="headre-nav">
        <button onClick={onHome}>HOME</button>
        <a href="#issues">ISSUES</a>
        <a href="#fashion">FASHION</a>
        <a href="#lifestyle">LIFESTYLE</a>
        <a href="#culture">CULTURE</a>
      </nav>
    </header>
  );
}
export default Header;
