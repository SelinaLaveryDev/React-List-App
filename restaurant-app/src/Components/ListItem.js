import React, { Component } from "react";
import FavouriteButton from "./FavouriteButton";

class ListItem extends Component {
	render() {
		const { restaurant, handleFavourite, newRestaurant } = this.props;
		return (
			<ul>
				{newRestaurant && <li>{newRestaurant}</li>}
				<li>
					Name: {restaurant.BusinessName} | Address: {restaurant.AddressLine2}{" "}
					{restaurant.AddressLine3} {restaurant.PostCode}{" "}
					<FavouriteButton
						restaurant={restaurant}
						handleFavourite={handleFavourite}
					/>
					<button onClick={() => this.props.deleteRestaurant(restaurant.id)}>
						Remove
					</button>
				</li>
			</ul>
		);
	}
}

export default ListItem;
