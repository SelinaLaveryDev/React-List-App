import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			city: "",
			restaurantList: this.props.restaurantList,
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
		console.log("handling search...");
	};

	render() {
		let restaurants = this.state.restaurantList.map((element, index) => {
			return (
				<ListItem
					restaurant={element}
					key={index}
				/>
			);
		});
		return (
			<>
				<h1>Weekend Away</h1>
				<form>
					<label>Where are you dining out this weekend?</label>
					<input
						type="text"
						name="City"
						placeholder="Type city here..."
					/>
					<button onClick={this.handleSearch}>Search</button>
					<button onClick={this.clearList}>Clear</button>
					<ul>{restaurants}</ul>
				</form>
			</>
		);
	}
}

export default List;
