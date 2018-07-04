import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TestComp extends Component {
  render() {
    console.log(this.props);
    return (
      <div style={{ textAlign: 'center' }}>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default TestComp;
