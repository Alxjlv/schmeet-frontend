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
} from "@material-ui/core";
import appointments from "../demo-data/today-appointments";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
});

const MeetingCard = (props) => (
	<Card style={{ maxWidth: 345 }}>
		<CardActionArea>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
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

	cardList() {
		return this.state.meetings.map((meeting) => {
			return <MeetingCard meeting={meeting} />;
		});
	}

	render() {
		return (
			<div>
				<CssBaseline />
				{this.cardList()}
			</div>
		);
	}
}
