import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [url, setUrl] = useState("https://i.imgflip.com/30b1gx.jpg");
  const [upperText, setUpperText] = useState("Your upper text here");
  const [lowerText, setLowerText] = useState("Your lower text here");

  function changeUrl() {
    const memesArray = memesData.data.memes;
    const totalMemes = memesArray.length;
    const randomMeme = Math.ceil(Math.random() * totalMemes);
    const randomPicUrl = memesArray[randomMeme].url;
    setUrl(randomPicUrl);
  }

  function setUpperText() {
    setUpperText();
  }

  function setLowerText() {
    setUpperText();
  }

  return (
    <div className="main">
      <div className="inputs">
        <div className="container">
          <div className="inputFields">
            <input
              type="text"
              id="name"
              name="firstText"
              placeholder="Upper text..."
            />
            <input
              type="text"
              id="name"
              name="secondText"
              placeholder="Down text..."
            />
          </div>
          <button className="generator" onClick={changeUrl}>
            Generate a new meme image
          </button>
        </div>
      </div>

      <div className="container">
        <div className="imgOutput">
          <img src={url} />
        </div>
      </div>
    </div>
  );
}
