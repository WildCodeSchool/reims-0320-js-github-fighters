import React from 'react';
import Axios from 'axios';
import './App.css';
import { Animated } from 'react-animated-css';
import SearchFighter from './components/SearchFighter';
import FighterCard from './components/FighterCard';
import Start from './components/Start';
import ShowWeapons from './components/ShowWeapons';
import HomePage from './components/HomePage';
import AppContext from './context/AppContext';

import Steps from './components/Steps';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homebouton: true,
      keywordsFighter: null,
      infosFighter: null,
      keywordsChallenger: null,
      infosChallenger: null,
      fighter: {
        selectGists: false,
        selectFollowing: false,
        selectRepository: false,
        selectFollowers: false,
      },
      challenger: {
        selectGists: false,
        selectFollowing: false,
        selectRepository: false,
        selectFollowers: false,
      },
      random: {
        gists: false,
        repos: false,
        followers: false,
        following: false,
        number: null,
      },
    };
    this.searchFighter = this.searchFighter.bind(this);
    this.searchChallenger = this.searchChallenger.bind(this);
  }

  fight = () => {
    const number = Math.floor(
      Math.random() * 4,
    );

    const newState = {
      gists: false,
      repos: false,
      followers: false,
      following: false,
      number,
    };

    switch (number) {
      case 0:
        newState.gists = true;
        break;
      case 1:
        newState.repos = true;
        break;
      case 2:
        newState.followers = true;
        break;
      case 3:
        newState.following = true;
        break;
      default:
    }

    this.setState({ random: newState });
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

  getFollowingFigther = () => this.state.infosFighter.following;

  getGistsFighter = () => this.state.infosFighter.public_gists;

  getRepositoryChallenger = () => this.state.infosChallenger.public_repos;

  getFollowersChallenger = () => this.state.infosChallenger.followers;

  getFollowingChallenger = () => this.state.infosChallenger.following;

  getGistsChallenger = () => this.state.infosChallenger.public_gists;


  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          selectWeapon: (player, newState) => this.setState({ [player]: newState }),
        }}
      >
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
                <Animated
                  animationIn="bounceInLeft"
                  animationOut="fadeOut"
                  animationInDuration={1000}
                  animationOutDuration={1000}
                  isVisible
                >
                  <SearchFighter
                    label="Fighter :"
                    setKeywords={this.setKeywordsFighter}
                    onSearch={this.searchFighter}
                  />
                </Animated>

                {this.state.infosFighter && (
                <>
                  <Animated
                    animationIn="bounceInLeft"
                    animationOut="fadeOut"
                    animationInDuration={1000}
                    animationOutDuration={1000}
                    isVisible
                  >
                    <FighterCard infos={this.state.infosFighter} />
                    <ShowWeapons player="fighter" />
                  </Animated>
                </>
                )}
              </div>
              {this.state.infosFighter && this.state.infosChallenger && (
              <>
                <Animated
                  animationIn="bounceInDown"
                  animationOut="fadeOut"
                  animationInDuration={3000}
                  animationOutDuration={1500}
                  isVisible
                >
                  <div className="random-weapons">
                    <span className="versus">
                      {this.state.infosFighter.login}
                      {' '}
                      VS
                      {' '}
                      {this.state.infosChallenger.login}
                    </span>
                    <Start onClick={this.fight} />
                  </div>
                </Animated>
              </>
              )}
              <div className="second-fighter">
                <Animated
                  animationIn="bounceInRight"
                  animationOut="fadeOut"
                  animationInDuration={1000}
                  animationOutDuration={1000}
                  isVisible
                >
                  <SearchFighter
                    label="Challenger :"
                    setKeywords={this.setKeywordsChallenger}
                    onSearch={this.searchChallenger}
                  />
                </Animated>

                {this.state.infosChallenger && (
                  <Animated
                    animationIn="bounceInRight"
                    animationOut="fadeOut"
                    animationInDuration={1000}
                    animationOutDuration={1000}
                    isVisible
                  >

                    <FighterCard infos={this.state.infosChallenger} />
                    <ShowWeapons player="challenger" />
                  </Animated>
                )}
              </div>

            </div>

          )}
          <Steps />
        </header>
      </div>
      </AppContext.Provider>
    );
  }
}


export default App;
