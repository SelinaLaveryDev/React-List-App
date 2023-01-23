import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
	// state = {}

	render() {
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
					<button>Clear</button>
					<ul>
						<ListItem name="Restaurant 1" />
						<ListItem name="Restaurant 2" />
						<ListItem name="Restaurant 3" />
						<ListItem name="Restaurant 4" />
						<ListItem name="Restaurant 5" />
					</ul>
				</form>
			</>
		);
	}
}

export default List;
