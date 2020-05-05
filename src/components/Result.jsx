/* eslint-disable react/prop-types */
import React from 'react';


function Result({ choice }) {
  return (

    <div>
      <p>

        {choice.public_repos}

      </p>
    </div>
  );
}

export default Result;
