import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { Switch, Route } from "react-router-dom";
import NewMeeting from "./components/NewMeeting";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function App() {
	const [darkState, setDarkState] = useState(false);
	const palletType = darkState ? "dark" : "light";
	const darkTheme = createMuiTheme({
		palette: {
			type: palletType,
		},
	});
	const handleThemeChange = () => {
		setDarkState(!darkState);
	};
	return (
		<div className="App">
			<MuiThemeProvider theme={darkTheme}>
				<NavBar theme={darkState} toggleDarkMode={handleThemeChange} />
				<Switch>
					<Route
						exact
						path="/NewMeeting"
						component={NewMeeting}
					></Route>
					<Route exact path="/" component={HomePage}></Route>
				</Switch>
				<Footer />
			</MuiThemeProvider>
		</div>
	);
}

export default App;
