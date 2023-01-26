import React, { Component } from "react";
import ListItem from "./ListItem";
import FavouriteButton from "./FavouriteButton";

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
								key={restaurant.id + index}
								restaurant={restaurant}
								handleFavourite={this.props.handleFavourite}
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
