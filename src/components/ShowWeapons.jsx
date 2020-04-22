import React from "react";

class ShowWeapons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectCommit: false,
            selectBranch: false,
            selectRepository: false,
            selectFollowers: false,
        };
    }

    render() {
        return (
            <div className="WeaponsContainer">
                <div className="WeaponsContainerTitle">
                    <em>Choose your weapons...</em>
                </div>
                <div className="WeaponsContainerIcons">
                    <div
                        className={
                            this.state.selectCommit ? "CommitIconSelected" : "CommitIcon"
                        }
                        onClick={event => {
                            const newSelected = !this.state.selectCommit;
                            this.setState({ selectCommit: newSelected });
                        }}
                    >
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="20" cy="20" r="20" fill="#0366D6" />
                            <path
                                d="M27.1638 18.125C26.3368 14.8959 23.4568 12.5 20 12.5C16.5441 12.5 13.6632 14.8959 12.8353 18.125H7V21.875H12.8353C13.6632 25.105 16.5441 27.5 20 27.5C23.4568 27.5 26.3368 25.105 27.1638 21.875H33V18.125H27.1638ZM20 23.75C17.9497 23.75 16.2857 22.0691 16.2857 20C16.2857 17.93 17.9497 16.25 20 16.25C22.0494 16.25 23.7143 17.93 23.7143 20C23.7143 22.0691 22.0494 23.75 20 23.75Z"
                                fill="black"
                            />
                        </svg>

                        <div className="IconLabel">Commit</div>
                    </div>
                    <div
                        className={
                            this.state.selectBranch ? "BranchIconSelected" : "BranchIcon"
                        }
                        onClick={event => {
                            const newSelected = !this.state.selectBranch;
                            this.setState({ selectBranch: newSelected });
                        }}
                    >
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="20" cy="20" r="20" fill="#D73A49" />
                            <path
                                d="M25.4 10.625C23.4031 10.625 21.8 12.2949 21.8 14.375C21.8 15.752 22.5312 16.9531 23.6 17.5977V18.125C23.6 20 21.8 21.875 20 21.875C18.5094 21.875 17.3281 22.1973 16.4 22.7246V13.8477C17.4688 13.2031 18.2 12.002 18.2 10.625C18.2 8.54492 16.5969 6.875 14.6 6.875C12.6031 6.875 11 8.54492 11 10.625C11 12.002 11.7312 13.2031 12.8 13.8477V26.123C11.7312 26.7676 11 27.9688 11 29.3457C11 31.4258 12.6031 33.0957 14.6 33.0957C16.5969 33.0957 18.2 31.4258 18.2 29.3457C18.2 28.3496 17.8344 27.4707 17.2437 26.7969C17.7781 26.123 18.6219 25.5957 20 25.5957C23.6 25.5957 27.2 21.8457 27.2 18.0957V17.5684C28.2687 16.9238 29 15.7227 29 14.3457C29 12.2656 27.3969 10.5957 25.4 10.5957V10.625ZM14.6 8.75C15.5844 8.75 16.4 9.59961 16.4 10.625C16.4 11.6504 15.5844 12.5 14.6 12.5C13.6156 12.5 12.8 11.6504 12.8 10.625C12.8 9.59961 13.6156 8.75 14.6 8.75ZM14.6 31.25C13.6156 31.25 12.8 30.4004 12.8 29.375C12.8 28.3496 13.6156 27.5 14.6 27.5C15.5844 27.5 16.4 28.3496 16.4 29.375C16.4 30.4004 15.5844 31.25 14.6 31.25ZM25.4 16.25C24.4156 16.25 23.6 15.4004 23.6 14.375C23.6 13.3496 24.4156 12.5 25.4 12.5C26.3844 12.5 27.2 13.3496 27.2 14.375C27.2 15.4004 26.3844 16.25 25.4 16.25Z"
                                fill="black"
                            />
                        </svg>

                        <div className="IconLabel">Branch</div>
                    </div>
                    <div
                        className={
                            this.state.selectRepository
                                ? "RepositoryIconSelected"
                                : "RepositoryIcon"
                        }
                        onClick={event => {
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

                        <div className="IconLabel">Repository</div>
                    </div>
                    <div
                        className={
                            this.state.selectFollowers
                                ? "FollowersIconSelected"
                                : "FollowersIcon"
                        }
                        onClick={event => {
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

                        <div className="IconLabel">Followers</div>
                    </div>

                </div>
            </div>
        );
    }
}


export default ShowWeapons;