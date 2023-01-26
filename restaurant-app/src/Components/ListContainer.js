import React, { Component } from "react";
import ListItem from "./ListItem";

class ListContainer extends Component {
	render() {
		return (
			<>
				{!this.props.isLoaded ? (
					<div>Loading...</div>
				) : (
					<ul>
						{this.props.restaurants.map((restaurant) => (
							<li key={restaurant.id}>
								Name: {restaurant.BusinessName} | Address:{" "}
								{restaurant.AddressLine2} {restaurant.AddressLine3}{" "}
								{restaurant.PostCode}
							</li>
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
