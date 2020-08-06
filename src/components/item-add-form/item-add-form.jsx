import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {

	state = {
		label: ""
	};

	onLabelChange = (e) => {
		this.setState({
			label: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { onItemAdded = () => {} } = this.props;
		const { label } = this.state;
		this.setState({ label: "" });
		if (label.trim()) {
			onItemAdded(label);
		}
	};

	render() {
		return (
			<form className="item-add-form d-flex "
						onSubmit={this.onSubmit}>

				<input type="text"
							className="form-control new-todo-label"
							value={this.state.label}
							onChange={this.onLabelChange}
							placeholder="What needs to be done?" />

				<button type="submit"
								className="btn btn-outline-secondary">
							Add
				</button>
			</form>
		);
	}
}
