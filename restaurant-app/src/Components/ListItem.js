import React, { Component } from "react";
import FavouriteButton from "./FavouriteButton";
import { Table } from "react-bootstrap";
import { Container } from "react-bootstrap";

class ListItem extends Component {
	render() {
		const { restaurant, handleFavourite, deleteRestaurant } = this.props;
		return (
			<Container>
				<Table
					striped
					bordered
					hover>
					<tbody>
						<tr>
							<th>Name</th>
							<td>{restaurant.BusinessName}</td>
							<td>
								<FavouriteButton
									restaurant={restaurant}
									handleFavourite={handleFavourite}
								/>
								<button onClick={() => deleteRestaurant(restaurant.id)}>
									Remove
								</button>
							</td>
						</tr>
						<tr>
							<th>Address</th>
							<td colSpan={2}>
								{restaurant.AddressLine2} {restaurant.AddressLine3}{" "}
								{restaurant.PostCode}
							</td>
						</tr>
					</tbody>
				</Table>
			</Container>
		);
	}
}

export default ListItem;

// class ListItem extends Component {
// 	render() {
// 		const { restaurant, handleFavourite, newRestaurant } = this.props;
// 		return (
// 			<ul>
// 				{newRestaurant && <li>{newRestaurant}</li>}
// 				<li>
// 					Name: {restaurant.BusinessName} | Address: {restaurant.AddressLine2}{" "}
// 					{restaurant.AddressLine3} {restaurant.PostCode}{" "}
// 					<FavouriteButton
// 						restaurant={restaurant}
// 						handleFavourite={handleFavourite}
// 					/>
// 					<button onClick={() => this.props.deleteRestaurant(restaurant.id)}>
// 						Remove
// 					</button>
// 				</li>
// 			</ul>
// 		);
// 	}
// }
