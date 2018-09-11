import React, { Component } from 'react';

export default class FormSteps extends Component {
  render() {
    const { step, answer } = this.props;
    const img = require(`../style/img/tipsForm/step${step}.png`);
    return (
      <div className="card onlyCard formCard item">
        <img src={img} />
        <p>{answer}</p>
        <div className="buttons">
          <span className="btn btn-primary danger" onClick={() => this.props.buttonClick(step, true)} >No</span>
          <span className="btn btn-primary" onClick={() => this.props.buttonClick(step, false)} >Yes!</span>
        </div>
      </div>
    )
  }

}
