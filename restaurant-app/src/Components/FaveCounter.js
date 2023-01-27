import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";

class FaveCounter extends Component {
	render() {
		return (
			<div>
				<Badge bg="info">Favorites</Badge>
				{this.props.faveCounter}
			</div>
		);
	}
}

export default FaveCounter;
