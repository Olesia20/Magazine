import "./ChristmasCover.css";
function ChristmasCover({ language }) {
  return (
    <div className={`christmas-cover-page ${language}`}>
      <span className="christmas-issue-number">ISSUE 01 / 2026</span>
      <h1 className="christmas-cover-title">
        {language === "en" ? (
          <>
            {" "}
            A CHRISTMAS <br />
            TALE
          </>
        ) : (
          <>
            РІЗДВЯНА
            <br /> КАЗКА
          </>
        )}
      </h1>
      <p className="christmas-cover-subtitle">
        {language === "en"
          ? "A JOURNEY INTO UKRAINIAN CHRISTMAS"
          : "ПОДОРОЖ У СВІТ УКРАЇНСЬКОГО РІЗДВА"}
      </p>
      <span className="christmas-cover-brand">MAGAZINE</span>
    </div>
  );
}
export default ChristmasCover;
