import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';

import { setActiveBlock } from '../actions';

import Header from '../components/header';
import Footer from '../components/footer';
import TestForm from '../blocks/testForm';
import FloatingBtn from '../components/floatingBtn';

class Test extends Component {
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
      <div id="testPage">
        <div id="topBlock" className="block img">
          <Header />
          <FloatingBtn />

        </div>
        <div id="testFormBlock" className="block light last">
          <TestForm />
          <Footer page='' />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { activeBlock: state.state.block};
}

export default connect(mapStateToProps, {setActiveBlock})(Test);
