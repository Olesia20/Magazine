function MagazinePage({
  title,
  subtitle,
  description,
  pageNumber,
  side = "right",
}) {
  return (
    <div className="magazine-page-content">
      <p className="page-subtitlle">{subtitle}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <span className={`page-number ${side}`}>{pageNumber}</span>
    </div>
  );
}
export default MagazinePage;
