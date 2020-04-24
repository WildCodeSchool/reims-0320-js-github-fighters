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
      keywords: null,
      infos: null
    };
    this.search = this.search.bind(this);
  }

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
