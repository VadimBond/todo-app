import React from "react";

import "./todo-list-item.css";

const TodoListItem = ({ important, done, label, onToggleImportant, onToggleDone, onDelete }) => {

	let classNames = "todo-list-item";
	if (important) {
		classNames += " important";
	}
	if (done) {
		classNames += " done";
	}

	return (
		<span className={classNames}>
      <span
				className="todo-list-item-label"
				onClick={onToggleDone}>{label}</span>

      <button type="button"
							className="btn btn-outline-success btn-sm float-right"
							onClick={onToggleImportant}>
        <svg width="100%" height="100%" viewBox="0 0 16 16" className="bi bi-exclamation-triangle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
					<path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
				</svg>
      </button>

      <button type="button"
							className="btn btn-outline-danger btn-sm float-right"
							onClick={onDelete}>
        <svg width="100%" height="100%" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
					<path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
				</svg>
      </button>
    </span>
	);
};

export default TodoListItem;
