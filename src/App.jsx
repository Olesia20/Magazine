import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Magazine from "./components/Magazine/Magazine";
import "./App.css";

function App() {
  const [activeIssue, setActiveIssue] = useState(null);

  return (
    <div className="app">
      {activeIssue === null ? (
        <>
          <Header onHome={() => setActiveIssue(null)} />
          <Home onOpenIssue={setActiveIssue} />
        </>
      ) : activeIssue === "dior" ? (
        <>
          <button className="back-to-home" onClick={() => setActiveIssue(null)}>
            ← BACK TO ISSUES
          </button>
          <Magazine />
        </>
      ) : (
        <p>Our Christmas issue is coming soon 🎄</p>
      )}
    </div>
  );
}

export default App;
