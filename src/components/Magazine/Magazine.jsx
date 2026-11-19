import { useState, useEffect, useRef } from "react";
import "./Magazine.css";
import Cover from "./pages/Cover";
import Introduction from "./pages/Introduction";
import PageSheet from "./PageSheet";
import MagazinePage from "./pages/MagazinePage";
import CenteredImageWrap from "./layouts/CenteredImageWrap";
import translation from "../../translation/translation";

function Magazine() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mobilePage, setMobilePage] = useState(0);
  const [mobileFlipped, setMobileFlipped] = useState(false);
  const [mobileDirection, setMobileDirection] = useState("next");
  const [mobileAnimating, setMobileAnimating] = useState(false);
  const touchStartRef = useRef(null);
  const [language, setLanguage] = useState("en");
  const t = translation[language];
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
    visible: false,
    direction: "next",
  });

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
      front: <Cover language={language} />,
      back: <div className="blank-page"></div>,
    },
    {
      id: 2,
      front: <Introduction pageNumber={3} language={language} />,
      back: (
        // <MagazinePage
        //   subtitle="The Beginning"
        //   title="FASHION HISTORY"
        //   description="A journey through the evolution of Fashion."
        //   pageNumber={4}
        //   side="left"
        // />
        <CenteredImageWrap pageNumber={4} side="right" language={language} />
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
  const handleMauseMove = (event) => {
    if (isMobile) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setCursorPosition({
      x,
      y,
      visible: true,
      direction: x > rect.width / 2 ? "next" : "prev",
    });
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
    <div className="magazine">
      <div className="language-switcher">
        <button
          className={language === "en" ? "active" : ""}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
        <span>|</span>
        <button
          className={language === "ua" ? "active" : ""}
          onClick={() => setLanguage("ua")}
        >
          UA
        </button>
      </div>
      <div
        className={`magazine-pages ${isMobile ? "mobile-mode" : "desktop-mode"}`}
        onMouseMove={handleMauseMove}
        onMouseLeave={() =>
          setCursorPosition((prev) => ({ ...prev, visible: false }))
        }
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
      {!isMobile && cursorPosition.visible && (
        <div
          className={`page-cursor ${cursorPosition.direction}`}
          style={{
            left: cursorPosition.x + 130,
            top: cursorPosition.y + 50,
          }}
        >
          {cursorPosition.direction === "next" ? "NEXT>>" : "<<PREV"}
        </div>
      )}
      <div className="page-controls">
        <button
          className="page-arrow"
          onClick={previousPage}
          disabled={
            isMobile ? mobilePage === 0 || mobileAnimating : currentPage === 0
          }
          aria-label="Previous page"
        ></button>
        <button
          className="page-arrow"
          onClick={nextPage}
          disabled={
            isMobile
              ? mobilePage === mobilePages.length - 1 || mobileAnimating
              : currentPage === pages.length
          }
          aria-label="Next page"
        ></button>
      </div>
    </div>
  );
}

export default Magazine;
