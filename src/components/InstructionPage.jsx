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
          className="instructionbuton"
          onClick={() => {
            if (this.state.button === false) {
              this.setState({ button: true });
            } else {
              this.setState({ button: false });
            }
          }}
        >
          Introduction
        </button>

        {this.state.button && (
        <Animated
          animationIn="bounceIn"
          animationOut="fadeOutUpBig"
          animationInDuration={1400}
          isVisible
        >
          <section>
            <h1>Arena rules:</h1>

            <p>A champion versus a challenger both have a weapon of their choice, and finally the Arena Tormentor who will decide the last one.</p>
            <p>A champion one weapon a challenger one weapon and a weapon given by the Tormentor in order to balance the fight. </p>
            <p>
              victory = 3 points
              <br />
              {' '}
              Draw = 1 point
              <br />
              {' '}
              Defeat = 0 points
              {' '}
            </p>
          </section>
        </Animated>
        )}

      </>
    );
  }
}

export default InstructionPage;
