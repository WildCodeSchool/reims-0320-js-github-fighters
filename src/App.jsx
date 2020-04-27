import React from 'react';
import Axios from 'axios';
import './App.css';
import SearchFighter from './components/SearchFighter';
import FighterCard from './components/FighterCard';

import ShowWeapons from './components/ShowWeapons';
import HomePage from './components/HomePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywordsFighter: null,
      infosFighter: null,
      keywordsChallenger: null,
      infosChallenger: null
    };
    this.searchFighter = this.searchFighter.bind(this);
    this.searchChallenger = this.searchChallenger.bind(this);
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

  getRepositoryFighter = () => this.state.infosFighter.public_repos;

  getFollowersFighter = () => this.state.infosFighter.followers;

  getRepositoryChallenger = () => this.state.infosChallenger.public_repos;

  getFollowersChallenger = () => this.state.infosChallenger.followers;

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <div className="first-fighter">
              <HomePage />
              <SearchFighter
              setKeywords={this.setKeywordsFighter}
              onSearch={this.searchFighter}
            />

            {this.state.infosFighter && (
              <>
                <FighterCard infos={this.state.infosFighter} />
                <ShowWeapons
                  getRepository={this.getRepositoryFighter}
                  getFollowers={this.getFollowersFighter}
                />
              </>
            )}
          </div>
          <div className="second-fighter">
            <SearchFighter
              setKeywords={this.setKeywordsChallenger}
              onSearch={this.searchChallenger}
            />

            {this.state.infosChallenger && (
              <>
                <FighterCard infos={this.state.infosChallenger} />
                <ShowWeapons
                  getRepository={this.getRepositoryChallenger}
                  getFollowers={this.getFollowersChallenger}
                />
              </>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
