import React from 'react';
import './Steps.css'

const Steps = () => (
  <div className="steps">
    <div className="steps-title">How to play</div>

    <ul className="steps-list">
        <li><strong>Step : 1 </strong>Type a GitHub username in both fields and click 'Search'.</li>
        <li><strong>Step : 2 </strong>Choose a weapon for your fighter and your challenger.</li>
        <li><strong>Step : 3 </strong>Click on the 'START' button to start the fight, a random weapon is chosen to make it fair.</li>
    </ul>

  </div>
);

export default Steps;
