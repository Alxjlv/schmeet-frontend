import React from "react";
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
const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
});

function HomePage() {
	const classes = useStyles();

	return (
		<div>
			<CssBaseline />
			<Card className={classes.root}>
				<CardActionArea>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Meeting Title
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
							align="left"
							gutterBottom
						>
							Here is the meeting description Lorem ipsum dolor
							sit amet consectetur adipisicing elit. Accusantium
							cumque duc
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
		</div>
	);
}

export default HomePage;
