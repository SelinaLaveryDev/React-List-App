import React, { Component } from "react";
import ListItem from "./ListItem";
import ListContainer from "./ListContainer";
import Search from "./Search";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchValue: "",
			restaurantsToDisplay: this.props.restaurantList,
			restaurantData: [],
			// restaurantList: this.props.restaurantList,
		};
	}

	// componentDidMount() {
	// 	this.apiCall();
	// }

	// apiCall() {
	// 	const apiKey = process.env.REACT_APP_X_RapidAPI_Key;

	// 	const options = {
	// 		method: "GET",
	// 		headers: {
	// 			"X-RapidAPI-Key": process.env.REACT_APP_X_RapidAPI_Key,
	// 			// "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
	// 			"X-RapidAPI-Host": "wyre-data.p.rapidapi.com",
	// 		},
	// 	};

	// 	fetch(
	// 		`https://wyre-data.p.rapidapi.com/restaurants/town/${textValue}`,
	// 		options
	// 	)
	// 		.then((response) => response.json())
	// 		.then((response) => console.log(response))
	// 		.catch((err) => console.error(err));
	// }

	clearList = (e) => {
		e.preventDefault();
		console.log("Clearing List...");
		this.setState({
			restaurantList: [],
		});
	};

	handleSearch = (e) => {
		e.preventDefault();
		// console.log(e.target.value);
		const textValue = e.target.value;
		const apiKey = process.env.REACT_APP_X_RapidAPI_Key;

		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": process.env.REACT_APP_X_RapidAPI_Key,
				// "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
				"X-RapidAPI-Host": "wyre-data.p.rapidapi.com",
			},
		};

		fetch(
			`https://wyre-data.p.rapidapi.com/restaurants/town/${textValue}`,
			options
		)
			.then((response) => response.json())
			.then((response) => {
				const filteredRestaurants = response.filter((restaurant) => {
					return restaurant.location.city
						.toLowerCase()
						.includes(textValue.toLowerCase());
				});
				this.setState({
					searchValue: textValue,
					restaurantsToDisplay: filteredRestaurants,
					restaurantData: filteredRestaurants,
				});
			})
			.catch((err) => console.error(err));
	};

	render() {
		return (
			<>
				<div className="header">
					<h1>Weekend Away</h1>
					<h3>Search for UK Restaurants </h3>
				</div>

				<Search
					value={this.state.searchValue}
					onChange={this.handleSearch}
				/>

				<ListContainer restaurantList={this.state.restaurantsToDisplay} />
				<button onClick={this.clearList}>Clear</button>
			</>
		);
	}
}

export default App;
