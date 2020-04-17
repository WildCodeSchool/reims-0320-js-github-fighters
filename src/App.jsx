import React from 'react';
import './App.css';
import SearchFighter from './components/SearchFighter';

import FighterCard from './components/FighterCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchFighter />
        <FighterCard />
      </header>
    </div>

  );
}

export default App;
