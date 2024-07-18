import { useState, useEffect } from "react";
import "./App.css";
import CatImg from "./CatImg";
import TickerInfo from "./TickerInfo";
import TickerNews from "./TickerNews";

function App() {
  const [ticker, setTicker] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    console.log(ticker); // log current ticker
    console.log(date);
  }, [ticker, date]);

  function searchTicker(newTicker) {
    setTicker(newTicker);
  }
  function handleDate(date) {
    let day = date.$D.toString().padStart(2, "0"); // single-digit days and months are prefixed with a zero
    let month = (date.$M + 1).toString().padStart(2, "0"); // +1 because months are 0-indexed
    let year = date.$y.toString();
    let convertedDate = `${year}-${month}-${day}`;
    setDate(convertedDate);
    // console.log(date);
  }
  return (
    <>
      <CatImg />
      <TickerInfo onDateSelected={handleDate} onSearchTicker={searchTicker} />
      <TickerNews onDate={date} onTicker={ticker} />
      {/**getting ticker from component */}
    </>
  );
}

export default App;
