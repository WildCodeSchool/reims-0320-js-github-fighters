import React from 'react';
import Axios from 'axios';
import './App.css';
import { Animated } from 'react-animated-css';
import SearchFighter from './components/SearchFighter';
import FighterCard from './components/FighterCard';
import Start from './components/Start';
import ShowWeapons from './components/ShowWeapons';
import HomePage from './components/HomePage';
import Result from './components/Result';
import AppContext from './context/AppContext';
import Steps from './components/Steps';
import Footer from './components/Footer';
import Description from './components/Description';


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
        selectGists: false,
        selectFollowing: false,
        selectRepository: false,
        selectFollowers: false,
        footer: false,

      },
      result: null,
    };
    this.searchFighter = this.searchFighter.bind(this);
    this.searchChallenger = this.searchChallenger.bind(this);
  }

  fight = () => {
    const number = Math.floor(
      Math.random() * 4,
    );

    const newState = {

      selectGists: false,
      selectFollowing: false,
      selectRepository: false,
      selectFollowers: false,
      footer: false,
    };

    switch (number) {
      case 0:
        newState.selectGists = true;
        newState.footer = true;
        break;
      case 1:
        newState.selectRepository = true;
        newState.footer = true;
        break;
      case 2:
        newState.selectFollowers = true;
        newState.footer = true;
        break;
      case 3:
        newState.selectFollowing = true;
        newState.footer = true;
        break;
      default:
    }

    const round = (data) => {
      let difference = 0;

      if (data.selectFollowers) {
        difference = this.getFollowersFighter() - this.getFollowersChallenger();
      }
      if (data.selectFollowing) {
        difference = this.getFollowingFighter() - this.getFollowingChallenger();
      }
      if (data.selectGists) {
        difference = this.getGistsFighter() - this.getGistsChallenger();
      }
      if (data.selectRepository) {
        difference = this.getRepositoryFighter() - this.getRepositoryChallenger();
      }

      if (difference > 0) {
        return {
          fighterScore: 3,
          challengerScore: 0,
        };
      } if (difference < 0) {
        return {
          fighterScore: 0,
          challengerScore: 3,
        };
      }
      return {
        fighterScore: 1,
        challengerScore: 1,
      };
    };

    const round1 = round(this.state.fighter);
    const round2 = round(this.state.challenger);
    const round3 = round(newState);

    const result = {
      round1F: round1.fighterScore,
      round1C: round1.challengerScore,
      round2F: round2.fighterScore,
      round2C: round2.challengerScore,
      round3F: round3.fighterScore,
      round3C: round1.challengerScore,
      fighterScore: round1.fighterScore + round2.fighterScore + round3.fighterScore,
      challengerScore: round1.challengerScore + round2.challengerScore + round3.challengerScore,
    };

    this.setState({ random: newState, result });
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

   refreshPage= () => {
     window.location.reload(false);
   }

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

  getFollowingFighter = () => this.state.infosFighter.following;

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

        {this.state.random.footer !== true
        && (
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
        )}
        {this.state.random.footer
        && (
        <div className="result">
          <div className="show">
            <FighterCard infos={this.state.infosFighter} />
            <Description
              player="fighter"
              getFollowers={this.getFollowersFighter}
              getGists={this.getGistsFighter}
              getFollowing={this.getFollowingFighter}
              getRepository={this.getRepositoryFighter}
            />
          </div>
          <div className="expli">
            <div>
              <Result />
            </div>
            <button
              onClick={this.refreshPage}
              className="restart"
              type="button"
            >
              {' '}
              Restart
              {' '}
            </button>
          </div>
          <div className="show">
            <FighterCard infos={this.state.infosChallenger} />
            <Description
              player="challenger"
              getFollowers={this.getFollowersChallenger}
              getGists={this.getGistsChallenger}
              getFollowing={this.getFollowingChallenger}
              getRepository={this.getRepositoryChallenger}
            />
          </div>
          <Footer />
        </div>
        ) }

      </AppContext.Provider>
    );
  }
}


export default App;
