import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class FavouriteButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isFavourited: this.props.restaurant.isFavourited || false,
		};
	}

	handleClick = () => {
		this.setState((prevState) => {
			return {
				isFavourited: !prevState.isFavourited,
			};
		});
		this.props.handleFavourite(this.props.restaurant.id);
	};

	render() {
		return (
			<Button
				variant="success"
				size="sm"
				onClick={this.handleClick}>
				{this.state.isFavourited
					? "Remove from Favourites"
					: "Add to Favourites"}
			</Button>
		);
	}
}

export default FavouriteButton;
