import React from "react";
import {
	Card,
	Button,
	Typography,
	CardContent,
	CardActions,
	Avatar,
	Grid
} from "@material-ui/core";
import {
	AvatarGroup
} from "@material-ui/lab";

function MeetingCard(props) {
    // const members = 

    const joinButtonStyle = {
        marginRight: '8px'
    }

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
                        {props.day ===1 && <Button
                            variant="contained"
                            size="medium"
                            color="primary"
                            href={props.meeting.link}
                            target="blank"
                            style={joinButtonStyle}>
                            Join
                        </Button>}
                        <Button
                            variant="outlined"
                            size="medium"
                            color="primary">
                            Invite
                        </Button>
                    </Grid>
                    <AvatarGroup max={3}>
                        <Avatar alt="Tait Fuller">TF</Avatar>
                        <Avatar alt="Alex Verkerk">AV</Avatar>
                        <Avatar alt="Oliver Chamberlain">OC</Avatar>
                        <Avatar alt="Ben Piper">BP</Avatar>
                    </AvatarGroup>
                </Grid>
            </CardActions>
        </Card>
    )
}

export default MeetingCard;