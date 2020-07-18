import React, { Component } from "react";
import "../App.css";
import {
	Button,
	CssBaseline,
	Typography,
	Paper,
	Divider,
	Box
} from "@material-ui/core";
import MeetingCard from './MeetingCard';

export default class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	cardList(day) {
		return JSON.parse(localStorage.getItem("meetings"))
			.filter((meeting) => new Date(meeting.startDate).getUTCDay() === day)
			.sort((a, b) => {
				a = new Date(a.startDate);
				b = new Date(b.startDate);
				if (a.getTime() === b.getTime()) {
					return 0
				} else if (a.getTime() <= b.getTime()) {
					return -1;
				} else {
					return 1;
				}
			})
			.map((meeting) => {
				return (
					<MeetingCard meeting={meeting} day={day} style={{ margin: "20px" }} />
				);
			});
	}

	intToDay = (day) => {
		return [
			"Sunday 19th",
			"Monday 20th",
			"Tuesday 21st",
			"Wednesday 22nd",
			"Thursday 23rd",
			"Friday 24th",
			"Saturday 25th",
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
								i === 0 &&
								"linear-gradient(to right, #36d1dc, #5b86e5)",
						}}
					>
						<Typography
							gutterBottom
							variant="h4"
							component="h2"
							style={{
								color: i === 0 && "white",
							}}
						>
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
				<Box
					mx="auto"
					bgcolor="background.paper"
					p={1}
					style={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Button
						variant="contained"
						color="primary"
						style={{
							float: "right",
							marginRight: "20px",
							height: 40,
						}}
					>
						Previous Week
					</Button>
					<Typography gutterBottom variant="h2" component="h2">
						Schedule for 19th - 25th of July
					</Typography>
					<Button
						variant="contained"
						color="primary"
						style={{
							float: "right",
							marginRight: "20px",
							height: 40,
						}}
					>
						Next Week
					</Button>
				</Box>
				<CssBaseline />
				<div style={{ display: "flex" }}>{columns}</div>
			</div>
		);
	}
}
