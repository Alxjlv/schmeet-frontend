import React, { Component } from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";

import {
	Card,
	Button,
	CssBaseline,
	CardActionArea,
	Typography,
	CardContent,
	CardActions,
	Paper,
	Divider,
	Box,
	Grid,
} from "@material-ui/core";
import { appointments } from "../demo-data/appointments";

const MeetingCard = (props) => (
	<Card style={{ maxWidth: 345, margin: 10 }}>
		<CardActionArea>
			<CardContent>
				<Typography gutterBottom variant="h6" component="h4">
					{props.meeting.title}
				</Typography>
				<Typography
					variant="body2"
					color="textSecondary"
					component="p"
					align="left"
					gutterBottom
				>
					{props.meeting.description}
				</Typography>
				<Typography variant="subtitle2" align="left">
					{formatToHoursAndMinutes(props.meeting.startDate)} -{" "}
					{formatToHoursAndMinutes(props.meeting.endDate)}
				</Typography>
			</CardContent>
		</CardActionArea>
		<CardActions>
			<Button size="medium" color="primary">
				Share
			</Button>
			<Button size="medium" color="primary" href={props.meeting.link} target="blank">
				Join
			</Button>
		</CardActions>
	</Card>
);

const formatToHoursAndMinutes = (date) => {
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? "pm" : "am";
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? "0" + minutes : minutes;
	var strTime = hours + ":" + minutes + ampm;
	return strTime;
};

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		height: 140,
		width: 100,
	},
	control: {
		padding: theme.spacing(2),
	},
}));

export default class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			meetings: appointments,
		};
	}

	cardList(day) {
		return this.state.meetings
			.filter((meeting) => meeting.startDate.getDay() - 1 == day)
			.map((meeting) => {
				return (
					<MeetingCard meeting={meeting} style={{ margin: "20px" }} />
				);
			});
	}

	intToDay = (day) => {
		return [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday",
		][day];
	};

	render() {
		const numColumns = 5;
		const columns = [];
		for (let i = 0; i < numColumns; i++) {
			columns.push(
				<div style={{ flexGrow: 1, flexBasis: 1 }}>
					<Paper
						style={{
							margin: "5px",
							paddingTop: 15,
							minHeight: "100%",
							background:
								i == 1 &&
								"linear-gradient(to right, #36d1dc, #5b86e5)",
						}}
					>
						<Typography
							gutterBottom
							variant="h4"
							component="h2"
							style={{
								color: i == 1 && "white",
							}}
						>
							{this.intToDay(i)} {13 + i + "th"}
						</Typography>
						<Divider />
						{this.cardList(i)}
					</Paper>
				</div>
			);
		}

		return (
			<div>
				<Box
					mx="auto"
					bgcolor="background.paper"
					p={1}
					style={{ display: "flex", justifyContent: "space-between" }}
				>
					<Button
						variant="contained"
						color="primary"
						style={{
							float: "right",
							marginRight: "20px",
							height: 50,
						}}
					>
						Next Week
					</Button>
					<Typography gutterBottom variant="h2" component="h2">
						Schedule for 13th - 18th of July
					</Typography>
					<Button
						variant="contained"
						color="primary"
						style={{
							float: "right",
							marginRight: "20px",
							height: 50,
						}}
					>
						Previous Week
					</Button>
				</Box>
				<CssBaseline />
				<div style={{ display: "flex" }}>{columns}</div>
			</div>
		);
	}
}
