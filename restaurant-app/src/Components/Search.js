import React, { Component } from "react";
import ListItem from "./ListItem";
import ListContainer from "./ListContainer";
import FavouriteButton from "./FavouriteButton";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
				<Form onSubmit={this.handleSubmit}>
					<Form.Group
						className="mb-4"
						controlId="exampleForm.ControlInput1">
						<Form.Label>Where are you dining out this weekend?</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter city here..."
							value={this.props.city}
							onChange={this.props.handleCityChange}
						/>

						<Button
							variant="primary"
							size="sm"
							onClick={(e) => this.handleClick(e)}
							type="submit">
							Search
						</Button>
						<Button
							variant="secondary"
							size="sm"
							onClick={this.props.clearList}>
							Clear
						</Button>
					</Form.Group>
				</Form>
			</>
		);
	}
}

export default Search;
