import "./PageSheet.css";

function PageSheet({ front, back, className = "", flipped = false, style }) {
  console.log("PageSheet class:", className);
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
