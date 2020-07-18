import React from "react";
import "../App.css";
import { Grid, CssBaseline, FormControl, FormHelperText, InputLabel, NativeSelect, TextField, Typography, Button } from "@material-ui/core";
import BaseCalendar from "./BaseCalendar";
import InviteField from "./InviteField";
// import { ReactComponent } from "*.svg";

class NewMeeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isShowCalendar: false, title: "", description: "" };
		this.addMeeting = this.addMeeting.bind(this);
	}

	state = {
		meetingTitle: ""
	}

	showCalendar() {
		this.setState({
			isShowCalendar: true
		});
	}

	hideCalendar() {
		this.setState({
			isShowCalendar: false
		});
	}

	addMeeting(data) {
		console.log("hello");
		const newMeeting = {
			...data,
			title: this.state.title,
			description: this.state.description,
			link: "REPLACE THIS WITH ZOOM LINK",
		};
		console.log(newMeeting);
		// Now save the new meeting
		// TODO: Tait save meeting into JSON file
		window.location = "/";
	}

<<<<<<< HEAD
	handleNewInvitee = () => {
		this.hideCalendar();
	}
=======
	handleTitleChange = (evt) => {
		this.setState({
		  meetingTitle: evt.target.value
		});
		console.log(this.state.meetingTitle)
	  };
>>>>>>> master

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

				<InviteField onNewInvitee={this.handleNewInvitee}/>

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
							inputRef={(c) => {
								this.state.description = c?.value || "";
							}}
						/>
					</Grid>
					<Grid item xs={12}>
					<FormControl className="TextInput">
						<InputLabel htmlFor="age-native-helper">Duration</InputLabel>
						<NativeSelect
						inputProps={{
							name: 'age',
							id: 'age-native-helper',
						}}
						>
						<option aria-label="None" value="" />
						<option value={30}>30</option>
						<option value={60}>60</option>
						<option value={90}>90</option>
						<option value={120}>120</option>
						</NativeSelect>
						<FormHelperText>Length of meeting (in minutes)</FormHelperText>
					</FormControl>
					</Grid>
					<Grid item xs={12}>
						{isShowCalendar ? (
							<>
								<BaseCalendar onAddMeeting={this.addMeeting} meetingTitle={this.state.meetingTitle} />
								<Button
									variant="contained"
									color="primary"
									size="large"
								>
									Create Meeting
								</Button>
							</>
						) : (
							<Button
								variant="contained"
								color="primary"
								size="large"
								onClick={() => {
									this.showCalendar();
								}}
							>
								Find Times
							</Button>
						)}
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default NewMeeting;
