import "./Introduction.css";
function Introduction({ pageNumber }) {
  return (
    <div className="introduction">
      <p>THE WORLLD OF FASHION</p>
      <h2>Fashion is a story</h2>
      <p>A journey through creativity, history and timless style.</p>
      <span className="page-number">{pageNumber}</span>
    </div>
  );
}
export default Introduction;
