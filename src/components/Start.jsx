import React from 'react';


class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gists: 0,
      repos: 0,
      followers: 0,
      following: 0,
      number: null,
    };
  }


  render() {
    return (
      <button
        onClick={() => {
          const number = Math.floor(
            Math.random() * 4,
          );

          const newState = {
            gists: 0,
            repos: 0,
            followers: 0,
            following: 0,
            number,
          };

          switch (number) {
            case 0:
              newState.gists = 1;
              break;
            case 1:
              newState.repos = 1;
              break;
            case 2:
              newState.followers = 1;
              break;
            case 3:
              newState.following = 1;
              break;
            default:
          }

          this.setState(newState);
        }}
        type="button"
      >
        start
      </button>
    );
  }
}


export default Start;
