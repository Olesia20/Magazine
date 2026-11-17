import "./Introduction.css";
function Introduction({ pageNumber }) {
  return (
    <div className="introduction">
      <p>THE WORLLD OF FASHION</p>
      <h2>FASHION IS A STORY</h2>
      <p>A journey through creativity, history and timless style.</p>
      <span className="page-number right">{pageNumber}</span>
    </div>
  );
}
export default Introduction;
