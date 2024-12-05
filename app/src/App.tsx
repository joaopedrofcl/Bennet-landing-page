import React from "react";
import Navbar from "./components/Navbar";
import Sobre from "./components/Sobre";
import Cards from "./components/Cards";
import Graficos from "./components/Graficos";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div id="sobre">
        <Sobre />
      </div>
      <div id="cards">
        <Cards />
      </div>
      <div id="graficos">
        <Graficos />
      </div>
    </div>
  );
};

export default App;
