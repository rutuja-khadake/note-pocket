import { useEffect, useState } from "react";
import "./App.css";
import DesktopView from "./view/DesktopView/DesktopView";
import MobileView from "./view/MobileView/MobileView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "./context/PocketContext";
import usePocketContext from "./hooks/usePocketContext";
import NotesMobilePage from "./components/notesMobilePage/NotesMobilePage";

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const { selected, setSelected } = usePocketContext();

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
    
  }, [selected]);
  const checkScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  window.addEventListener("resize", checkScreenSize);
  return (
    <Provider>
      <div className="App">
        {screenSize > 500 ? (
          <DesktopView />
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<MobileView />} />
              <Route path="/notes" element={<NotesMobilePage />} />
            </Routes>
          </Router>
        )}
      </div>
    </Provider>
  );
}

export default App;

