import React, { Component } from 'react';
import '../style/App.css';
import ScrollableAnchor from 'react-scrollable-anchor'

import Phases from '../components/phases';
import ContactForm from '../components/contactForm';
import logo from '../style/img/logo.png';
import coaster from '../style/img/coaster.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollableAnchor id="topBlockAnchor">
          <div id="topBlock" className="block img">
            <img id="logo" src={logo} alt="logo" />
            <div className="vertCenter">
              <div className="container">
                <h1>Don’t let <br /><span className="turk"> your dream </span><br /> die on a <br />beer coaster</h1>
                <div className="subtitle">Got a wicked idea? <br /> We help you kickstart your application. </div>
              </div>
              <img id="coaster" src={coaster} alt="beer coaster with idea" />
              <div className="bottom"><a href='#phasesBlockAnchor' className="btn btn-secondary btn-arrow">Start today<div className="material-icons">arrow_downward</div></a></div>
            </div>
            <div id="greyBG" />

          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="phasesBlockAnchor">
          <div id="phasesBlock" className="block light">
            <Phases />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="contactBlockAnchor">
          <div id="contactBlock" className="block white">
            <div className="contactArrow" />
            <div className="container">
              <h2>Talk to us</h2>
              <ContactForm />
            </div>
          </div>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
