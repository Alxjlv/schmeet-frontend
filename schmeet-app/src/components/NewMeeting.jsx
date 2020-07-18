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
			title: "",
			description: "",
			duration: ""
		};
		this.addMeeting = this.addMeeting.bind(this);
	}

	// state = {
	// 	meetingTitle: ""
	// }

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

	handleNewInvitee = () => {
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
	}

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
							onChange={this.state.description}
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
					<Typography variant="h4" style={{marginTop: "50px"}}>Select a meeting time</Typography>
					<CalendarPicker duration={this.state.duration}/>
						{isShowCalendar ? (
							<>
								{/* <BaseCalendar onAddMeeting={this.addMeeting} meetingTitle={this.state.meetingTitle} /> */}
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
