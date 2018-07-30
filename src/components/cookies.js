import React, { Component } from 'react';

export default class CookiesBlock extends Component {
  render() {
    return (
      <div id="overlay">
        <div id="popup">
          <p>This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.</p>
          <div><button onClick={() => this.props.buttonClick()} className="btn btn-primary center">I agree</button></div>
        </div>
      </div>
    )
  }
}
