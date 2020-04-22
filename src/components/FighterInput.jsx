import React from 'react';

const FighterInput = ({
  setText,
}) => (
  <div className="texteFight">
    <>Fighter : </>
    <input onChange={(event) => setText(event.target.value)} type="text" />
  </div>
);

export default FighterInput;
