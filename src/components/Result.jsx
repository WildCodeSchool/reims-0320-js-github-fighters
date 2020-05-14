import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Result = () => {
  const { state } = useContext(AppContext);
  return (
    <p>
      fighter score:
      {state.result.fighterScore}
      vs challenger score:
      {state.result.challengerScore}
    </p>
  );
};

export default Result;
