import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import { HashLink as Link } from 'react-router-hash-link';

import { setActiveBlock } from '../actions';

import Header from '../components/header';
import Footer from '../components/footer';


class Test extends Component {
  render() {
    return(
      <div id="testPage">
        <div id="topBlock" className="block img">
          <Header />
        </div>
        <div id="testBlock" className="block lastBlock">
          <Footer page='test' />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { activeBlock: state.state.block};
}

export default connect(mapStateToProps, {setActiveBlock})(Test);
