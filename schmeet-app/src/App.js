import React from "react";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import "./App.css";
import DateFnsUtils from "@date-io/date-fns";

function App() {
	return (
		<div className="App">
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<DateTimePicker />
			</MuiPickersUtilsProvider>
		</div>
	);
}

export default App;
