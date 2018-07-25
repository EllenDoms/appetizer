import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom'; //navigate in app

import logoHori from '../style/img/logo_hori_dark.png';

export default class Header extends Component {
  render() {
    return (
      <div id="header" className="container">
        <img id="logo" src={logoHori} alt="logo" />
        <ul className="nav">
          <li><Link exact activeClassName="active" to={'/'}> Home</Link></li>
          <li><Link activeClassName="active" to={'/process'}>How it works</Link></li>
          {/* <li><Link activeClassName="active" to={'/test'}>Take the test</Link></li> */}
          <li><Link activeClassName="active" to={'/contact'}>Contact us</Link></li>
        </ul>
      </div>
    )
  }
}
