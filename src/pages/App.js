import React, { Component } from 'react';
import '../style/App.css';
import ScrollableAnchor from 'react-scrollable-anchor'

import Targets from '../components/targets';
import Phases from '../components/phases';
import ContactForm from '../components/contactForm';
import logo from '../style/img/logo.png';
import logoWhite from '../style/img/logoWhite.png';

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
              <div className="bottom"><a href='#targetsBlockAnchor' className="btn btn-secondary btn-arrow">Start today<div className="material-icons">arrow_downward</div></a></div>
            </div>
            <div id="greyBG" />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="targetsBlockAnchor">
          <div id="targetsBlock" className="block light">
            <Targets />
            <div className="bottom"><a href='#servicesBlockAnchor' className="btn btn-secondary btn-arrow">Cool, but how does it work?<div className="material-icons">arrow_downward</div></a></div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="phasesBlockAnchor">
          <div id="phasesBlock" className="block light">
            <Phases />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="servicesBlockAnchor">
          <div id="servicesBlock" className="block light">
            <Targets />
            <div className="bottom"><a href='#contactBlockAnchor' className="btn btn-secondary btn-arrow">Cool, but how does it work?<div className="material-icons">arrow_downward</div></a></div>
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
        <div id="footer">
          <div className="container">
            <div className="column">
              <a href='#topBlockAnchor' className="btn btn-float material-icons">arrow_upward</a>
              <img id="logo" src={logoWhite} alt="logo" />
            </div>
            <div className="column">
              <h3>Contact</h3>
              <ul>
                <li className="nolink">Kleine Nieuwedijkstraat 64/102, 2800 Mechelen</li>
                <li className="nolink">info@app-etizer.be</li>
                <li className="nolink">+32 474 88 39 33‬</li>
              </ul>
            </div>
            <div className="column">
              <h3>Follow us</h3>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Github‬</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
