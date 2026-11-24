import OlenaPchilka from "../../../assets/images/olenaPchilka.jpg";

import "./ChristmasCover.css";
function ChristmasCover({ language }) {
  return (
    <div
      className={`christmas-cover-page ${language}`}
      style={{ backgroundImage: `url(${OlenaPchilka})` }}
    >
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
          ? "A Jorney into Ukrainian Christmas, Traditional Clothing and Culture"
          : "ПОДОРОЖ У СВІТ УКРАЇНСЬКОГО РІЗДВА, ТРАДИЦІЙНИЙ КОСТЮМ І КУЛЬТУРА"}
      </p>
      <p className="christmas-cover-credit">
        Cover: Olena Pchilka
        <br />
        (Olha Kosach, 1849-1930)
      </p>
      <span className="christmas-cover-brand">MAGAZINE</span>
      <span className="christmas-issue-number">ISSUE 01 / 2026</span>
    </div>
  );
}
export default ChristmasCover;
