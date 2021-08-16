import React, { Component } from 'react';
import Restaurants from './restaurants';

export default class App extends Component {
  render() {
    return (
      <div>
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    )
  }
}