import OlenaPchilka from "../../../assets/images/olenaPchilka2.jpg";
import translation from "../../../translation/translation";
import "./ChristmasIntroduction.css";

function ChristmasIntroduction({ language, pageNumber = 3 }) {
  const t = translation[language];
  return (
    <div className={`christmas-introduction ${language}`}>
      <div className="christmas-intro-left">
        <img
          src={OlenaPchilka}
          alt="Olena Pchilka"
          className="olena-portrait"
        />
        <h3>{t.olenaName}</h3>
        <p className="olena-biography">{t.olenaBiography}</p>
      </div>
      <div className="christmas-intro-right">
        <span className="christmas-intro-subtitle">
          {t.christmasIntroSubtitle}
        </span>
        <h2>{t.christmasIntroTitle}</h2>
        <p>{t.christmasIntroText}</p>
        <p className="christmas-intro-closing">{t.christmasIntroClosing}</p>
      </div>
      <span className="christmas-intro-page-number">{pageNumber}</span>
    </div>
  );
}
export default ChristmasIntroduction;
