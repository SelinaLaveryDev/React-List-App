import React, { Component } from "react";
import ListItem from "./ListItem";
import ListContainer from "./ListContainer";

class App extends Component {
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

	// handleSearch = (e) => {
	// 	e.preventDefault();
	// 	console.log("handling search...");
	// 	this.setState({
	// 		city:
	// 	})
	// };

	render() {
		// let restaurants = this.state.restaurantList.map((element, index) => {
		// 	return (
		// 		<ListItem
		// 			restaurant={element}
		// 			key={index}
		// 		/>
		// 	);
		// });
		return (
			<>
				<h1>Weekend Away</h1>
				<form>
					<label>Where are you dining out this weekend?</label>
					<input
						type="text"
						// value={this.state.city}
						placeholder="Type city here..."
					/>
					<button onClick={this.handleSearch}>Search</button>
					<button onClick={this.clearList}>Clear</button>
					<ListContainer restaurantList={this.props.restaurantList} />
				</form>
			</>
		);
	}
}

export default App;
