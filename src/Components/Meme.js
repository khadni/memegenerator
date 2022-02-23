import React from "react";
import memesData from "../memesData";

export default function Meme() {
  function handleClick() {
    console.log("hello ca va");
  }

  function randomPick() {
    const memesArray = memesData.data.memes;
    const totalMemes = memesArray.length;
    const randomMeme = Math.ceil(Math.random * totalMemes);
    console.log(randomMeme);
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
              required
            />
            <input
              type="text"
              id="name"
              name="secondText"
              placeholder="Down text..."
              required
            />
          </div>

          <button className="generator" onClick={randomPick}>
            Generate new meme image
          </button>
        </div>
      </div>

      <div className="container">
        <div className="imgOutput">
          <img src="http://www.slate.fr/sites/default/files/styles/1200x680/public/oq7hs.jpg" />
        </div>
      </div>
    </div>
  );
}
