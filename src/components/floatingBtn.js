import React, { Component } from 'react';

export default class FloatingBtn extends Component {
  constructor(props) {
    super(props),
    this.state= {isOpen: false}
  }
  onHover = () => { this.setState({isOpen: true}) }
  onHoverOut = () => { this.setState({isOpen: false}) }
  render() {
    return(
      <div className="container">
        <div id="floatingBtn"
          onMouseEnter={this.onHover} onClick={this.onHover}
          onMouseLeave={this.onHoverOut}
          className={this.state.isOpen == true ? "open" : "closed"} >
          <span className="material-icons">local_phone</span>
          <a className="number" href="tel:+32474883933">+32 474 88 39 33</a>
        </div>
      </div>
    )
  }
}
