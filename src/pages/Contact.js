import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import { HashLink as Link } from 'react-router-hash-link';

import { setActiveBlock } from '../actions';

import Header from '../components/header';
import ContactForm from '../components/contactForm';
import Footer from '../components/footer';


class Contact extends Component {
  render() {
    return(
      <div id="contactPage">
        <div id="topBlock" className="block white">
          <Header />
          <div className="container flex">
            <div className="left card">
              <div className="backleft">
                <h2>Drop us a line</h2>
                <ContactForm />
              </div>

            </div>
            <div className="right">
              <h2>...or just call us</h2>
              <div id="call">+32 474 88 39 33‬</div>
              <div id="address">
                <p>Kleine Nieuwedijkstraat 64/102, 2800 Mechelen</p>
                <p>info@app-etizer.be</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { activeBlock: state.state.block};
}

export default connect(mapStateToProps, {setActiveBlock})(Contact);
