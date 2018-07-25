import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import logoWhite from '../style/img/logoWhite.png';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="footer">
        <div className="container flex">
          <div className="column">
            <Link smooth to={`${this.props.page}/#topBlock`} className="btn btn-float material-icons">arrow_upward</Link>
            <img id="logo" src={logoWhite} alt="logo" />
          </div>
          <div className="column">
            <h3>Contact</h3>
            <ul>
              <li className="nolink">+32 474 88 39 33‬</li>
              <li className="nolink">info@app-etizer.eu</li>
            </ul>
          </div>
          <div className="column">
            <h3>Social</h3>
            <ul>
              <li className="nolink"><a href="https://www.facebook.com/appetizer.eu" target="_blank">Facebook</a>‬</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
