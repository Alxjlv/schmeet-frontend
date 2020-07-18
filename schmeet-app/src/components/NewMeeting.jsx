import React from "react";
import "../App.css";
import { Grid, CssBaseline, TextField, Typography } from "@material-ui/core";
import BaseCalendar from "./BaseCalendar";
import InviteField from "./InviteField";

function NewMeeting() {
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

			<InviteField />

			<Grid container spacing={3} className="TextInput">
				<Grid item xs={12}>
					<TextField
						id="title"
						label="Title"
						className="TextInput"
						autoFocus={true}
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
					<BaseCalendar />
				</Grid>
			</Grid>
		</div>
	);
}

export default NewMeeting;
