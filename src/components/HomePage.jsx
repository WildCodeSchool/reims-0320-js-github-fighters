import React from 'react';
import './HomePage.css';

const HomePage = ({ start }) => (
  <div className="homepage">
    <img src="https://files.slack.com/files-pri/T6SG2QGG2-F011XH985QQ/fond-diapo-2.png" alt="fondgithub" />
    <h1 className="title">GitHub Fighter</h1>
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
