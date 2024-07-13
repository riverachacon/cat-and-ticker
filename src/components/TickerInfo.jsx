import { useState } from "react";
import "./tickerInfo.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function TickerInfo(props) {
  const [ticker, setTicker] = useState("");

  function handleInput(e) {
    const { value } = e.target; // name (name of input) or value (input of user)
    // console.log(value);
    setTicker(value);
  }
  function handleSubmit(e) {
    props.onSearchTicker(ticker);
    // console.log(ticker);
    e.preventDefault();
    setTicker(""); // clear input
  }

  return (
    <>
      <div className="ticker-input">
        <h2>Search your favorite stock</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {" "}
          <form onSubmit={handleSubmit}>
            <input
              value={ticker}
              style={{ width: "10rem" }}
              type="text"
              name="ticker"
              placeholder="Search Ticker Ex: NVDA"
              onChange={handleInput}
            />
            <DatePicker
              label={'"month", "day" and "year"'}
              views={["year", "month", "day"]}
            />
            <button type="submit">Search</button>
          </form>
        </LocalizationProvider>
      </div>
    </>
  );
}

export default TickerInfo;
