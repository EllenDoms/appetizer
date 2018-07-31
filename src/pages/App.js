import React, { Component } from 'react';
import ReactGA from 'react-ga';
import '../style/App.css';

import { browserHistory } from 'react-router';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import CookiesBlock from '../components/cookies';
import homePage from './Home';
import processPage from './Process';
import tipsPage from './Tips';
import contactPage from './Contact';

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    // cookies popup
    const { cookies } = props;
    this.state = { gdpr: cookies.get('gdpr') || false };
    // Google analytics
    ReactGA.initialize('UA-122338756-1');
    ReactGA.pageview(window.location.pathname + window.location.search + window.location.hash);
  }
  handleGDPR() {
  const { cookies } = this.props;
  cookies.set('gdpr', true, { path: '/' });
  this.setState({ gdpr: true });
}
  render() {
    const { gdpr } = this.state;

    return (
      <HashRouter>
        <div id='app'>
          { !gdpr ? <CookiesBlock buttonClick={() => {this.handleGDPR()}} /> : "" }
          <Switch>
            <Route exact path="/" component={homePage} />
            <Route exact path="/process" component={processPage} />
            <Route exact path="/tips" component={tipsPage} />
            <Route exact path="/contact" component={contactPage} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default withCookies(App);
