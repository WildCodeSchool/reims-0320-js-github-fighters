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
      homebouton: true,
      keywordsFighter: null,
      infosFighter: null,
      keywordsChallenger: null,
      infosChallenger: null,
    };
    this.searchFighter = this.searchFighter.bind(this);
    this.searchChallenger = this.searchChallenger.bind(this);
  }

  setKeywordsFighter = (keywordsFighter) => this.setState({ keywordsFighter });

  searchFighter = () => {
    Axios.get(`https://api.github.com/users/${this.state.keywordsFighter}`)
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        this.setState({
          infosFighter: data,
        });
      });
  };

  setKeywordsChallenger = (keywordsChallenger) => this.setState({ keywordsChallenger });

  searchChallenger = () => {
    Axios.get(`https://api.github.com/users/${this.state.keywordsChallenger}`)
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        this.setState({
          infosChallenger: data,
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
          {this.state.homebouton ? (
            <HomePage start={() => {
              // mise a jour du state en fonction de sa valeur presédente
              this.setState((prevState) => ({ homebouton: !prevState.homebouton }));
            }}
            />
          ) : (
              <div className="Fighter">
                <div className="first-fighter">
                  <SearchFighter
                    label="Fighter :"
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
                {this.state.infosChallenger && (
                  <>
                    <div className="random-weapons">
                      <span className="versus">{this.state.infosFighter.login} VS {this.state.infosChallenger.login}</span>
                      <ShowWeapons
                        getRepository={this.getRepositoryChallenger}
                        getFollowers={this.getFollowersChallenger}
                      />
                    </div>
                  </>
                )}
                <div className="second-fighter">
                  <SearchFighter
                    label="Challenger :"
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
              </div>
            )}
        </header>
      </div>
    );
  }
}

export default App;
