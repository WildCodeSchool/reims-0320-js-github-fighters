import React from 'react';
import './HomePage.css';

const HomePage = ({ start }) => (
  <div>
    <h1 className="title">GitHub Fighter</h1>
    <h2 className="tagline">"become the next GitHub Champion!"</h2>
    <button
      onClick={start}
      type="button"
    >
      start
    </button>
  </div>
);

export default HomePage;
