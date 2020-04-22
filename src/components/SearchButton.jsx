import React from 'react';

const SearchButton = ({
  onClick,
  children,
}) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);

export default SearchButton;
