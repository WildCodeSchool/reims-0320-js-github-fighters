import React from 'react';

import SearchButton from './SearchButton';
import FighterInput from './FighterInput';

const SearchFighter = ({
  setKeywords,
  onSearch,
}) => (
  <>
    <FighterInput setText={setKeywords} />
    <SearchButton onClick={onSearch}>
      Recherche
    </SearchButton>
  </>
);
export default SearchFighter;