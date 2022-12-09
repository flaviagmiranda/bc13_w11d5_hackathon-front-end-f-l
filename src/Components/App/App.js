import "./App.css";
import Header from "../Header/Header";
import Viewer from "../Viewer/Viewer.js";
import { ThemeContext } from "../../Custom Hooks/ThemeContext";
import { useState } from 'react';

function App() {

  const [colour, setColour] = useState('light')

  return (
    <div>
      <ThemeContext.Provider value={colour}>
        <Header colour={colour} setColour={setColour} />
        <Viewer colour={colour} setColour={setColour} />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
