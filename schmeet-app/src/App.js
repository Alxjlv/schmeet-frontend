import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { Switch, Route } from "react-router-dom";
import NewMeeting from "./components/NewMeeting";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { appointments } from "./demo-data/appointments";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
	const [open, setOpen] = React.useState(false);
	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};
	const [darkState, setDarkState] = useState(false);
	const palletType = darkState ? "dark" : "light";
	const darkTheme = createMuiTheme({
		palette: {
			primary: {
				main: "#2196f3",
			},
			type: palletType,
		},
	});
	const handleThemeChange = () => {
		setDarkState(!darkState);
	};

	if (typeof Storage !== "undefined") {
		if (localStorage.getItem("meetings") == undefined) {
			localStorage.setItem("meetings", JSON.stringify(appointments));
			console.log("added data");
		}
	} else {
		alert(
			"Yikes! Your browser doesn't support Web Storage. This won't work for you sorry"
		);
	}

	return (
		<div className="App">
			<MuiThemeProvider theme={darkTheme}>
				<NavBar theme={darkState} toggleDarkMode={handleThemeChange} />
				<Switch>
					<Route
						exact
						path="/NewMeeting"
						component={() => <NewMeeting openToast={handleClick} />}
					></Route>
					<Route exact path="/" component={HomePage}></Route>
				</Switch>
				<Footer />
				<Snackbar
					open={open}
					autoHideDuration={1000}
					onClose={handleClose}
				>
					<Alert onClose={handleClose} severity="success">
						Successfully created new meeting!
					</Alert>
				</Snackbar>
			</MuiThemeProvider>
		</div>
	);
}

export default App;
