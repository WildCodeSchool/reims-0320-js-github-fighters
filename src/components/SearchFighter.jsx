import React from 'react';

import SearchButton from './SearchButton';
import FighterInput from './FighterInput';
import './SearchFighter.css';

const SearchFighter = ({
  setKeywords,
  onSearch,
  label,
}) => (
  <form
    className="SearchFighter"
    onSubmit={(event) => {
      event.preventDefault();
      onSearch();
    }}
  >
    <label>{label}</label>
    <FighterInput setText={setKeywords} />
    <button type="submit">
      Search
    </button>
  </form>
);
export default SearchFighter;
