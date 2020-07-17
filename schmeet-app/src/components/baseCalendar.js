import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
	Scheduler,
	WeekView,
	Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import appointments from "../demo-data/today-appointments";

const BlackOutAppointment = ({ children, style, ...restProps }) => (
	<Appointments.Appointment
		onClick={() => console.log("cliekc")}
		{...restProps}
		style={{
			...style,
			backgroundColor: "gray",
			borderRadius: "8px",
		}}
	>
		{children}
	</Appointments.Appointment>
);

const style = (theme) => ({
	todayCell: {
		backgroundColor: fade(theme.palette.primary.main, 0.1),
		"&:hover": {
			backgroundColor: fade(theme.palette.primary.main, 0.14),
		},
		"&:focus": {
			backgroundColor: fade(theme.palette.primary.main, 0.16),
		},
	},
	weekendCell: {
		backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
		"&:hover": {
			backgroundColor: fade(
				theme.palette.action.disabledBackground,
				0.04
			),
		},
		"&:focus": {
			backgroundColor: fade(
				theme.palette.action.disabledBackground,
				0.04
			),
		},
	},
	today: {
		backgroundColor: fade(theme.palette.primary.main, 0.16),
	},
	weekend: {
		backgroundColor: fade(theme.palette.action.disabledBackground, 0.06),
	},
});

const TimeTableCellBase = ({ classes, ...restProps }) => {
	console.log(classes);
	console.log(restProps);
	const { startDate } = restProps;
	const date = new Date(startDate);
	return (
		<WeekView.TimeTableCell
			{...restProps}
			onClick={() => console.log(restProps)}
		/>
	);
};

const TimeTableCell = withStyles(style, { name: "TimeTableCell" })(
	TimeTableCellBase
);

export default class BaseCalendar extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			data: appointments,
		};
	}

	render() {
		const { data } = this.state;

		return (
			<Paper>
				<Scheduler data={data} height={"100%"}>
					<ViewState />
					<WeekView
						startDayHour={9}
						endDayHour={19}
						timeTableCellComponent={TimeTableCell}
					/>
					<Appointments appointmentComponent={BlackOutAppointment} />
				</Scheduler>
			</Paper>
		);
	}
}
