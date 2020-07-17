import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import BaseCalendar from "./components/baseCalendar";

function App() {
	return (
		<div className="App">
			<NavBar/>
			<BaseCalendar />
		</div>
	);

}

export default App;
