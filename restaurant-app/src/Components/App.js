import React, { Component } from "react";
import ListContainer from "./ListContainer";
import Search from "./Search";
import FaveCounter from "./FaveCounter";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchValue: "",
			city: "",
			restaurantData: [],
			isLoaded: false,
			newRestaurant: "",
			faveList: [],
			faveCounter: 0,
		};
	}

	addNewRestaurant = () => {
		const input = prompt("Enter a new restaurant name");
		const id = input + Date.now();
		this.setState({
			newRestaurant: input,
		});

		const addingNewRestaurant = {
			BusinessName: input,
			AddressLine2: "The Best Place Ever,",
			AddressLine3: "Awesome Lane",
			PostCode: "FAB ULS",
			isFavourited: false,
			id: id,
		};

		this.setState(
			{
				restaurantData: [addingNewRestaurant].concat(this.state.restaurantData),
			},
			() => {}
		);
	};

	deleteRestaurant = (id) => {
		this.setState({
			restaurantData: this.state.restaurantData.filter(
				(restaurant) => restaurant.id !== id
			),
		});
	};

	handleCityChange = (city) => {
		this.setState({ city });
	};

	updateRestaurantData = (response) => {
		this.setState({ restaurantData: response });
	};

	updateIsLoaded = (stat) => {
		this.setState({ isLoaded: stat });
	};

	clearList = (e) => {
		e.preventDefault();
		console.log("Clearing List...");
		this.setState({
			restaurantData: [],
		});
	};

	handleSearch = (e) => {
		this.setState({
			searchValue: e.target.value,
		});
	};

	handleFavourite = (id) => {
		const updatedRestaurantData = this.state.restaurantData.map(
			(restaurant) => {
				if (restaurant.id === id) {
					return {
						...restaurant,
						isFavourited: !restaurant.isFavourited,
					};
				}
				return restaurant;
			}
		);
		this.setState({ restaurantData: updatedRestaurantData });
	};

	addFavouriteToList = (restaurant) => {
		this.setState((prevState) => ({
			faveList: [...prevState.faveList, restaurant],
			faveCounter: prevState.faveCounter + 1,
		}));
	};

	render() {
		return (
			<>
				<Container>
					<div className="header">
						<a href="#favourites">Favourite List ({this.state.faveCounter})</a>
						<FaveCounter />

						<h1>Weekend Away</h1>
						<h3>Search for UK Restaurants </h3>
					</div>

					<Search
						value={this.state.searchValue}
						onChange={this.handleSearch}
						handleCityChange={this.handleCityChange}
						updateRestaurantData={this.updateRestaurantData}
						updateIsLoaded={this.updateIsLoaded}
						clearList={this.clearList}
					/>

					<Button
						variant="warning"
						size="sm"
						onClick={this.addNewRestaurant}>
						Add Restaurant
					</Button>

					<ListContainer
						restaurants={this.state.restaurantData}
						isLoaded={this.state.isLoaded}
						handleFavourite={this.handleFavourite}
						newRestaurant={this.state.newRestaurant}
						deleteRestaurant={this.deleteRestaurant}
						addFavouriteToList={this.addFavouriteToList}
					/>
				</Container>
			</>
		);
	}
}

export default App;

// componentDidMount() {
// const apiKey = process.env.REACT_APP_X_RapidAPI_Key;
// const city = this.state.searchValue;
// console.log("the city is....", city);

// const options = {
// 	method: "GET",
// 	headers: {
// 		"X-RapidAPI-Key": process.env.REACT_APP_X_RapidAPI_Key,
// 		// "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
// 		"X-RapidAPI-Host": "wyre-data.p.rapidapi.com",
// 	},
// };

// fetch(
// 	`https://wyre-data.p.rapidapi.com/restaurants/town/hambleton`,
// 	options
// )
// 	.then((response) => response.json())
// 	.then((response) => {
// 		console.log("the response is....", response);
// 		// const filteredRestaurants = response.filter((restaurant) => {
// 		// 	return restaurant.location.city
// 		// 		.toLowerCase()
// 		// 		.includes(textValue.toLowerCase());
// 	});
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
