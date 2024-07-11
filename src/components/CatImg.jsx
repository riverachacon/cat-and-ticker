import { useState, useEffect } from "react";
import axios from "axios";

function CatImg() {
  const [catImg, setCatImg] = useState("");

  useEffect(() => {
    async function getCatImg() {
      try {
        const response = await axios.get(
          `https://api.thecatapi.com/v1/images/search`
        );
        const result = response.data;
        setCatImg(result[0].url);
      } catch (err) {
        console.log(`Error getting cat img: ${err}`);
      }
    }
    getCatImg();
  }, []);
  return (
    <>
      <div className="catDiv">
        <h2>Cat of the day</h2>
        <img src={catImg} alt="funny cat" />
      </div>
    </>
  );
}

export default CatImg;
