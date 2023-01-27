import React, { Component } from "react";

class FaveCounter extends Component {
	render() {
		return <div>Favorites: {this.props.faveCounter}</div>;
	}
}

export default FaveCounter;
