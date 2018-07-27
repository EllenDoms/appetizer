import React, { Component } from 'react';

const pricing = [
  { h3: "A chat with us",
    title: "You’ll have a better idea of the feasability of your idea!",
    check: [ "Get technical tips", "Quote clear idea" ],
    price: "Totally free!"},
  { h3: "A clear idea",
    title: "Small realisation of your idea to use as demonstration.",
    check: [ "Draft presentation", "Scope refinements", "Quote prototype" ],
    price: "€ 600"},
  { h3: "Prototype",
    title: "A first version of the elaborate idea to test a concept.",
    check: [ "Template app", "Data stored in cloud", "Social login/signin", "Quote early launch" ],
    price: "€ 2500 - € 3000"},
  { h3: "Early launch",
    title: "A working product: minimal features added to the prototype.",
    check: [ "Pitch presentation", "Stable app*", "Basic analytics", "Basic support", "Quote go to market" ],
    price: "€ 4000 - € 6000"},
  { h3: "Go to market",
    title: "A product that goes beyond the minimum of the early launch.",
    check: [ "UI style guide", "3rd party integrations", "Extended support", "...", "Whatever you like" ],
    price: "Depends on functionalities"},
]

export default class Pricing extends Component {
  renderPricing() {
    return pricing.map((item, i) => {
      const img = require(`../style/img/bottles/bottle-${i + 1}.png`);
      let priceBefore = [];
      for (let j = 1; j < i && i !== pricing.length - 1; j++ ) {
        priceBefore.push(<p key={`priceBefore${j}`} className="italic">{pricing[j].h3}<br/>+</p>)
      }
      return(
        <div key={i} className="item">
          {i > 0 ? <div className="rhomboid"><div className="inner material-icons">arrow_forward</div></div> : "" }
          <div className="image"><img src={img} alt='price, development, app' /></div>
          <h4>{item.h3}</h4>
          <div className="content">
            <p className="title">{item.title}</p>
            <ul className="checklist">
              {item.check.map((check, i) => {
                return <li key={`check-${i}`}><span className="icon material-icons">check</span>{check}</li>
              })}
            </ul>
            {/* <div className="pricing">
              {priceBefore}
              <p className="accent">{item.price}</p>
              {i > 0 && i < (pricing.length - 1) ? <p className="small">Excl btw</p> : ""}
            </div> */}
          </div>
        </div>
      )
    })
  }
  render() {
    return(
      <div>
        <h2>Deliverables</h2>
        <div className="container flex">
          {this.renderPricing()}
        </div>
      </div>
    )
  }
}
