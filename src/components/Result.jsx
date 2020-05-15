import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import './Result.css';

const Result = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <div className="Result">
        {state.result.fighterScore >= state.result.challengerScore
          ? <h1>{state.infosFighter.name} WIN</h1>
          : <h1>{state.infosChallenger.name} WIN</h1>}
        <div className="Record">
          <div className="fighterscore">
            <div>
              <p>
                Fighter score:
              </p>
            </div>
            <div>
              <p>
                {state.result.fighterScore}
                {' '}
              </p>
            </div>
          </div>
          <div className="vs">
            <p>
              VS
            </p>
          </div>
          <div className="Csc">
            <div className="Margin">
              <p>
                Challenger score:
              </p>
            </div>
            <div>
              <p>
                {state.result.challengerScore}
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Result;
