import { useState, useEffect } from "react";
import "./Magazine.css";
import Cover from "./pages/Cover";
import Introduction from "./pages/Introduction";
import PageSheet from "./PageSheet";
import MagazinePage from "./pages/MagazinePage";

function Magazine() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mobilePage, setMobilePage] = useState(0);
  const [mobileFlipped, setMobileFlipped] = useState(false);
  const [mobileDirection, setMobileDirection] = useState("next");
  const [mobileAnimating, setMobileAnimating] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    setCurrentPage(0);
    setMobilePage(0);
    setMobileFlipped(false);
    setMobileAnimating(false);
    setMobileDirection("next");
  }, [isMobile]);

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
  const mobilePages = [
    pages[0].front,
    ...pages.slice(1).flatMap((page) => [page.front, page.back]),
  ];
  const nextPage = () => {
    if (isMobile) {
      if (mobilePage < mobilePages.length - 1 && !mobileAnimating) {
        setMobileDirection("next");
        setMobileAnimating(true);
        setMobileFlipped(true);
      }
    } else {
      setCurrentPage((prev) => Math.min(prev + 1, pages.length));
    }
  };
  const previousPage = () => {
    if (isMobile) {
      if (mobilePage > 0 && !mobileAnimating) {
        setMobileDirection("prev");
        setMobileAnimating(true);
        setMobileFlipped(true);
      }
    } else {
      setCurrentPage((prev) => Math.max(prev - 1, 0));
    }
  };
  const handleMobileTransitionEnd = () => {
    if (!mobileFlipped || !mobileAnimating) return;
    setMobilePage((prev) => (mobileDirection === "next" ? prev + 1 : prev - 1));
    setMobileFlipped(false);
    setMobileAnimating(false);
  };
  return (
    <div className="magazine">
      <div
        className={`magazine-pages ${isMobile ? "mobile-mode" : "desktop-mode"}`}
      >
        {isMobile ? (
          <>
            <div className="mobile-static-page">
              {
                mobilePages[
                  mobileAnimating
                    ? mobilePage + (mobileDirection === "next" ? 1 : -1)
                    : mobilePage
                ]
              }
            </div>
            {mobileAnimating && (
              <PageSheet
                className="mobile-sheet"
                front={mobilePages[mobilePage]}
                back={
                  mobilePages[
                    mobilePage + (mobileDirection === "next" ? 1 : -1)
                  ]
                }
                flipped={true}
                flipDirection={mobileDirection}
                onAnimationEnd={handleMobileTransitionEnd}
                style={{ zIndex: 2 }}
              />
            )}
          </>
        ) : (
          pages.map((page, index) => (
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
          ))
        )}
      </div>
      <div className="page-controls">
        <button
          className="page-arrow"
          onClick={previousPage}
          disabled={
            isMobile ? mobilePage === 0 || mobileAnimating : currentPage === 0
          }
          aria-label="Previous page"
        >
          &#8592;
        </button>
        <button
          className="page-arrow"
          onClick={nextPage}
          disabled={
            isMobile
              ? mobilePage === mobilePages.length - 1 || mobileAnimating
              : currentPage === pages.length
          }
          aria-label="Next page"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default Magazine;
