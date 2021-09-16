import React, { Component } from 'react';
import Description from './description/description';
import Footer from './footer/footer';
import Header from './header/header';
import Hero from './hero/hero';
import Restaurants from './restaurants';
import Basket from './basket';
import { Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Description />
        <Route path="/checkout" component={Basket} />
        <Route path="/restaurants" component={Restaurants} />
        <Footer />
      </div>
    )
  }
}