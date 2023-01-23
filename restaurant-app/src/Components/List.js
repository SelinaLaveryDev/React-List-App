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
						value="Type city here..."
					/>
					<button type="">Search</button>
					<button>Clear</button>
					<ul>
						<ListItem />
						<ListItem />
						<ListItem />
						<ListItem />
						<ListItem />
					</ul>
				</form>
			</>
		);
	}
}

export default List;
