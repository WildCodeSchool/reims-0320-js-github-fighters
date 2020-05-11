import React from 'react';


const SearchButton = ({
  onClick,
  children,
}) => (
  <button onClick={onClick} type="submit">
    {children}
  </button>
);

export default SearchButton;
onclick=" if(this.form.onsubmit){this.form.submit()}"