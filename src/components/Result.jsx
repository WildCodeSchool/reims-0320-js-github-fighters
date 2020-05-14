import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Result = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      {state.result.fighterScore >= state.result.challengerScore
        ? <h1>Fighter WIN</h1>
        : <h1>Challenger WIN</h1>}
      <p>
        fighter score:
        {state.result.fighterScore}
        {' '}
        vs challenger score:
        {state.result.challengerScore}
      </p>

    </>
  );
};

export default Result;
