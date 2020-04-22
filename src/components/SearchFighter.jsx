import React from 'react';

import SearchButton from './SearchButton';
import FighterInput from './FighterInput';
import './SearchFighter.css';

const SearchFighter = ({
  setKeywords,
  onSearch,
}) => (
  <div className="SeachFighter">
    <FighterInput setText={setKeywords} />
    <SearchButton onClick={onSearch}>
      Recherche
    </SearchButton>
  </div>
);
export default SearchFighter;
