import "./App.css";
import React, { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import StockAnalyzer from "./pages/StockAnalyzer";
import SentimentAnalyzer from "./pages/SentimentAnalyzer";
import PortfolioAnalyzer from "./pages/PortfolioAnalyzer";

function App() {
  const [activePage, setActivePage] = useState("stock");

  return (
    <div>
      <NavBar setActivePage={setActivePage} />

      {activePage === "stock" && <StockAnalyzer />}
      {activePage === "sentiment" && <SentimentAnalyzer />}
      {activePage === "portfolio" && <PortfolioAnalyzer />}
    </div>
  );
}

export default App;
