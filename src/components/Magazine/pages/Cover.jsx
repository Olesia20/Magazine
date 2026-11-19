import FashionImage from "../../../assets/images/dior.jpg";
import translation from "../../../translation/translation";

function Cover({ language }) {
  const t = translation[language];
  return (
    <div className={`cover ${language}`}>
      <h1>MAGAZINE</h1>
      <p>{t.coverTitle}</p>
      <div className="cover-image">
        <img src={FashionImage} alt="Fashion Image-Dior" />
        <h2 className="cover-image-text">
          {t.coverStory1}
          <br />
          {""} {t.coverStory2}
        </h2>
      </div>
    </div>
  );
}
export default Cover;
