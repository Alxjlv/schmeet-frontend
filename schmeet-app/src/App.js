import React from "react";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import "./App.css";
import DateFnsUtils from "@date-io/date-fns";
import AppBar from "@material-ui/core/AppBar";
import logoLight from "./images/schmeet-light.png";
import logoDark from "./images/schmeet-dark.png"

function App() {
	return (
		<div className="App">
			<AppBar className="TopNavbar" position="static" color="White">
				<img src={logoLight} width="200px"/>
			</AppBar>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<DateTimePicker />
			</MuiPickersUtilsProvider>
		</div>
	);

}

export default App;
