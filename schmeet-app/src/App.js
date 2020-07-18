import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { Switch, Route } from "react-router-dom";
import NewMeeting from "./components/NewMeeting";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const themeObject = {
	palette: {
		primary: {
			main: "#2196f3",
		},
		type: "dark",
	},
};

const useDarkMode = () => {
	const [theme, setTheme] = useState(themeObject);

	const {
		palette: { type },
	} = theme;
	const toggleDarkMode = () => {
		const updatedTheme = {
			...theme,
			palette: {
				...theme.palette,
				type: type === "light" ? "dark" : "light",
			},
		};
		setTheme(updatedTheme);
		return updatedTheme.palette.type;
	};
	return [theme, toggleDarkMode];
};

function App() {
	const [theme, toggleDarkMode] = useDarkMode();
	const themeConfig = createMuiTheme(theme);
	return (
		<div className="App">
			<MuiThemeProvider theme={themeConfig}>
				<NavBar theme={themeConfig} toggleDarkMode={toggleDarkMode} />
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
