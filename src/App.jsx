import React from 'react';
import Axios from 'axios';
import './App.css';
import SearchFighter from './components/SearchFighter';
import FighterCard from './components/FighterCard';

import FighterCard from './components/FighterCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchFighter />
        <FighterCard />
      </header>
    </div>

  setKeywords = (keywords) => this.setState({ keywords });

  search = () => {
    Axios.get(`https://api.github.com/users/${this.state.keywords}`)
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        this.setState({
          infos: data,
        });
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchFighter
            setKeywords={this.setKeywords}
            onSearch={this.search}
          />

          <FighterCard infos={this.state.infos} />
        </header>
      </div>
    );
  }
}

export default App;
