import React, { Component } from "react";

class Search extends Component {
	render() {
		return (
			<>
				<form>
					<label>What city are you visiting?</label>
					<input
						type="text"
						value={this.props.value}
						onChange={this.props.onChange}
					/>
				</form>
			</>
		);
	}
}

export default Search;
