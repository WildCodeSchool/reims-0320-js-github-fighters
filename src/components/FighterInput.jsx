import React, { Component } from 'react';

class MyFighterInput extends Component {
  constructor(props) {
    super(props);
    this.state = { fighter: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ fighter: event.target.value });
  }

  render() {
    return (
      <div>
         <label htmlFor="fighter">Fighter :</label>
        <input
          id="fighter"
          type="text"
          value={this.state.fighter}
          onChange={this.handleChange}
        />
        <h1>{this.state.fighter}</h1>
      </div>
    );
  }
}

export default MyFighterInput;
