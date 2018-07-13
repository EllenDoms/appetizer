import React, { Component } from 'react';

const targets = [
  { h3: "Skill",
    title: "No technical skills required",
    text: "You have the perfect idea for an application, but you lack the technical skills to build it yourself? That’s no longer a problem!"},
  { h3: "Budget",
    title: "Cost efficient",
    text: "Know beforehand what will be delivered at the end of each phase, with eyes on scalability: Every deliverable can be used in a next phase!"},
  { h3: "Time",
    title: "Start soon, release fast",
    text: "Time is money! With a clear goal in mind you’ll have results in a minimum amount of time!"},
]

export default class Targets extends Component {
  renderTargets() {
    return targets.map((target, i) => {
      const img = require(`../style/img/targets/target${i + 1}.png`);
      return(
        <div key={i} className="target">
          <img src={img} alt='target' />
          <h3>{target.h3}</h3>
          <h4>{target.title}</h4>
          <p>{target.text}</p>
        </div>
      )
    })
  }
  render() {
    return(
      <div>
        <h2>We know what’s important</h2>
        <div className="container flex">
          {this.renderTargets()}
        </div>
      </div>
    )
  }
}
