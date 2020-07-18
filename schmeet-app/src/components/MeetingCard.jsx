import React from "react";
import {
	Card,
	Button,
	Typography,
	CardContent,
	CardActions,
	Avatar,
	Grid,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

import p1 from "../images/account1.png";
import p2 from "../images/account2.png";
import p3 from "../images/account3.png";
import p4 from "../images/account4.png";
import p5 from "../images/account5.png";
import p6 from "../images/account6.png";

function MeetingCard(props) {
	const profilePics = [p1, p2, p3, p4, p5, p6];
	const members = props.meeting.members.map((member) => {
		return <Avatar alt={member.name}>{member.initial}</Avatar>;
	});

	const joinButtonStyle = {
		marginRight: "8px",
	};

    const formatToHoursAndMinutes = (date) => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? "am" : "pm";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var strTime = hours + ":" + minutes + ampm;
        return strTime;
    };

	return (
		<Card style={{ maxWidth: 345, margin: 10 }}>
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
			<CardActions>
				<Grid container direction="row" justify="space-between">
					<Grid>
						{props.day === 1 && (
							<Button
								variant="contained"
								size="medium"
								color="primary"
								href={props.meeting.link}
								target="blank"
								style={joinButtonStyle}
							>
								Join
							</Button>
						)}
						<Button
							variant="outlined"
							size="medium"
							color="primary"
						>
							Invite
						</Button>
					</Grid>
					<AvatarGroup max={3}>{members}</AvatarGroup>
				</Grid>
			</CardActions>
		</Card>
	);
}

export default MeetingCard;
