import React from "react";
import "../App.css";
import { AppBar, Avatar, Button, Toolbar } from "@material-ui/core";
import logoLight from "../images/schmeet-light.png";
import logoDark from "../images/schmeet-dark.png";

function App() {
	return (
		<div className="NavBar">
			<AppBar className="TopNavbar" color="White">
				<Toolbar>
					<React.Fragment>
						<img className="NavBarItem" src={logoLight}/>
					</React.Fragment>
					<React.Fragment style={{alignContent: "right"}}>
						<Button className="NavBarItem" variant="contained" color="primary" style={{textAlign: "right"}}>
							New Meeting
						</Button>
						<Avatar className="NavBarItem" style={{textAlign: "right"}}/>
					</React.Fragment>
				</Toolbar>
			</AppBar>
		</div>
	);

}

export default App;
