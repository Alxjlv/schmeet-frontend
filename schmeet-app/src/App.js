import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import BaseCalendar from "./components/baseCalendar";
import { Switch, Route, withRouter } from "react-router-dom";
import NewMeeting from "./components/NewMeeting";
import HomePage from "./components/HomePage";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route exact path="/NewMeeting" component={NewMeeting}></Route>
				<Route exact path="/" component={HomePage}></Route>
			</Switch>
		</div>
	);
}

export default App;
