import React, { Component } from "react";

class Search extends Component {
	render() {
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<label>Where are you dining out this weekend?</label>
					<input
						type="text"
						placeholder="Enter city here..."
						value={this.props.value}
						onChange={this.props.onChange}
					/>
					<button type="submit">Search</button>
				</form>
			</>
		);
	}
}

export default Search;
