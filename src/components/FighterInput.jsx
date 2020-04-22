import React from 'react';

const FighterInput = ({
  setText,
}) => (
  <input onChange={(event) => setText(event.target.value)} type="text" />
);

export default FighterInput;
