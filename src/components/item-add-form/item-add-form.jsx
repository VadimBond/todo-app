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
		this.props.onItemAdded(this.state.label);
		this.setState({
			label: ""
		});
	};

	render() {

		return (
			<form className="item-add-form d-flex w-100 align-items-center"
						onSubmit={this.onSubmit} >
				<input type="text"
							 className="form-control col-10 mr-1"
							 onChange={this.onLabelChange}
							 placeholder="What needs to be done"
							 value={this.state.label} />
				<button className="btn btn-outline-secondary col-2" >
					Add Item
				</button>
			</form>
		);
	}
}
