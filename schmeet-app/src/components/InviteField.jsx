import React from "react";
import "../App.css";
import { TextField, Chip } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

class InviteField extends React.Component {
	state = {
		value: "",
		emails: [],
	};

	handleChange = (evt) => {
		this.setState({
			value: evt.target.value,
		});
	};

	handleKeyDown = (evt) => {
		if (["Enter", "Tab", ","].includes(evt.key)) {
			evt.preventDefault();

			var email = this.state.value.trim();

			if (email) {
				this.setState({
					emails: [...this.state.emails, email],
					value: "",
				});
			}
		}
	};

	handleDelete = (evt) => {};

	render() {
		const len = this.state.emails.length;
		return (
			<div>
				<TextField
					className="TextInput"
					label="Invitees"
					value={this.state.value}
					onChange={this.handleChange}
					onKeyDown={this.handleKeyDown}
					autoFocus={true}
					style={{ marginBottom: len === 0 ? "42px" : "0px" }}
				/>
				<br />
				{this.state.emails.map((email) => (
					<Chip
						className="Chip"
						key={email}
						label={email}
						onDelete={this.handleDelete}
						color="primary"
					></Chip>
				))}
			</div>
		);
	}
}

export default InviteField;
