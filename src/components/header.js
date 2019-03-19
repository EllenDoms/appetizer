import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom'; //navigate in app

import logoHori from '../style/img/logo_hori_dark.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { mobile: "closed" }
  }
  slideOpen() { this.setState({ mobile: "open" })}
  slideClosed() { this.setState({ mobile: "closed" })}
  render() {
    return (
      <div id="header" className={this.state.mobile}>
        <div id="mobile">
          <div className="container"><div id="hamburger" className="material-icons" onClick={() => {this.slideOpen()}}>dehaze</div></div>
          <ul className="inner nav container" onClick={() => {this.slideClosed()}}>
            <li><Link exact activeClassName="active" to={'/'}>Home</Link></li>
            <li><Link activeClassName="active" to={'/process'}>Process</Link></li>
            <li><Link activeClassName="active" to={'/tips'}>Take the test</Link></li>
            <li><Link activeClassName="active" to={'/contact'}>Contact</Link></li>
          </ul>
        </div>
        <div className="container">
          <Link id="logo" exact to={'/'}><img src={logoHori} alt="logo" /></Link>
          <ul id="wideNav" className="nav">
            <li><Link exact activeClassName="active" to={'/'}>Home</Link></li>
            <li><Link activeClassName="active" to={'/process'}>Process</Link></li>
            <li><Link activeClassName="active" to={'/tips'}>Take the test</Link></li>
            <li><Link activeClassName="active" to={'/contact'}>Contact</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}
