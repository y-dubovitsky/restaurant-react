import React, { Component } from 'react';
import Description from './description/description';
import Footer from './footer/footer';
import Header from './header/header';
import Hero from './hero/hero';
import Restaurants from './restaurants';
import Basket from './basket';
import Card from './card/card';
import { Route, Switch } from 'react-router-dom';
import ErrorPage from './error-page/error-page';

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
          <Route path="/error" component={ErrorPage} />
        </Switch>
        <Card />
        <Footer />
      </div>
    )
  }
}