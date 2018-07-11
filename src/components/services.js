import React, { Component } from 'react';
import { connect } from 'react-redux';

const services = [
  { icon: "description",
    color: "#7D8FC8",
    h4: "Project documentation",
    text: "Building a project starts with making decisions"},
  { icon: "dvr",
    color: "#D05C76",
    h4: "Pitch presentation",
    text: "Present your idea with style, and in a clear way!"},
  { icon: "devices",
    color: "#38C3DB",
    h4: "Web/mobile application",
    text: "On which devices will your customers need the application?"},
  { icon: "location_on",
    color: "#14ACC3",
    h4: "Device native features",
    text: "Camera, location, bluetooth,... Added value for your product."},
  { icon: "lock",
    color: "#FEDB5C",
    h4: "Social authentication",
    text: "Camera, location, bluetooth,... Added value for your product."},
  { icon: "show_chart",
    color: "#6574B5",
    h4: "Analytics",
    text: "Know what your customer wants, by analysing their behaviour."},
]

export default class Services extends Component {
  renderServices() {
    return services.map((service, i) => {
      return(
        <div key={i} className="service card">
          <div className="coasterSmall material-icons" style={{backgroundColor: service.color}}>{service.icon}</div>
          <h4>{service.h4}</h4>
          <p>{service.text}</p>
        </div>
      )
    })
  }
  render() {
    return(
      <div>
        <h2>Our services</h2>
        <div className="container">
          {this.renderServices()}
        </div>
      </div>
    )
  }
}
