import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Test extends Component {
	render() {
		return (
			<div style={{ textAlign: `center` }}>
				<Link to="/">Home</Link>
			</div>
		);
	}
}

export default Test;
