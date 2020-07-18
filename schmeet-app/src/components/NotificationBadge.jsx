import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import NotificationsIcon from "@material-ui/icons/Notifications";
import WarningIcon from "@material-ui/icons/Warning";
import { IconButton, Menu, MenuItem, Badge } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const StyledMenu = withStyles({
	paper: {
		border: "1px solid #d3d4d5",
	},
})((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "center",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "center",
		}}
		{...props}
	/>
));

const StyledMenuItem = withStyles((theme) => ({
	root: {
		// "&:focus": {
		// 	backgroundColor: theme.palette.primary.main,
		// 	"& .MuiListItemIcon-root, & .MuiListItemText-primary": {
		// 		color: theme.palette.common.white,
		// 	},
		// },
	},
}))(MenuItem);

export default function NotificationBadge() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton>
				<Badge
					badgeContent={4}
					color="primary"
					aria-controls="customized-menu"
					aria-haspopup="true"
					variant="contained"
					// color="primary"
					onClick={handleClick}
				>
					<NotificationsIcon />
				</Badge>
			</IconButton>

			<StyledMenu
				id="customized-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<StyledMenuItem>
					<Alert severity="info" style={{ width: "100%" }}>
						Alice invited you to a meeting!
					</Alert>
				</StyledMenuItem>
				<StyledMenuItem>
					<Alert severity="success" style={{ width: "100%" }}>
						Successfully scheduled meeting at 10:30 AM 07-20
					</Alert>
				</StyledMenuItem>
				<StyledMenuItem>
					<Alert severity="warning" style={{ width: "100%" }}>
						You have 2 conflicting meetings on Thursday, 16th of
						July
					</Alert>
				</StyledMenuItem>
				<StyledMenuItem>
					<Alert severity="info" style={{ width: "100%" }}>
						Steven has declined your "Scrum meeting" invitation
					</Alert>
				</StyledMenuItem>
			</StyledMenu>
		</div>
	);
}
