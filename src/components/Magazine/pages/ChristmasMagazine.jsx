import { useState, useEffect, useRef } from "react";
import "../Magazine.css";
import "../PageSheet.css";
import "./ChristmasMagazine.css";
import ChristmasCover from "./ChristmasCover";
import PageSheet from "../PageSheet";
import ChristmasIntroduction from "./ChristmasIntroduction";

function ChristmasPage({ subtitle, title, description, pageNumber, language }) {
  return (
    <div className={`christmas-page-content ${language}`}>
      <span className="christmas-page-subtitle">{subtitle}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <span className="christmas-page-number">{pageNumber}</span>
    </div>
  );
}

function ChristmasMagazine({ language }) {
  const [currentPage, setCurrentPage] = useState(() =>
    Number(localStorage.getItem("christmasCurrentPage") || 0),
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mobilePage, setMobilePage] = useState(() =>
    Number(localStorage.getItem("christmasMobilePage") || 0),
  );
  const [mobileFlipped, setMobileFlipped] = useState(false);
  const [mobileDirection, setMobileDirection] = useState("next");
  const [mobileAnimating, setMobileAnimating] = useState(false);
  const touchStartRef = useRef(null);
  useEffect(() => {
    localStorage.setItem("christmasCurrentPage", currentPage);
  }, [currentPage]);
  useEffect(() => {
    localStorage.setItem("christmasMobilePage", mobilePage);
  }, [mobilePage]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // setCurrentPage(0);
    // setMobilePage(0);
    setMobileFlipped(false);
    setMobileAnimating(false);
    setMobileDirection("next");
  }, [isMobile]);

  const pages = [
    {
      id: 1,
      front: <ChristmasCover language={language} />,
      back: <div className="blank-page"></div>,
    },
    {
      id: 2,
      front: <ChristmasIntroduction language={language} pageNumber={3} />,
      back: (
        <ChristmasPage
          subtitle="OUR HERITAGE"
          title="A Time of Wonder"
          description="Christmas in Ukraine is a celebration filled with symbols, memories and traditions passed from one generation to another."
          pageNumber={4}
          language={language}
        />
      ),
    },
    {
      id: 3,
      front: (
        <ChristmasPage
          subtitle="THREADS OF HERITAGE"
          title="The Beauty of Ukrainian Dress"
          description="Traditional clothing tells stories through embroidery, colours and patterns."
          pageNumber={5}
          language={language}
        />
      ),
      back: (
        <ChristmasPage
          subtitle="THE ART OF EMBROIDERY"
          title="Stories in Every Stitch"
          description="Every ornament carries its own meaning and reflects the beauty of Ukrainian heritage."
          pageNumber={6}
          language={language}
        />
      ),
    },
    {
      id: 4,
      front: (
        <ChristmasPage
          subtitle="HOLY EVENING"
          title="The Christmas Eve Table"
          description="Twelve traditional dishes, kutia, candles and the warmth of a family gathered together."
          pageNumber={7}
          language={language}
        />
      ),
      back: (
        <ChristmasPage
          subtitle="UKRAINIAN TRADITIONS"
          title="A Night of Meaning"
          description="A special evening filled with symbols, rituals and the spirit of Christmas."
          pageNumber={8}
          language={language}
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

  const handlePageClick = (event) => {
    if (isMobile) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;

    if (clickX > rect.width / 2) {
      nextPage();
    } else {
      previousPage();
    }
  };

  const handleTouchStart = (event) => {
    if (!isMobile || mobileAnimating) return;

    const touch = event.touches[0];

    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  };

  const handleTouchEnd = (event) => {
    if (!isMobile || mobileAnimating || !touchStartRef.current) return;

    const start = touchStartRef.current;
    const touch = event.changedTouches[0];

    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;

    touchStartRef.current = null;

    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) {
      return;
    }

    if (deltaX < 0) {
      nextPage();
    } else {
      previousPage();
    }
  };

  const handleMobileTransitionEnd = () => {
    if (!mobileFlipped || !mobileAnimating) return;

    setMobilePage((prev) => (mobileDirection === "next" ? prev + 1 : prev - 1));

    setMobileFlipped(false);
    setMobileAnimating(false);
  };

  return (
    <div className="magazine christmas-magazine">
      <div
        className={`magazine-pages ${isMobile ? "mobile-mode" : "desktop-mode"}`}
        onClick={handlePageClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={() => {
          touchStartRef.current = null;
        }}
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
        />

        <button
          className="page-arrow"
          onClick={nextPage}
          disabled={
            isMobile
              ? mobilePage === mobilePages.length - 1 || mobileAnimating
              : currentPage === pages.length
          }
          aria-label="Next page"
        />
      </div>
    </div>
  );
}

export default ChristmasMagazine;
