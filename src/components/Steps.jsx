import React from 'react';
import './Steps.css';

const Steps = () => (
  <div className="steps">
    <div className="steps-title">How to play ?</div>

    <ul className="steps-list">
      <li className="steps-li">
        <strong className="strong-li">Step : 1 </strong>
        Type a GitHub username in both fields and click &apos;Search&apos;.
      </li>
      <li className="steps-li">
        <strong className="strong-li">Step : 2 </strong>
        Choose a weapon for your fighter and your challenger.
      </li>
      <li className="steps-li">
        <strong className="strong-li">Step : 3 </strong>
        Click on the &apos;START&apos; button to start the fight, a random weapon is chosen to make it fair.
      </li>
    </ul>

  </div>
);

export default Steps;
