import React from 'react';
import './HomePage.css';
import { Animated } from 'react-animated-css';
import InstructionPage from './InstructionPage';

const HomePage = ({ start }) => (

  <Animated
    animationIn="slideInUp"
    animationOut="fadeOutUpBig"
    animationInDuration={1400}
    isVisible
  >
    <div className="homepage">
      <h1 className="title">GitHub Fighters</h1>
      <h2 className="tagline">" become the next GitHub Champion! "</h2>
      <InstructionPage />
      <button
        className="buttonstart"
        onClick={start}
        type="button"
      >
        START
      </button>
    </div>
  </Animated>


);

export default HomePage;
