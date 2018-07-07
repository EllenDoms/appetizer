import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setActivePhase } from '../actions';

const phases = [
  { title: 'A clear idea',
    h3: "A kickass pitch!",
    accent: "3 days - € ...",
    text: "Explaining your idea in a clear way is the first step to attract the right investor or partner."},
  { title: 'Prototype',
    h3: "Test your idea",
    accent: "3 weeks - € ...",
    text: "Test if your concept resonates with the target audience. Only the essentials are built."},
  { title: 'Early launch',
    h3: "Minimum viable",
    accent: "6 weeks - € ...",
    text: "The first profitable version of your application will be launched, with only the most needed features."},
  { title: 'Go to market',
    h3: "Everything",
    accent: "Custom",
    text: "A product is never finished. After the first launch we add additional features or tweak existing ones."}];

class Phases extends Component {
  renderTabs(activePhase) {
    return phases.map((phase, i) => {
      const key = i + 1;
      const img = require(`../style/img/sliced/bottle${key}-grey.png`);
      const imgColor = require(`../style/img/sliced/bottle${key}-color.png`);
      const active = (key === activePhase);
      const done = (key < activePhase);
      return (
        <li
          key={key}
          className={active ? 'active done' : done ? 'done' : '' }
          onClick={() => {this.props.setActivePhase(key)}}
        >
          {key !== 1 ? <div className="line" /> : "" }
          <div className="number">{key}</div>
          <div className="illu">
            <img src={img} alt='bottle' />
            <img src={imgColor} className={active || done ? "color active"  : "color" } alt='bottle' />
          </div>
          <h3>{phase.title}</h3>
          <div className="arrow" />
        </li>
      )
    })
  }
  renderTabContent(activePhase) {
    return phases.map((phase, i) => {
      const key = i + 1;
      const img = require(`../style/img/step${key}.png`);
      return (
        <div key={key} className={key === activePhase ? "visible" : "hidden" }>
          <img src={img} alt='app development phase' />
          <div className="info">
            <h3>{phases[i].h3}</h3>
            <div className="accent">{phases[i].accent}</div>
            <p>{phases[i].text}</p>
            <div className="bottom"><a href='#contactBlockAnchor' className="btn btn-primary">More information</a></div>

          </div>
        </div>
      )
    })
  }
  render() {
    const { activePhase } = this.props;
    return (
      <div className="container">
        <h2>Bring your idea to life - step by step</h2>
        <ul id="tabs">
          {this.renderTabs(activePhase)}
        </ul>
        <div id="tabcontent">
          {this.renderTabContent(activePhase)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { activePhase: state.phases.phase};
}

export default connect(mapStateToProps, {setActivePhase})(Phases);
