import React, { Component } from "react";
import ListItem from "./ListItem";
import FavouriteButton from "./FavouriteButton";
import { Container } from "react-bootstrap";
import { Table } from "react-bootstrap";

class ListContainer extends Component {
	render() {
		return (
			<>
				{!this.props.isLoaded ? (
					<div>Loading...</div>
				) : (
					<ul>
						{this.props.restaurants.map((restaurant, index) => (
							<ListItem
								key={index}
								id={restaurant._id}
								restaurant={restaurant}
								handleFavourite={this.props.handleFavourite}
								deleteRestaurant={this.props.deleteRestaurant}
								addFavouriteToList={this.props.addFavouriteToList}
							/>
						))}
					</ul>
				)}
			</>
		);
	}
}

export default ListContainer;

// const restaurants = this.props.restaurantList.map((element, index) => {
// 	return (
// 		<ListItem
// 			restaurant={element}
// 			key={index}
// 		/>
// 	);
// });
