import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Magazine from "./components/Magazine/Magazine";
import ChristmasMagazine from "./components/Magazine/pages/ChristmasMagazine";
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
        <Home onOpenIssue={setActiveIssue} language={language} />
      ) : activeIssue === "dior" ? (
        <>
          <button className="back-to-home" onClick={() => setActiveIssue(null)}>
            ← BACK
          </button>
          <Magazine language={language} />
        </>
      ) : (
        <>
          <button className="back-to-home" onClick={() => setActiveIssue(null)}>
            BACK
          </button>
          <ChristmasMagazine language={language} />
        </>
      )}
    </div>
  );
}

export default App;
