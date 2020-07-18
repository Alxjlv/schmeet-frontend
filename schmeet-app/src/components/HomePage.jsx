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
	CardMedia,
	Paper,
	Divider,
} from "@material-ui/core";
import appointments from "../demo-data/today-appointments";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
});

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
					4PM - 4:30PM
				</Typography>
			</CardContent>
		</CardActionArea>
		<CardActions>
			<Button size="medium" color="primary">
				Share
			</Button>
			<Button size="medium" color="primary">
				Join
			</Button>
		</CardActions>
	</Card>
);

export default class ExercisesList extends Component {
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
						}}
					>
						<Typography gutterBottom variant="h4" component="h2">
							{this.intToDay(i)}
						</Typography>
						<Divider />
						{this.cardList(i)}
					</Paper>
				</div>
			);
		}

		return (
			<div>
				<CssBaseline />
				<div style={{ display: "flex" }}>{columns}</div>
			</div>
		);
	}
}
