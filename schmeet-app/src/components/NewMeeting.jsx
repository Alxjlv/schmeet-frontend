import React from "react";
import "../App.css";
import { Grid, CssBaseline, TextField, Typography, Button } from "@material-ui/core";
import BaseCalendar from "./BaseCalendar";
import InviteField from "./InviteField";
// import { ReactComponent } from "*.svg";

class NewMeeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isShowCalendar: false};
	}

	state = {
		meetingTitle: ""
	}

	showCalendar() {
		this.setState({
			isShowCalendar: true
		})
	};

	handleTitleChange = (evt) => {
		this.setState({
		  meetingTitle: evt.target.value
		});
	  };

	render() {
		const isShowCalendar = this.state.isShowCalendar;

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
							value={this.state.meetingTitle}
							onChange={this.handleTitleChange}
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
						{isShowCalendar
							? <BaseCalendar meetingTitle={this.state.meetingTitle}/>
							: <Button variant="contained" color="primary" size="large" onClick={() => {this.showCalendar()}}>Find Times</Button>
						}
					</Grid>

				</Grid>
			</div>
		)
	}
}

export default NewMeeting;
