import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { Switch, Route } from "react-router-dom";
import NewMeeting from "./components/NewMeeting";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#2196f3",
		},
	},
});

function App() {
	return (
		<div className="App">
			<MuiThemeProvider theme={theme}>
				<NavBar />
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
