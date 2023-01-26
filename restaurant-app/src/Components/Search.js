import React, { Component } from "react";
import ListItem from "./ListItem";

class Search extends Component {
	handleClick = (e) => {
		e.preventDefault();
		console.log("Handling search click...");
		const city = e.target.previousSibling.value;
		console.log("the city is....", city);
		this.setState({
			city: city,
		});

		const apiKey = process.env.REACT_APP_X_RapidAPI_Key;

		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": process.env.REACT_APP_X_RapidAPI_Key,
				// "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
				"X-RapidAPI-Host": "wyre-data.p.rapidapi.com",
			},
		};

		fetch(`https://wyre-data.p.rapidapi.com/restaurants/town/${city}`, options)
			.then((response) => response.json())
			.then((response) => {
				this.setState({
					isLoaded: true,
					restaurantData: response,
				});
				this.props.updateRestaurantData(response);
				console.log("the response is....", response);
			});
		this.props.updateIsLoaded(true);
	};

	render() {
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<label>Where are you dining out this weekend?</label>
					<input
						type="text"
						placeholder="Enter city here..."
						value={this.props.city}
						onChange={this.props.handleCityChange}
					/>
					<button
						onClick={(e) => this.handleClick(e)}
						type="submit">
						Search
					</button>
					<button onClick={this.clearList}>Clear</button>
				</form>
			</>
		);
	}
}

export default Search;
