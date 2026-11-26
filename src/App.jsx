import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Magazine from "./components/Magazine/Magazine";
import ChristmasMagazine from "./components/Magazine/pages/ChristmasMagazine";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [activeIssue, setActiveIssue] = useState(() =>
    localStorage.getItem("activeIssue"),
  );
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "en",
  );
  useEffect(() => {
    if (activeIssue) {
      localStorage.setItem("activeIssue", activeIssue);
    } else {
      localStorage.removeItem("activeIssue");
    }
  }, [activeIssue]);
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <div className="app">
      <Header
        onHome={() => setActiveIssue(null)}
        language={language}
        setLanguage={setLanguage}
      />
      {activeIssue === null ? (
        <Home
          onOpenIssue={setActiveIssue}
          language={language}
          setLanguage={setLanguage}
        />
      ) : activeIssue === "dior" ? (
        <>
          {/* <button className="back-to-home" onClick={() => setActiveIssue(null)}>
            ← BACK
          </button> */}
          <Magazine language={language} onHome={() => setActiveIssue(null)} />
        </>
      ) : (
        <>
          {/* <button className="back-to-home" onClick={() => setActiveIssue(null)}>
            ← BACK
          </button> */}
          <ChristmasMagazine
            language={language}
            onHome={() => setActiveIssue(null)}
          />
        </>
      )}
      <Footer
        language={language}
        setLanguage={setLanguage}
        onOpenIssue={setActiveIssue}
        onHome={() => setActiveIssue(null)}
      />
    </div>
  );
}

export default App;
