import React from 'react';
import './HomePage.css';

const HomePage = ({ start }) => (
  <div className="homepage">
    <h1 className="title">GitHub Fighters</h1>
    <h2 className="tagline">" become the next GitHub Champion! "</h2>
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
