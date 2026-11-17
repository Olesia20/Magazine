import FashionImage from "../../../assets/images/dior.jpg";

function Cover() {
  return (
    <div className="cover">
      <h1>MAGAZINE</h1>
      <p>THE WORLD OF FASHION</p>
      <div className="cover-image">
        <img src={FashionImage} alt="Fashion Image-Dior" />
        <h2 className="cover-image-text">
          The History
          <br />
          {""} of Christian Dior
        </h2>
      </div>
    </div>
  );
}
export default Cover;
