import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../Actions/test';

class TestComp extends Component {
	static propTypes = {
	  data: PropTypes.array,
	  get: PropTypes.func,
	  set: PropTypes.func,
	};

	render() {
	  return (
	    <Fragment>
	      <div style={{ textAlign: 'center' }}>
	        <Link to="/">Home</Link>
	      </div>
	      <ul>{this.props.data.map((el, i) => <li key={i}>{el.text}</li>)}</ul>
	      <button onClick={this.props.get}>GET</button>
	      <button onClick={this.props.set}>SET</button>
	    </Fragment>
	  );
	}
}

const mapStateToProps = state => ({
  data: state.test.data,
});

export default connect(
  mapStateToProps,
  actions,
)(TestComp);
