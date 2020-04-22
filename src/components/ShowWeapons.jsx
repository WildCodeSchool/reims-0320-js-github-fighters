import React from "react";

class ShowWeapons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectCommit: false,
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

                </div>
            </div>
        );
    }
}


export default ShowWeapons;