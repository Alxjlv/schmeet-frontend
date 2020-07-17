import React from "react";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import "./App.css";
import DateFnsUtils from "@date-io/date-fns";
import NavBar from "./components/NavBar.jsx";

function App() {
	return (
		<div className="App">
			<NavBar/>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<DateTimePicker />
			</MuiPickersUtilsProvider>
		</div>
	);

}

export default App;
