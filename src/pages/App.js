import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import '../style/App.css';

import { browserHistory } from 'react-router';
import { HashRouter, Route, Switch } from 'react-router-dom';

import homePage from './Home';
import processPage from './Process';
import testPage from './Test';
import contactPage from './Contact';

export default class App extends Component {
  constructor() {
    super();
    // Google analytics
    ReactGA.initialize('UA-122338756-1');
    ReactGA.pageview(window.location.pathname + window.location.search + window.location.hash);
  }
  render() {
    return (
      <HashRouter>
        <div id='app'>
          <Switch>
            <Route exact path="/" component={homePage} />
            <Route exact path="/process" component={processPage} />
            <Route exact path="/test" component={testPage} />
            <Route exact path="/contact" component={contactPage} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
