import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import { HashLink as Link } from 'react-router-hash-link';

import { setActiveBlock } from '../actions';

import Header from '../components/header';
import Targets from '../blocks/targets';
import TipsForm from '../blocks/tipsForm';
import Services from '../components/services';
import Footer from '../components/footer';
import FloatingBtn from '../components/floatingBtn';
import WorkshopCard from '../components/workshop';
import coaster from '../style/img/coaster.png';
import Pricing from '../blocks/pricing';

class Home extends Component {
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
      <div id="homePage">
        <div id="topBlock" className="block img">
          <Header />
          {/* <FloatingBtn /> = telephone number! */}
          <div className="vertCenter container">
            <div className="above">
              <h1>Don’t let <br /><span className="turk"> your dream </span><br /> die on a <br />beer coaster</h1>
              <div className="subtitle">Got a wicked idea? <br /> We help you kickstart your application. </div>
              <Link to={'/contact'} className="btn btn-primary">Get in touch</Link>
            </div>
            <img id="coaster" src={coaster} alt="beer coaster with idea" />
          </div>
          <div className="bottom">
            <Link smooth to="/#workshopBlock" className="btn btn-secondary btn-arrow">Get started<div className="material-icons">arrow_downward</div></Link>
            <div className="bottomArrow left" />
            <div className="bottomArrow right" />
          </div>
        </div>
        <div id="pricingBlock" className="block light lastBlock">
          <Pricing />
          <div className="bottom unfixMobile">
            <Link smooth to="/process/#workshopBlock" className="btn btn-secondary btn-arrow">Why work with us?<div className="material-icons">arrow_downward</div></Link>
            <div className="bottomArrow left" />
            <div className="bottomArrow right" />
          </div>
        </div>
        <div id="targetsBlock" className="block">
          <Targets />
          <div className="bottom">
            <Link smooth to="/#workshopBlock" className="btn btn-secondary btn-arrow">Free workshop!<div className="material-icons">arrow_downward</div></Link>
            <div className="bottomArrow left" />
            <div className="bottomArrow right" />
          </div>
        </div>
        <div id="workshopBlock" className="block light">
          <WorkshopCard />
          {/* <div className="bottom">
            <Link smooth to="/#targetsBlock" className="btn btn-secondary btn-arrow">Learn more<div className="material-icons">arrow_downward</div></Link>
            <div className="bottomArrow left white" />
            <div className="bottomArrow right white" />
          </div> */}
          <Footer page='' />
        </div>
        {/* <div id="servicesBlock" className="block light last">
          <Services />
          <Footer page='' />
        </div> */}
      </div>
    )
  }
}

function mapStateToProps(state){
  return { activeBlock: state.state.block};
}

export default connect(mapStateToProps, {setActiveBlock})(Home);
