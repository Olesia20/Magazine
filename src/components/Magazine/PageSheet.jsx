import "./PageSheet.css";

function PageSheet({
  front,
  back,
  className = "",
  flipped = false,
  flipDirection = "next",
  onTransitionEnd,
  onAnimationEnd,
  style,
}) {
  const flipClass = flipped
    ? flipDirection === "prev"
      ? "is-flipped-back"
      : "is-flipped"
    : "";
  return (
    <div
      className={`page-sheet ${className} ${flipClass}`}
      style={style}
      onTransitionEnd={(event) => {
        if (
          event.target === event.currentTarget &&
          event.propertyName === "transform"
        ) {
          onTransitionEnd?.();
        }
      }}
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget) {
          onAnimationEnd?.();
        }
      }}
    >
      <div className="page-front">{front}</div>
      <div className="page-back">{back}</div>
    </div>
  );
}
export default PageSheet;
