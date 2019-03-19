import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';

import { setActivePhase } from '../actions';

const phases = [
  { title: 'Scope meeting',
    h3: "A clear idea!",
    accent: "---",
    text: "Before we can dive into writing code, we discuss what will be done in this phase. That's what we call a scope."},
  { title: 'Development',
    h3: "Codemonkeys assemble!",
    accent: "---",
    text: "Writing code doesn't mean you have to wait. We keep you up to date with a weekly (virtual) meeting and give you a link to check it out! "},
  { title: 'Delivery',
    h3: "3...2...1...Launch!",
    accent: "---",
    text: "The scope that was defined in the first step is now online. Our team tests it as much as we can but if any problems might occur, they are still part of this phase!"},
  { title: 'Next steps',
    h3: "So what now?",
    accent: "---",
    text: "The more people you talk to, the more ideas you'll get. When a phase is finished we can start a new one or you can choose to wait (and gather feedback for example)!"}];

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
        <h2>Every phase takes the same steps</h2>
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
