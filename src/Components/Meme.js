import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  // ------ meme states and setStates ------

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function getMemeImage() {
    const memesArray = allMemeImage.data.memes;
    const totalMemes = memesArray.length;
    const randomMeme = Math.ceil(Math.random() * totalMemes);
    const randomPicUrl = memesArray[randomMeme].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: randomPicUrl,
      };
    });
  }

  const [allMemeImage, setAllMemeImage] = useState(memesData);

  // ----------------------------------------

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
          <button className="generator" onClick={getMemeImage}>
            Generate a new meme image
          </button>
        </div>
      </div>

      <div className="container">
        <div className="imgOutput">
          <span className="imgUpperText"></span>
          <img src={meme.randomImage} />
          <span className="imgLowerText"></span>
        </div>
      </div>
    </div>
  );
}
