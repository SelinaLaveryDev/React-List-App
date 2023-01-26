import React, { Component } from "react";
import FavouriteButton from "./FavouriteButton";

class ListItem extends Component {
	render() {
		const { restaurant, handleFavourite } = this.props;
		return (
			<li>
				Name: {restaurant.BusinessName} | Address: {restaurant.AddressLine2}{" "}
				{restaurant.AddressLine3} {restaurant.PostCode}{" "}
				<FavouriteButton
					restaurant={restaurant}
					handleFavourite={handleFavourite}
				/>
			</li>
		);
	}
}

export default ListItem;
