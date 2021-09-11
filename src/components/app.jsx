import React, { Component } from 'react';
import Description from './description/description';
import Footer from './footer/footer';
import Header from './header/header';
import Hero from './hero/hero';
import Restaurants from './restaurants';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Description />
        <Restaurants />
        <Footer />
      </div>
    )
  }
}