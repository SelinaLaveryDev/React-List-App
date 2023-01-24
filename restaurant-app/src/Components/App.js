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
			// restaurantList: this.props.restaurantList,
		};
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
