import React, { Component } from 'react';
import '../style/App.css';
import ScrollableAnchor from 'react-scrollable-anchor'

import Targets from '../components/targets';
import Phases from '../components/phases';
import Services from '../components/services';
import Pricing from '../components/pricing';
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
            </div>
            <div className="bottom unfixMobile">
              <a href='#targetsBlockAnchor' className="btn btn-secondary btn-arrow">Get started<div className="material-icons">arrow_downward</div></a>
              <div className="bottomArrow left" />
              <div className="bottomArrow right" />
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="targetsBlockAnchor">
          <div id="targetsBlock" className="block">
            <Targets />
            <div className="bottom unfixMobile">
              <a href='#phasesBlockAnchor' className="btn btn-secondary btn-arrow">How does it work?<div className="material-icons">arrow_downward</div></a>
              <div className="bottomArrow left" />
              <div className="bottomArrow right" />
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="phasesBlockAnchor">
          <div id="phasesBlock" className="block light">
            <Phases />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="servicesBlockAnchor">
          <div id="servicesBlock" className="block light">
            <Services />
            <div className="bottom unfixTablet">
              <a href='#pricingBlockAnchor' className="btn btn-secondary btn-arrow">What does it cost?<div className="material-icons">arrow_downward</div></a>
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="pricingBlockAnchor">
          <div id="pricingBlock" className="block light">
            <Pricing />
            <div className="bottom unfixMobile">
              <a href='#contactBlockAnchor' className="btn btn-secondary btn-arrow">More information<div className="material-icons">arrow_downward</div></a>
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="contactBlockAnchor">
          <div id="contactBlock" className="block white">
            <div className="topArrow" />
            <div className="container">
              <h2>Talk to us</h2>
              <ContactForm />
            </div>
            <div id="footer">
              <div className="container flex">
                <div className="column">
                  <a href='#topBlockAnchor' className="btn btn-float material-icons">arrow_upward</a>
                  <img id="logo" src={logoWhite} alt="logo" />
                </div>
                <div className="column">
                  <h3>Contact</h3>
                  <ul>
                    <li className="nolink">+32 474 88 39 33‬</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollableAnchor>

      </div>
    );
  }
}

export default App;
