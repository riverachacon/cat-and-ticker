import { useState, useEffect } from "react";
import axios from "axios";

function TickerNews(props) {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(true);
  const [error, setError] = useState(null);
  const [news, setNews] = useState(null);

  const apiKey = "qbzZHRmwbfhcv8UZVoZNfQvI6KRlsLsy";
  const ticker = props.onTicker.toUpperCase();
  const date = props.onDate;
  const chartLink = `https://www.tradingview.com/chart/?symbol=%3A${ticker}`;

  useEffect(() => {
    if (ticker && date) {
      async function getTickerNews() {
        try {
          setSearch(true);
          const response = await axios.get(
            `https://api.polygon.io/v1/open-close/${ticker}/${date}?adjusted=true&apiKey=${apiKey}`
          );
          const response2 = await axios.get(
            `https://api.polygon.io/v2/reference/news?ticker=${ticker}&limit=3&apiKey=${apiKey}`
          );
          setData(response.data);
          setNews(response2.data.results);
          setSearch(false);
          console.log(ticker, date);
        } catch (err) {
          console.log(err);

          setError(err);
          setSearch(false);
        }
      }
      getTickerNews();
    }
  }, [ticker, date]); // update ticker and date when they change
  useEffect(() => {
    if (news) {
      news.map((i) => {
        // console.log(i.title);
      });
    }
  }, [news]);

  if (search) {
    return <h2>Please search Ticker</h2>;
  }

  if (error) {
    return <div>Error fetching API: {error.message}</div>;
  }

  return (
    <div className="ticker-info">
      <div className="ticker-data">
        <h3>Details for: {date}</h3>
        <ul>
          <li>Open market price: {data.open}</li>
          <li>High of the day: {data.high}</li>
          <li>Low of the day: {data.low}</li>
          <li>Closing price: {data.close}</li>
          <li>Volume: {data.volume}</li>
        </ul>
      </div>
      <div className="chartLink">
        <a
          style={{ fontSize: "2.5rem" }}
          className="chart"
          href={chartLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live chart
        </a>
      </div>

      <h2 style={{ fontSize: "3rem", textAlign: "center" }}>Latest News</h2>
      <div className="tickerNews-container">
        {news.map((i) => {
          return (
            <div className="ticker-news" key={i.id}>
              <h4 style={{ fontWeight: "800" }}>{i.title}</h4>
              <a href={i.article_url} target="_blank" rel="noopener noreferrer">
                <img
                  src={i.image_url}
                  className="news-image"
                  alt="news image"
                />
              </a>
              <p style={{ width: "75%" }}>{i.description}</p>
              <a href={i.article_url} target="_blank" rel="noopener noreferrer">
                More
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TickerNews;
