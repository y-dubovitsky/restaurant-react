import React, { Component } from 'react';
import Description from './description/description';
import Footer from './footer/footer';
import Header from './header/header';
import Hero from './hero/hero';
import Restaurants from './restaurants';
import Basket from './basket';
import Card from './card/card';
import { Route, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Description />
        <Switch>
          <Route path="/" exact component={() => <h1>Main Page</h1>} />
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/" component={() => <h1>Page NOT found</h1>} />
        </Switch>
        <Card />
        <Footer />
      </div>
    )
  }
}