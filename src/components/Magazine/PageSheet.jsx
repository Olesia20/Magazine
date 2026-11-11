import "./PageSheet.css";

function PageSheet({ front, back, className = "", flipped = false, style }) {
  return (
    <div
      className={`page-sheet ${className} ${flipped ? "is-flipped" : ""}`}
      style={style}
    >
      <div className="page-front">{front}</div>
      <div className="page-back">{back}</div>
    </div>
  );
}
export default PageSheet;
