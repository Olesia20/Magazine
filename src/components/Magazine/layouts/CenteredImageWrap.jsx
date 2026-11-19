import diorImage from "../../../assets/images/diorImage.jpeg";
import MagazinePage from "../pages/MagazinePage";
import "./CenteredImageWrap.css";

function CenteredImageWrap({ pageNumber, side = "right" }) {
  return (
    <div className="magazine-page-content centered-image-wrap">
      <MagazinePage subtitle="CHRISTIAN DIOR STORY" />
      <p className="wrap-top-text">
        Christian Dior was born on January 21, 1905, in Granville, Normandy.
        Between the gentle surroundings of the Villa Les Rhumbs and a Parisian
        apartment in Passy, his first passions were awakened, inspired by the
        beauty of these exclusive settings. An infinite source of inspiration,
        his childhood would continue to occupy and nourish his imagination, from
        his fascination with gardens to his love of architecture and the arts in
        all forms.
      </p>
      <div className="wrap-middle">
        <p>
          Growing up in Normandy, Christian Dior developed a deep appreciation
          for gardens, architecture and art. These early impressions would later
          become an important part of his creative vision.In 1911, the family
          moved full-time to a new home in Paris,where Christian attended the
          Lycée Janson-de-Sailly, graduating in 1923.
        </p>
        <figure className="wrap-image">
          <img src={diorImage} alt="Christian Dior" />
          <figcaption>Fashion is more than clothing</figcaption>
        </figure>
        <p>
          Unveiled on February 12, 1947, in the salons of 30 Avenue Montaigne,
          Christian Dior's first défilé shaped a new idea of elegance. This
          seminal collection engendered the New Look: the Bar suit with its
          pleated black wool skirt gave life to a bold silhouette that became
          the emblem of Dior style.
        </p>
      </div>

      <p className="wrap-bottom-text">
        From the outset, Christian Dior established himself as a major figure of
        French fashion represented by designs that immediately transcended
        borders. The international press was enthralled, the silhouettes
        circulated, and subsidiaries were opened in major cities round the
        world, from New York to Caracas in Venezuela.
      </p>
      <span className={`page-number ${side}`}>{pageNumber}</span>
    </div>
  );
}
export default CenteredImageWrap;
