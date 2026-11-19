import "./Introduction.css";
import translation from "../../../translation/translation";
function Introduction({ pageNumber, language }) {
  const t = translation[language];
  return (
    <div className={`introduction ${language}`}>
      <p className="introdactiontTitle">{t.introSubtitle}</p>
      <h2>{t.introTitle}</h2>
      <p>{t.introDescription}</p>
      <span className="page-number right">{pageNumber}</span>
    </div>
  );
}
export default Introduction;
