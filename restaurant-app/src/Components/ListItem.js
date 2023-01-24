import React, { Component } from "react";

class ListItem extends Component {
	// state = {}

	render() {
		return <li>{this.props.restaurant}</li>;
	}
}

export default ListItem;
