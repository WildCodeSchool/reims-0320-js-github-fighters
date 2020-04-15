import React from 'react';

class SearchButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchbutton:"Rechercher"
      };
    }
    render() {
        return (
          <div>
            <button
              onClick={event => {
                console.log("hello");
                }}
             >{this.state.searchbutton}</button>
                 </div>
                 )
                }
            }
export default SearchButton