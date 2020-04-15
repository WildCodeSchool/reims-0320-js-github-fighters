import React from 'react';
import FighterInput from './FighterInput';

import SearchButton from './SearchButton';

class SearchFighter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <FighterInput />
        <SearchButton />
      </>
    );
  }
}

export default SearchFighter;
