import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import { HashLink as Link } from 'react-router-hash-link';

import { setActiveBlock } from '../actions';

import Header from '../components/header';
import Phases from '../blocks/phases';
import Pricing from '../blocks/pricing';
import Footer from '../components/footer';
import WorkshopCard from '../components/workshop';
import FloatingBtn from '../components/floatingBtn';

class Process extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    const oldPath = this.props.activeBlock;
    const newPath = window.location.hash;
    if (oldPath !== newPath) {
      console.log(newPath)
      this.props.setActiveBlock(newPath);
      ReactGA.pageview(window.location.pathname + window.location.search + window.location.hash);
    }
  }
  render() {
    return(
      <div id="processPage">
        <div id="topBlock" className="block img">
          <Header />
          <FloatingBtn />
          <div className="vertCenter">
            <div className="container above">
              <h1 className="center"><span className="turk">Success</span> starts with <br />the right process.</h1>
              <WorkshopCard />
            </div>
          </div>
          <div className="bottom unfixMobile">
            <Link smooth to="/process/#pricingBlock" className="btn btn-secondary btn-arrow">Other steps<div className="material-icons">arrow_downward</div></Link>
            <div className="bottomArrow left" />
            <div className="bottomArrow right" />
          </div>
        </div>
        <div id="pricingBlock" className="block light lastBlock">
          <Pricing />
          <div className="bottom unfixMobile">
            <Link smooth to="/process/#phasesBlock" className="btn btn-secondary btn-arrow">In every phase<div className="material-icons">arrow_downward</div></Link>
            <div className="bottomArrow left" />
            <div className="bottomArrow right" />
          </div>
        </div>
        <div id="phasesBlock" className="block light">
          <Phases />
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
