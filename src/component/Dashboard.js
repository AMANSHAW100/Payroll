import React, { useState, useEffect } from "react";
import '../App.css';
import sampleImage from '../image/dashimage.jpg';
import sampleImage1 from '../image/business.avif';
import sampleImage2 from '../image/global.jpg';

function Dashboard() {
  const words = ['hybrid', 'modern'];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 150); // Delay per character
      return () => clearTimeout(timeout);
    } else {
      // Pause before switching to the next word
      const pause = setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setCharIndex(0);
        setDisplayedText('');
      }, 1500); // Delay after full word appears
      return () => clearTimeout(pause);
    }
  }, [charIndex, wordIndex, words]);

  return (
    <div className="landing-container">
      <h1>
        Time tracking software for <br />
        the <span className="dynamic-text">{displayedText}</span> workforce
      </h1>
      <p className="subtext">
        Transform outdated payroll practices and build a better workplace for your business with vauras Payroll.
      </p>

      <div className="button-group">
        <button className="primary-btn">Try For Free</button>
        <button className="secondary-btn">Request Demo</button>
      </div>

      <div className="image-group">
        <div className="image-container1">
          <img src={sampleImage1} alt="Sample" className="dashboard-image1" />
        </div>
        <div className="image-container">
          <img src={sampleImage} alt="Sample" className="dashboard-image" />
        </div>
        <div className="image-container2">
          <img src={sampleImage2} alt="Sample" className="dashboard-image2" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
