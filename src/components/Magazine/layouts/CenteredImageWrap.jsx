import diorImage from "../../../assets/images/diorImage.jpeg";
import MagazinePage from "../pages/MagazinePage";
import translation from "../../../translation/translation";
import "./CenteredImageWrap.css";

function CenteredImageWrap({ pageNumber, side = "right", language }) {
  const t = translation[language];
  return (
    <div className={`magazine-page-content centered-image-wrap ${language}`}>
      <MagazinePage subtitle="CHRISTIAN DIOR STORY" />
      <p className="wrap-top-text">
        {language === "en" ? (
          <>
            <strong>Christian Dior</strong> was born on{" "}
            <strong>January 21, 1905</strong>, in{" "}
            <strong>Granville, Normandy</strong>.Between the gentle surroundings
            of the Villa Les Rhumbs and a Parisian apartment in Passy, his first
            passions were awakened, inspired by thebeauty of these exclusive
            settings. An infinite source of inspiration, his childhood would
            continue to occupy and nourish his imagination, from his fascination
            with gardens to his love of architecture and the arts in.
          </>
        ) : (
          <>
            <strong>Christian Dior</strong> народився{" "}
            <strong>21 січня 1905 року</strong> в{" "}
            <strong>Гранвілі, Нормандія</strong>. Між затишною атмосферою вілли
            Les Rhumbs та паризькою квартирою в районі Пасі зароджувалися його
            перші захоплення, натхненні красою цих особливих місць. Дитинство
            стало невичерпним джерелом натхнення, живило його уяву та любов до
            садів, архітектури й мистецтва в усіх його проявах.
          </>
        )}
      </p>
      <div className="wrap-middle">
        <p>{t.diorLeft}</p>
        <figure className="wrap-image">
          <img src={diorImage} alt="Christian Dior" />
          <figcaption>{t.diorCaption}</figcaption>
        </figure>
        <p>{t.diorRight}</p>
      </div>
      <p className="wrap-bottom-text">{t.diorBottom}</p>
      <span className={`page-number ${side}`}>{pageNumber}</span>
    </div>
  );
}
export default CenteredImageWrap;
