import React from "react";

const ItemStatusFilter = ({ filter, onFilterChange = () => {} }) => {

	const filterButtons = [
		{name: "all", label: "All"},
		{name: "active", label: "Active"},
		{name: "done", label: "Done"}
	];

	const buttons = filterButtons.map(({ name, label }) => {
		const isActive = name === filter;
		const classNames = "btn " + (isActive ? "btn-info" : "btn-outline-secondary");

		return (
			<button key={name}
							type="button"
							onClick={() => onFilterChange(name)}
							className={classNames}>
						{label}
			</button>
		);
	});

	return (
		<div className="btn-group item-status-filter">
			{buttons}
		</div>
	);
};

export default ItemStatusFilter;
