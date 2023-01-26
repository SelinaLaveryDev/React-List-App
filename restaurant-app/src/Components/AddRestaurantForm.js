import React, { Component } from "react";

class AddRestaurantForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
		};
	}

	handleInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.handleSubmit(event, this.state.name);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.handleInputChange}
					/>
				</label>
				<input
					type="submit"
					value="Add Restaurant"
				/>
			</form>
		);
	}
}

export default AddRestaurantForm;
