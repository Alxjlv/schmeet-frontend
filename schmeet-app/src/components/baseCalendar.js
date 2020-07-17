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

export default class BaseCalendar extends React.PureComponent {
	constructor(props) {
		super(props);

		this.clickTableCell = this.clickTableCell.bind(this);
		this.BlackOutAppointment = this.BlackOutAppointment.bind(this);
		this.style = this.style.bind(this);
		this.TimeTableCellBase = this.TimeTableCellBase.bind(this);

		this.schedulerRef = React.createRef();

		this.addAppointment = () => {
			console.log(this.schedulerRef);
			// this.schedulerRef.current.instance.addAppointment({
			// 	text: "Website Re-Design Plan",
			// 	startDate: new Date(),
			// 	endDate: new Date(),
			// });
		};

		this.state = {
			data: appointments,
		};
	}

	BlackOutAppointment = ({ children, style, ...restProps }) => (
		<Appointments.Appointment
			onClick={(xd) => console.log(xd)}
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

	style = (theme) => ({
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
			backgroundColor: fade(
				theme.palette.action.disabledBackground,
				0.04
			),
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
			backgroundColor: fade(
				theme.palette.action.disabledBackground,
				0.06
			),
		},
	});

	TimeTableCellBase = ({ classes, ...restProps }) => {
		console.log(classes);
		console.log(restProps);
		const { startDate } = restProps;
		const date = new Date(startDate);
		return (
			<WeekView.TimeTableCell
				{...restProps}
				onClick={this.clickTableCell}
			/>
		);
	};

	TimeTableCell = withStyles(this.style, { name: "TimeTableCell" })(
		this.TimeTableCellBase
	);

	clickTableCell(props) {
		console.log(props);
		const newMeeting = {
			title: "Example New",
			startDate: props.startDate,
			endDate: props.endDate,
			id: 100,
			location: "Room 1",
		};
		this.state.data.forEach((meeting) => {
			meeting.allDay = true;
			var date = meeting.endDate;
			meeting.endDate = new Date(date.getTime() + 1 * 3600000);
		});
		this.setState((prevState) => ({
			arrayvar: [...prevState.data, newMeeting],
		}));
		this.forceUpdate();
	}

	render() {
		const { data } = this.state;

		return (
			<React.Fragment>
				<Paper>
					<Scheduler data={this.state.data} height={"100%"}>
						<ViewState />
						<WeekView
							startDayHour={9}
							endDayHour={19}
							timeTableCellComponent={this.TimeTableCell}
						/>
						<Appointments
							ref={this.schedulerRef}
							appointmentComponent={this.BlackOutAppointment}
						/>
					</Scheduler>
				</Paper>

				<button onClick={this.addAppointment}>Confirm Meeting</button>
			</React.Fragment>
		);
	}
}
