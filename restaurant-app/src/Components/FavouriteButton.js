import React, { Component } from "react";

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
			<button onClick={this.handleClick}>
				{this.state.isFavourited
					? "Remove from Favourites"
					: "Add to Favourites"}
			</button>
		);
	}
}

export default FavouriteButton;
