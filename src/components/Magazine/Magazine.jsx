import { useState, useEffect } from "react";
import "./Magazine.css";
import Cover from "./pages/Cover";
import Introduction from "./pages/Introduction";
import PageSheet from "./PageSheet";
import MagazinePage from "./pages/MagazinePage";

function Magazine() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pages = [
    {
      id: 1,
      front: <Cover />,
      back: <div className="blank-page"></div>,
    },
    {
      id: 2,
      front: <Introduction pageNumber={3} />,
      back: (
        <MagazinePage
          subtitle="The Beginning"
          title="Fashion History"
          description="A journey through the evolution of Fashion."
          pageNumber={4}
          side="left"
        />
      ),
    },
    {
      id: 3,
      front: (
        <MagazinePage
          subtitle="The Story"
          title="Fashion House"
          description="The people who changed the world of Fashion."
          pageNumber={5}
          side="right"
        />
      ),
      back: (
        <MagazinePage
          subtitle="The Icons"
          title="Fashion Icon"
          description="The people who changed the world of Fashion."
          pageNumber={6}
          side="left"
        />
      ),
    },
    {
      id: 4,
      front: (
        <MagazinePage
          subtitle="The Details"
          title="Timeless Style"
          description="Thank details that make Fashion unforgettable."
          pageNumber={7}
          side="right"
        />
      ),
      back: (
        <MagazinePage
          subtitle="The End"
          title="Thank You"
          description="Thank you for exploring the world of Fashion."
          pageNumber={8}
          side="left"
        />
      ),
    },
  ];
  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pages.length));
  };
  const previousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };
  return (
    <div className="magazine">
     
      <div className="magazine-pages">
        {pages.map((page, index) => (
          <PageSheet
            key={page.id}
            className={`sheet-${index}`}
            front={page.front}
            back={page.back}
            flipped={currentPage > index}
            style={{
              zIndex:
                currentPage > index ? index + 1 : pages.length * 2 - index,
            }}
          />
        ))}
      </div>
      <div className="page-controls">
        <button
          className="page-arrow"
          onClick={previousPage}
          disabled={currentPage === 0}
          aria-label="Previous page"
        >
          &#8592;
        </button>
        <button
          className="page-arrow"
          onClick={nextPage}
          disabled={currentPage === pages.length}
          aria-label="Next page"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default Magazine;
