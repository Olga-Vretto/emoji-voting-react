import React, { useState } from 'react';

import Results from '../EmojiBox/Results';

import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";

import "./Main.css";

function Main() {
  const [emojis, setEmojis] = useState([
    { id: 'emoji1', src: img1, count: 0 },
    { id: 'emoji2', src: img2, count: 0 },
    { id: 'emoji3', src: img3, count: 0 },
    { id: 'emoji4', src: img4, count: 0 },
    { id: 'emoji5', src: img5, count: 0 },
  ]);
  const [results, setResults] = useState(false)

  const handleClick = (id) => {
    const newEmojis = [...emojis];
    newEmojis[id].count++;
    setEmojis(newEmojis);
  };

  const getMaxResult = () => {
    const maxResult = emojis.reduce((maxNum, currentNum) => {
      return currentNum.count > maxNum.count ? currentNum : maxNum;
    });
    return maxResult.count ? maxResult : null;
  };

  return (
    <>
      <h1 className="title">Vote for the best smile!</h1>
      <div className="emoji-box">
        {emojis.map((emoji, id) => (
          <button key={emoji.id} className="emoji" onClick={() => handleClick(id)}>
            <img className="img" src={emoji.src} alt="emoji" />
            <h2 className="number">{emoji.count}</h2>
          </button>
        ))}
      </div>
      <Results
        showResults={results}
        setShowResults={setResults}
        maxResult={getMaxResult()}
      />
      <p className="txt">Thanks for voting!&#128525;</p>
    </>
  );
}
export default Main;




