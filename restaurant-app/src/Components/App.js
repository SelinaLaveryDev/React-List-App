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

	componentDidMount() {
		const apiKey = process.env.REACT_APP_X_RapidAPI_Key;

		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": process.env.REACT_APP_X_RapidAPI_Key,
				"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
			},
		};

		fetch(
			"https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=293919&restaurant_tagcategory=10591&restaurant_tagcategory_standalone=10591&currency=USD&lunit=km&limit=30&open_now=false&lang=en_US",
			options
		)
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				// this.setState({
				// 	restaurantData: response.data,
				// 	restaurantsToDisplay: response.data,
				// });
			})
			.catch((err) => console.error(err));
	}

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

		//Take the current value of the text box
		//Fitler the restaurantList Array into a new array

		const filteredRestaurants = this.props.restaurantList.filter(
			(restaurant) => {
				return restaurant.toLowerCase().includes(textValue.toLowerCase());
			}
		);

		this.setState({
			searchValue: textValue,
			restaurantsToDisplay: filteredRestaurants,
		});
	};

	render() {
		return (
			<>
				<h1>Weekend Away</h1>
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
