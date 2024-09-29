import { useState } from "react";
import "./tickerInfo.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function TickerInfo(props) {
  const [ticker, setTicker] = useState("");
  const [date, setDate] = useState(null);

  function handleInput(e) {
    const { value } = e.target; // name (name of input) or value (input of user)
    // console.log(value);
    setTicker(value);
  }
  function handleDate(date) {
    // console.log(date);
    setDate(date);
  }
  function handleSubmit(e) {
    props.onSearchTicker(ticker);
    console.log(ticker);
    props.onDateSelected(date);
    e.preventDefault(); // for page not to reload when submitting info
    setTicker(""); // clear input
  }

  return (
    <>
      <div className="ticker-input">
        <h2>Search your favorite stock</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
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
              label={"Select date"}
              value={date}
              onChange={handleDate}
              sx={{
                "& .MuiInputBase-root": {
                  color: "#EEE2DE", // Change text color
                  borderColor: "blue", // Change border color
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#8ecae6", // Change border color of the fieldset
                  },
                  "&:hover fieldset": {
                    borderColor: "#9BEC00", // Change border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#8ecae6", // Change border color when focused
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#EEE2DE", // Change label color
                },
              }}
            />
            <button type="submit">Search</button>
          </form>
        </LocalizationProvider>
      </div>
    </>
  );
}

export default TickerInfo;
