import React, { Component } from 'react';

import TestFormSteps from '../components/testFormSteps';

export default class TestForm extends Component {
  render() {
    return(
        <div>
          <h2>Test your idea now!</h2>
          <div id="tabcontent">
            <div className="container">
              <TestFormSteps />
            </div>
          </div>
        </div>
    )
  }
}
