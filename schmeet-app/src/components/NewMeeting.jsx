import React from "react";
import "../App.css";
import {
	Grid,
	CssBaseline,
	Paper,
	TextField,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { sizing } from "@material-ui/system";
import BaseCalendar from "./baseCalendar.js"
import InviteField from "./InviteField.jsx";

const useStyles = makeStyles({
	root: {
		// width: "75%",
	},
	textField: {
		width: "60%",
	},
});

function NewMeeting() {
	const classes = useStyles();

	return (
		<div>
			<CssBaseline />

			<Typography
				variant="h2"
				style={{
					marginTop: "30px",
				}}
				gutterBottom
			>
				New Meeting
			</Typography>

			<Grid container spacing={3} className="TextInput">
				<Grid item xs={12}>
					<InviteField/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id="title"
						label="Title"
						className="TextInput"
						autoFocus="true"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id="description"
						label="Description"
						className="TextInput"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id="length"
						label="Length (in minutes)"
						className="TextInput"
					/>
				</Grid>
				<Grid item xs={12}>
					<BaseCalendar/>
				</Grid>
			</Grid>
		</div>
	);
}

export default NewMeeting;
