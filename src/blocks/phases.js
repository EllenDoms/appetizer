import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';

import { setActivePhase } from '../actions';

const phases = [
  { title: 'A clear idea',
    h3: "A kickass pitch!",
    accent: "3 days",
    text: "Explaining your idea in a clear way is the first step to attract the right investor or partner."},
  { title: 'Prototype',
    h3: "Test your idea",
    accent: "3 weeks",
    text: "Test if your concept resonates with the target audience. Only the essentials are built."},
  { title: 'Early launch',
    h3: "Minimum viable",
    accent: "6 weeks",
    text: "The first profitable version of your application will be launched, with only the most needed features."},
  { title: 'Go to market',
    h3: "I want it all",
    accent: "Custom",
    text: "A product is never finished. After the first launch we add additional features or tweak existing ones."}];

class Phases extends Component {
  renderTabs(activePhase) {
    return phases.map((phase, i) => {
      const key = i + 1;
      const active = (key === activePhase);
      const done = (key < activePhase);
      return (
        <li
          key={key}
          className={active ? 'active done' : done ? 'done' : '' }
          onClick={() => {this.props.setActivePhase(key)}}
        >
          {key !== 1 ? <div className="line" /> : "" }
          <div className="rhomboid"><div className="inner">{key}</div></div>
          <h4>{phase.title}</h4>
          <div className="arrow" />
        </li>
      )
    })
  }
  renderTabContent(activePhase) {
    return phases.map((phase, i) => {
      const key = i + 1;
      const img = require(`../style/img/steps/step${key}.png`);
      return (
        <div key={key} className={key === activePhase ? "visible" : "hidden" }>
          <img src={img} alt='app, development, phase' />
          <div className="info">
            <h3>{phase.h3}</h3>
            <div className="accent">{phase.accent}</div>
            <p>{phase.text}</p>
          </div>
        </div>
      )
    })
  }
  render() {
    const { activePhase } = this.props;
    return (
      <div>
        <h2>Bring your idea to life, step by step</h2>
        <ul id="tabs">
          <div className="container">
            {this.renderTabs(activePhase)}
          </div>
        </ul>
        <div id="tabcontent">
          <div className="container">
            {this.renderTabContent(activePhase)}
          </div>
          <div className="bottom">
            <Link smooth to="/process/#pricingBlock" className="btn btn-secondary btn-arrow">More information<div className="material-icons">arrow_downward</div></Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { activePhase: state.state.phase};
}

export default connect(mapStateToProps, {setActivePhase})(Phases);