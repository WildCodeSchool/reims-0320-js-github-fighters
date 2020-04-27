import React from 'react';

import SearchButton from './SearchButton';
import FighterInput from './FighterInput';
import './SearchFighter.css';

const SearchFighter = ({
  setKeywords,
  onSearch,
  label
}) => (
  <div className="SeachFighter">
    <>{label}</>
    <FighterInput setText={setKeywords} />
    <SearchButton onClick={onSearch}>
      Recherche
    </SearchButton>
  </div>
);
export default SearchFighter;
