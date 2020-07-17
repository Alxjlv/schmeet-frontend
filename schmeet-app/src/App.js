import React from "react";
import logo from "./logo.svg";
import {
	DatePicker,
	TimePicker,
	DateTimePicker,
	MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import "./App.css";
import DateFnsUtils from "@date-io/date-fns";

function App() {
	return (
		<div className="App">
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<DatePicker />
				<TimePicker />
				<DateTimePicker />
			</MuiPickersUtilsProvider>
		</div>
	);
}

export default App;
