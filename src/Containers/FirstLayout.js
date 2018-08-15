import React, { Component } from 'react';

import FirsLayout from '../Components/first_page/index';

class TestComp extends Component {
  render() {
    return <FirsLayout {...this.props} />;
  }
}

export default TestComp;
