import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import { HashLink as Link } from 'react-router-hash-link';

import { setActiveBlock } from '../actions';

import Header from '../components/header';
import Phases from '../components/phases';
import Pricing from '../components/pricing';
import Footer from '../components/footer';
import WorkshopCard from '../components/workshop';
import logo from '../style/img/logo.png';
import coaster from '../style/img/coaster.png';

class Process extends Component {
  render() {
    return(
      <div id="processPage">
        <div id="topBlock" className="block img">
          <Header />
          <div className="vertCenter">
            <div className="container above">
              <h1 className="center"><span className="turk">Success</span> starts with <br />the right process.</h1>
              <WorkshopCard />
            </div>
          </div>
          <div className="bottom unfixMobile">
            <Link smooth to="/process/#phasesBlock" className="btn btn-secondary btn-arrow">Other steps<div className="material-icons">arrow_downward</div></Link>
            <div className="bottomArrow left" />
            <div className="bottomArrow right" />
          </div>
        </div>
        <div id="phasesBlock" className="block light">
          <Phases />
        </div>
        <div id="pricingBlock" className="block light lastBlock">
          <Pricing />
          <Footer page='process' />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { activeBlock: state.state.block};
}

export default connect(mapStateToProps, {setActiveBlock})(Process);
