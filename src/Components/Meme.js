import React, { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "Try to be funny",
    bottomText: ".. and add your text",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  function getMemeImage() {
    const memesArray = allMemes.data.memes;
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

  const [allMemes, setAllMemes] = useState([]);

  useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data));
  }, []);

  // ----------------------------------------

  return (
    <div className="main">
      <div className="inputs">
        <div className="container">
          <div className="inputFields">
            <input
              type="text"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
            <input
              type="text"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </div>
          <button className="generator" onClick={getMemeImage}>
            Generate a new meme image
          </button>
        </div>
      </div>

      <div className="container">
        <div className="imgOutput">
          <span className="imgUpperText">{meme.topText}</span>
          <span className="imgLowerText">{meme.bottomText}</span>
          <img src={meme.randomImage} />
        </div>
      </div>
    </div>
  );
}
