import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			city: "",
			restaurants: this.props.restaurantList,
		};
	}

	clearList = (e) => {
		console.log("Clearing List...");
		this.setState({
			restaurants: [],
		});
	};

	render() {
		let restaurants = this.props.restaurantList.map((element, index) => {
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
					<button type="">Search</button>
					<button onClick={(e) => this.clearList(e)}>Clear</button>
					<ul>{restaurants}</ul>
				</form>
			</>
		);
	}
}

export default List;
