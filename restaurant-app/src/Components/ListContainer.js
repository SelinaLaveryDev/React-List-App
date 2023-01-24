import React, { Component } from "react";
import ListItem from "./ListItem";

class ListContainer extends Component {
	render() {
		const restaurants = this.props.restaurantList.map((element, index) => {
			return (
				<ListItem
					restaurant={element}
					key={index}
				/>
			);
		});

		return (
			<>
				<ul>{restaurants}</ul>
			</>
		);
	}
}

export default ListContainer;
