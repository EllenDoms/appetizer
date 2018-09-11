import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import { HashLink as Link } from 'react-router-hash-link';

import { setActiveBlock } from '../actions';

import Header from '../components/header';
import Footer from '../components/footer';
import TipsForm from '../blocks/tipsForm';
import FloatingBtn from '../components/floatingBtn';

class Tips extends Component {
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
      this.props.setActiveBlock(newPath);
      ReactGA.pageview(window.location.pathname + window.location.search + window.location.hash);
    }
  }
  render() {
    return(
      <div id="tipsPage">
        <div id="topBlock" className="block img">
          <Header />
          <FloatingBtn />
          <div className="vertCenter">
            <div className="container above">
              <h1 className="center">You are more likely to be lucky <br /> when you’re <span className="turk"> prepared</span>.</h1>
              <p>Did you know most good ideas never see the light of day? <br /> By reading this, you are already beating the odds. <br />  Get tips on what to do next with our small test!</p>
            </div>
          </div>
          <div className="bottom unfixMobile">
            <Link smooth to="/tips/#tipsFormBlock" className="btn btn-secondary btn-arrow">Take the test!<div className="material-icons">arrow_downward</div></Link>
            <div className="bottomArrow left" />
            <div className="bottomArrow right" />
          </div>
        </div>
        <div id="tipsFormBlock" className="block light last">
          <TipsForm />
          <Footer page='tips' />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { activeBlock: state.state.block};
}

export default connect(mapStateToProps, {setActiveBlock})(Tips);
