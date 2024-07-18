import { useState, useEffect } from "react";
import axios from "axios";

function TickerNews(props) {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "LHfg34zjuYdLNNX2bSFxh3K96vPeDLWy";
  const ticker = props.onTicker.toUpperCase();
  const date = props.onDate;

  useEffect(() => {
    if (ticker && date) {
      async function getTickerNews() {
        try {
          setSearch(true);
          const response = await axios.get(
            `https://api.polygon.io/v1/open-close/${ticker}/${date}?adjusted=true&apiKey=${apiKey}`
          );
          setData(response.data);
          setSearch(false);
        } catch (err) {
          setError(err);
          setSearch(false);
        }
      }
      getTickerNews();
    }
  }, [ticker, date]); // update ticker and date when they change

  if (search) {
    return <h2>Please search Ticker</h2>;
  }

  if (error) {
    return <div>Error fetching news API: {error.message}</div>;
  }

  return (
    <div className="ticker-info">
      <h3>Details for: {date}</h3>
      <ul>
        <li>Open market price: {data.open}</li>
        <li>High of the day: {data.high}</li>
        <li>Low of the day: {data.low}</li>
        <li>Closing price: {data.close}</li>
        <li>Volume: {data.volume}</li>
      </ul>
      <div className="ticker-news">
        <h2>Latest News</h2>
      </div>
    </div>
  );
}

export default TickerNews;
