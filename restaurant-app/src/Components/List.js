import React, { Component } from "react";

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
						<li>Restaurant 1</li>
						<li>Restaurant 2</li>
						<li>Restaurant 3</li>
						<li>Restaurant 4</li>
						<li>Restaurant 5</li>
					</ul>
				</form>
			</>
		);
	}
}

export default List;
