import React from 'react';
import Axios from 'axios';
import './App.css';
import SearchFighter from './components/SearchFighter';
import FighterCard from './components/FighterCard';

import ShowWeapons from './components/ShowWeapons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywordsFighter: null,
      infosFighter: null,
      keywordsChallenger: null,
      infosChallenger: null
    };
    this.search = this.search.bind(this);
  }

  setKeywordsFighter = keywordsFighter => this.setState({ keywordsFighter });

  searchFighter = () => {
    Axios.get(`https://api.github.com/users/${this.state.keywordsFighter}`)
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          infosFighter: data
        });
      });
  };

  setKeywordsChallenger = keywordsChallenger =>
    this.setState({ keywordsChallenger });

  searchChallenger = () => {
    Axios.get(`https://api.github.com/users/${this.state.keywordsChallenger}`)
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          infosChallenger: data
        });
      });
  };

  getRepository=() => this.state.infos.public_repos;

  getFollowers=() => this.state.infos.followers;


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchFighter
            setKeywords={this.setKeywords}
            onSearch={this.search}
          />
          {this.state.infos && (
            <>
              <FighterCard infos={this.state.infos} />
              <ShowWeapons
                getRepository={this.getRepository}
                getFollowers={this.getFollowers}
              />
            </>
          )}
        </header>
      </div>
    );
  }
}

export default App;
