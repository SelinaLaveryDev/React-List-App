import React, { Component } from "react";
import FavouriteButton from "./FavouriteButton";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class ListItem extends Component {
	render() {
		const { restaurant, handleFavourite, handleRemove } = this.props;
		return (
			<>
				<Container>
					<Table
						striped
						bordered
						hover>
						<thead>
							<tr>
								<th>Restaurant Name</th>
								<th>Address</th>
								<th>City</th>
								<th>Postcode</th>
								<th>Favourite</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td>{restaurant.BusinessName}</td>
								<td>{restaurant.AddressLine2}</td>
								<td>{restaurant.AddressLine3}</td>
								<td>{restaurant.PostCode}</td>
								<td>
									<FavouriteButton
										restaurant={restaurant}
										handleFavourite={handleFavourite}
									/>
									<Button
										variant="secondary"
										size="sm"
										onClick={() => this.props.deleteRestaurant(restaurant.id)}>
										Remove
									</Button>
								</td>
							</tr>
						</tbody>
					</Table>
				</Container>
			</>
		);
	}
}

export default ListItem;
