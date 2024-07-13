import { useState, useEffect } from "react";
import axios from "axios";

function TickerNews(props) {
  const apiKey = "LHfg34zjuYdLNNX2bSFxh3K96vPeDLWy";
  const ticker = props.onTicker;
  useEffect(() => {
    async function getTickerNews() {
      try {
        const response = await axiost.get("");
      } catch (err) {
        console.log("Error fetching news API: ", err);
      }
    }
  });
  return (
    <>
      <div
        style={{ display: ticker ? "block" : "none" }}
        className="ticker-news"
      >
        <h2>Latest News</h2>
      </div>
    </>
  );
}

export default TickerNews;
