import React from "react";
import "../App.css";
import { Grid, CssBaseline, FormControl, InputLabel, NativeSelect, TextField, Typography, Button } from "@material-ui/core";
import InviteField from "./InviteField";
import CalendarPicker from "./CalendarPicker";

class NewMeeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowCalendar: false,
			isEventSelected: false,
			title: "",
			description: "",
			duration: null,
			event: null
		};
		this.addMeeting = this.addMeeting.bind(this);
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

	handleNewInvitee = (invitees) => {
		this.setState({
			invitees: invitees
		})
		this.hideCalendar();
	}

	handleTitleChange = (event) => {
		this.setState({
		  title: event.target.value
		});
	};

	handleDescriptionChange = (event) => {
		this.setState({
			description: event.target.value
		});
	}

	handleDurationChange = (event) => {
		this.setState({
			duration: event.target.value
		});
		this.hideCalendar();
	}

	handleEventSelection = (event) => {
		this.setState({
			event: event
		});
	}

	render() {
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
							onChange={this.handleDescriptionChange}
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
						onChange={this.handleDurationChange}
						>
							<option aria-label="None" value="" />
							<option value={30}>30 minutes</option>
							<option value={60}>60 minutes</option>
							<option value={90}>90 minutes</option>
							<option value={120}>120 minutes</option>
						</NativeSelect>
					</FormControl>
					</Grid>
					<Grid item xs={12}>
						{this.state.isShowCalendar ? (
							<>
								<Typography variant="h4" style={{marginTop: "50px"}}>Select a meeting time</Typography>
								<CalendarPicker duration={this.state.duration} onEventSelection={this.handleEventSelection}/>
								{this.state.event === null ? (
								<Button
									variant="contained"
									color="primary"
									size="large"
									disabled
								>
									Create Meeting
								</Button>
								) : (
								<Button
									variant="contained"
									color="primary"
									size="large"
								>
									Create Meeting
								</Button>
								)}
							</>
						) : (
							this.state.duration === null ? (
							<Button
								variant="contained"
								color="primary"
								size="large"
								disabled
							>
								Find Times
							</Button>
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
							)
						)}
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default NewMeeting;
