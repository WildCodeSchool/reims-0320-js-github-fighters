import React from 'react';
import './HomePage.css';
import InstructionPage from './InstructionPage';

const HomePage = ({ start }) => (

  <div className="homepage">
    <h1 className="title">GitHub Fighters</h1>
    <h2 className="tagline">&ldquo; become the next GitHub Champion! &ldquo;</h2>
    <InstructionPage />
    <button
      className="buttonstart"
      onClick={start}
      type="button"
    >
      START
    </button>
  </div>


);

export default HomePage;
