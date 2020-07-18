import React from "react";
import "../App.css";
import {
	Grid,
	CssBaseline,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	TextField,
	Typography,
	Button,
} from "@material-ui/core";
import InviteField from "./InviteField";
import CalendarPicker from "./CalendarPicker";
import { Redirect } from "react-router-dom";

class NewMeeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowCalendar: false,
			isEventSelected: false,
			redirect: false,
			invitees: null,
			title: "",
			description: "",
			duration: 30,
			event: null,
		};
		this.createMeeting = this.createMeeting.bind(this);
	}

	showCalendar() {
		this.setState({
			isShowCalendar: true,
		});
	}

	hideCalendar() {
		this.setState({
			isShowCalendar: false,
		});
	}

	handleInviteeChange = (invitees) => {
		this.setState({
			invitees: invitees,
		});
		this.hideCalendar();
	};

	handleTitleChange = (event) => {
		this.setState({
			title: event.target.value,
		});
	};

	handleDescriptionChange = (event) => {
		this.setState({
			description: event.target.value,
		});
	};

	handleDurationChange = (event) => {
		this.setState({
			duration: event.target.value,
		});
	};

	handleEventSelection = (event) => {
		this.setState({
			event: event,
		});
	};

	createMeeting() {
		const members = this.state.invitees.map((invitee) => {
			var getInitials = function (string) {
				var names = string.split(" "),
					initials = names[0].substring(0, 1).toUpperCase();

				if (names.length > 1) {
					initials += names[names.length - 1]
						.substring(0, 1)
						.toUpperCase();
				}
				return initials;
			};
			return {
				name: invitee,
				initial: getInitials(invitee),
			};
		});
		const newMeeting = {
			title: this.state.title,
			startDate: this.state.event.startDate,
			endDate: this.state.event.endDate,
			description: this.state.description,
			link:
				"https://zoom.us/j/91218086919?pwd=SGpjMFhGMGhIMTV4QzYxVy9aelZzZz09", // TODO: Update Zoom Link
			members: members,
		};
		console.log(newMeeting);

		const meetings = JSON.parse(localStorage.getItem("meetings"));
		meetings.push(newMeeting);
		localStorage.setItem("meetings", JSON.stringify(meetings));

		this.props.openToast();
		this.setState({
			redirect: true,
		});
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to="/"></Redirect>;
		}

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

				<InviteField onChange={this.handleInviteeChange} />

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
							<InputLabel htmlFor="age-native-helper">
								Duration
							</InputLabel>
							<Select
								displayEmpty
								value={this.state.duration}
								inputProps={{
									name: "age",
									id: "age-native-helper",
								}}
								onChange={this.handleDurationChange}
							>
								<MenuItem value={30}>
									30 minutes (default)
								</MenuItem>
								<MenuItem value={60}>60 minutes</MenuItem>
								<MenuItem value={90}>90 minutes</MenuItem>
								<MenuItem value={120}>120 minutes</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						{this.state.isShowCalendar ? (
							<>
								<Typography
									variant="h4"
									style={{ marginTop: "50px" }}
								>
									Select a meeting time
								</Typography>
								<CalendarPicker
									duration={this.state.duration}
									onEventSelection={this.handleEventSelection}
								/>
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
										onClick={this.createMeeting}
									>
										Create Meeting
									</Button>
								)}
							</>
						) : this.state.duration === null ||
						  this.state.invitees === null ? (
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
						)}
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default NewMeeting;
