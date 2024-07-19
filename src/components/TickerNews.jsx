import { useState, useEffect } from "react";
import axios from "axios";

function TickerNews(props) {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(true);
  const [error, setError] = useState(null);
  const [news, setNews] = useState(null);

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
          const response2 = await axios.get(
            `https://api.polygon.io/v2/reference/news?ticker=${ticker}&limit=3&apiKey=${apiKey}`
          );
          setData(response.data);
          setNews(response2.data.results);
          setSearch(false);
          console.log(ticker, date);
        } catch (err) {
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
      <h2>Latest News</h2>
      {news.map((i) => {
        return (
          <div className="ticker-news" key={i.id}>
            <h4>{i.title}</h4>
            <a href={i.article_url}>
              <img src={i.image_url} alt="news image" />
            </a>
            <p>{i.description}</p>
            <a href={i.article_url}>More</a>
          </div>
        );
      })}
    </div>
  );
}

export default TickerNews;
