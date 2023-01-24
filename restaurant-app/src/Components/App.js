import React, { Component } from "react";
import ListItem from "./ListItem";
import ListContainer from "./ListContainer";
import Search from "./Search";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchValue: "",
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

	// handleSearch = (e) => {
	// 	e.preventDefault();
	// 	console.log("handling search...");
	// 	this.setState({
	// 		city:
	// 	})
	// };

	render() {
		return (
			<>
				<h1>Weekend Away</h1>
				<Search value={this.state.searchValue} />
				<ListContainer restaurantList={this.props.restaurantList} />
				<button onClick={this.clearList}>Clear</button>
			</>
		);
	}
}

export default App;
