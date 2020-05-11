import React from 'react';
import './Start.css';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gists: false,
      repos: false,
      followers: false,
      following: false,
      number: null,
    };
  }


  render() {
    return (
      <>
        <div className="weaponsContainer">
          <div className="weaponsContainerTitle">
            <em>Random weapon chosen...</em>
          </div>
          <div className="weaponsContainerIcons">
            <div
              className={
                            this.state.gists ? 'gistsIconSelected' : 'gistsIcon'
                        }
              onClick={(event) => {
                const newSelected = !this.state.selectGists;
                this.setState({ selectGists: newSelected });
              }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#0366D6" />
                <path fillRule="evenodd" clipRule="evenodd" d="M22.5 15.7692L26.6667 20L22.5 24.2308L21.25 22.9615L24.1667 20L21.25 17.0385L22.5 15.7692ZM17.5 15.7692L13.3333 20L17.5 24.2308L18.75 22.9615L15.8333 20L18.75 17.0385L17.5 15.7692ZM10 29.3077V10.6923C10 9.76154 10.75 9 11.6667 9H28.3333C29.25 9 30 9.76154 30 10.6923V29.3077C30 30.2385 29.25 31 28.3333 31H11.6667C10.75 31 10 30.2385 10 29.3077ZM11.6667 29.3077H28.3333V10.6923H11.6667V29.3077Z" fill="black" />
              </svg>

              <div className="iconLabel">Gists</div>
            </div>
            <div
              className={
                            this.state.following ? 'followingIconSelected' : 'followingIcon'
                        }
              onClick={(event) => {
                const newSelected = !this.state.selectFollowing;
                this.setState({ selectFollowing: newSelected });
              }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#D73A49" />
                <path fillRule="evenodd" clipRule="evenodd" d="M30 29.3604C30 29.7953 29.8248 30.2123 29.5128 30.5198C29.2009 30.8273 28.7778 31 28.3367 31H11.6683C11.4492 31.0002 11.2321 30.9578 11.0296 30.8753C10.8271 30.7927 10.6431 30.6716 10.4882 30.5188C10.3332 30.3661 10.2103 30.1847 10.1265 29.9851C10.0428 29.7855 9.99978 29.5715 10 29.3555V27.7143C10 23.3886 16.6667 21.1429 16.6667 21.1429C16.6667 21.1429 17.0483 20.4709 16.6667 19.5C15.265 18.4814 15.0933 16.8879 15 12.9286C15.2883 8.96436 18.1117 8 20 8C21.8883 8 24.7117 8.96271 25 12.9286C24.9067 16.8879 24.735 18.4814 23.3333 19.5C22.9517 20.4693 23.3333 21.1429 23.3333 21.1429C23.3333 21.1429 30 23.3886 30 27.7143V29.3604Z" fill="black" />
              </svg>

              <div className="iconLabel">Following</div>
            </div>
            <div
              className={
                            this.state.repos
                              ? 'repositoryIconSelected'
                              : 'repositoryIcon'
                        }
              onClick={(event) => {
                const newSelected = !this.state.selectRepository;
                this.setState({ selectRepository: newSelected });
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#35A744" />
                <path
                  d="M18.3333 13.5H16.6667V15.125H18.3333V13.5ZM18.3333 10.25H16.6667V11.875H18.3333V10.25ZM28.3333 7C27.5 7 12.5 7 11.6667 7C10.8333 7 10 7.8125 10 8.625C10 9.4375 10 27.3125 10 28.125C10 28.9375 10.8333 29.75 11.6667 29.75C12.5 29.75 15 29.75 15 29.75V33L17.5 30.5625L20 33V29.75C20 29.75 27.5 29.75 28.3333 29.75C29.1667 29.75 30 28.9375 30 28.125C30 27.3125 30 9.4375 30 8.625C30 7.8125 29.1667 7 28.3333 7ZM28.3333 27.3125C28.3333 27.7188 27.9427 28.125 27.5 28.125C27.0573 28.125 20 28.125 20 28.125V26.5H15V28.125C15 28.125 12.9427 28.125 12.5 28.125C12.0573 28.125 11.6667 27.6934 11.6667 27.3125C11.6667 26.9316 11.6667 24.875 11.6667 24.875H28.3333C28.3333 24.875 28.3333 26.9062 28.3333 27.3125ZM28.3333 23.25H15V8.625H28.3594L28.3333 23.25ZM18.3333 20H16.6667V21.625H18.3333V20ZM18.3333 16.75H16.6667V18.375H18.3333V16.75Z"
                  fill="black"
                />
              </svg>

              <div className="iconLabel">Repository</div>
            </div>
            <div
              className={
                            this.state.followers
                              ? 'followersIconSelected'
                              : 'followersIcon'
                        }
              onClick={(event) => {
                const newSelected = !this.state.selectFollowers;
                this.setState({ selectFollowers: newSelected });
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#FDD33D" />
                <path
                  d="M15.3 20.4375C17.3311 20.4375 18.975 18.774 18.975 16.7188C18.975 14.6635 17.3311 13 15.3 13C13.2689 13 11.625 14.6635 11.625 16.7188C11.625 18.774 13.2689 20.4375 15.3 20.4375ZM17.82 21.5H17.5477C16.8652 21.832 16.1072 22.0312 15.3 22.0312C14.4928 22.0312 13.7381 21.832 13.0523 21.5H12.78C10.6931 21.5 9 23.2133 9 25.325V26.2812C9 27.1611 9.70547 27.875 10.575 27.875H20.025C20.8945 27.875 21.6 27.1611 21.6 26.2812V25.325C21.6 23.2133 19.9069 21.5 17.82 21.5ZM24.75 20.4375C26.4891 20.4375 27.9 19.0098 27.9 17.25C27.9 15.4902 26.4891 14.0625 24.75 14.0625C23.0109 14.0625 21.6 15.4902 21.6 17.25C21.6 19.0098 23.0109 20.4375 24.75 20.4375ZM26.325 21.5H26.2003C25.7442 21.6594 25.2619 21.7656 24.75 21.7656C24.2381 21.7656 23.7558 21.6594 23.2997 21.5H23.175C22.5056 21.5 21.8887 21.6959 21.3473 22.0113C22.148 22.8846 22.65 24.0434 22.65 25.325V26.6C22.65 26.673 22.6336 26.7428 22.6303 26.8125H28.425C29.2945 26.8125 30 26.0986 30 25.2188C30 23.1635 28.3561 21.5 26.325 21.5Z"
                  fill="black"
                />
              </svg>

              <div className="iconLabel">Followers</div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
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

            this.setState(newState);
          }}
          type="button"
        >
          start
        </button>
      </>
    );
  }
}


export default Start;
