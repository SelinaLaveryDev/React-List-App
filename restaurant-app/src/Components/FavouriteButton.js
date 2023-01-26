import React, { Component } from "react";

class FavoriteButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFavorited: false,
		};
	}

	toggleFavorite = () => {
		this.setState({
			isFavorited: !this.state.isFavorited,
		});
	};

	render() {
		return (
			<button onClick={this.toggleFavorite}>
				{this.state.isFavorited ? "Unfavorite" : "Favorite"}
			</button>
		);
	}
}

export default FavoriteButton;
