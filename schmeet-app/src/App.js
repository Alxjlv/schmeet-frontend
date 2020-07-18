import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { Switch, Route } from "react-router-dom";
import NewMeeting from "./components/NewMeeting";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route exact path="/NewMeeting" component={NewMeeting}></Route>
				<Route exact path="/" component={HomePage}></Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
