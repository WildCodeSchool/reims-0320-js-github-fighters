import React from 'react';
import './InstructionPage.css';
import { Animated } from 'react-animated-css';

class InstructionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: false,
    };
  }

  render() {
    return (
      <>
        <button
          type="button"
          className="instructionbuton"
          onClick={() => {
            if (this.state.button === false) {
              this.setState({ button: true });
            } else {
              this.setState({ button: false });
            }
          }}
        >
          HELP
        </button>

        {this.state.button && (
        <Animated
          animationIn="bounceIn"
          animationOut="fadeOutUpBig"
          animationInDuration={1400}
          isVisible
        >
          <section>
            <h1>Arena rules :</h1>
            <p>Fighter versus challenger, both choose a weapon, and a weapon  is given by the "Tormentor" in order to balance the fight.</p>
            <div className="instruction-points">
              <div className="victory-points">
                Victory = 3 points
              </div>
              <div className="draw-points">
                Draw = 1 point
              </div>
              <div className="defeat-points">
                Defeat = 0 point
              </div>
            </div>
          </section>
        </Animated>
        )}

      </>
    );
  }
}

export default InstructionPage;
