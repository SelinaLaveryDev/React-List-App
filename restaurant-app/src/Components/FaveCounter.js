import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";

class FaveCounter extends Component {
	render() {
		return <div>{this.props.faveCounter}</div>;
	}
}

export default FaveCounter;
