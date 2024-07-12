import { useState, useEffect } from "react";
import "./App.css";
import CatImg from "./CatImg";
import TickerInfo from "./TickerInfo";
import TickerNews from "./TickerNews";

function App() {
  const [ticker, setTicker] = useState("");
  useEffect(() => {
    console.log(ticker); // log current ticker
  }, [ticker]);

  function searchTicker(newTicker) {
    setTicker(newTicker);
  }
  return (
    <>
      <CatImg />
      <TickerInfo onSearchTicker={searchTicker} />
      <TickerNews onticker={ticker} />
      {/**getting ticker from component */}
    </>
  );
}

export default App;
