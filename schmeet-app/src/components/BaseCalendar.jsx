import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
	ViewState,
	EditingState,
	IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
	Scheduler,
	WeekView,
	Appointments,
	AppointmentForm,
	DragDropProvider,
} from "@devexpress/dx-react-scheduler-material-ui";

import { appointments } from "../demo-data/appointments";

const currentDate = "2020-07-13";
const BaseCalendar = (props) => {
	const [data, setData] = React.useState(appointments);
	const [addedAppointment, setAddedAppointment] = React.useState({});
	const [
		isAppointmentBeingCreated,
		setIsAppointmentBeingCreated,
	] = React.useState(false);

	const onCommitChanges = ({ added, changed, deleted }) => {
		props.onAddMeeting(added);
	};

	const onAddedAppointmentChange = React.useCallback((appointment) => {
		appointment.title = props.meetingTitle;
		setAddedAppointment(appointment);
		setIsAppointmentBeingCreated(true);
	});

	const TimeTableCell = React.useCallback(
		React.memo(({ onDoubleClick, ...restProps }) => (
			<WeekView.TimeTableCell
				{...restProps}
				onDoubleClick={onDoubleClick}
			/>
		))
	);

	const CommandButton = React.useCallback(
		({ id, ...restProps }) => {
			if (id === "deleteButton") {
				return (
					<AppointmentForm.CommandButton
						id={id}
						{...restProps}
						disabled={true}
					/>
				);
			}
			return <AppointmentForm.CommandButton id={id} {...restProps} />;
		},
		[false]
	);

	const allowDrag = React.useCallback(() => false);
	const allowResize = React.useCallback(() => false);

	const blackOutAppointment = ({ children, style, ...restProps }) => (
		<Appointments.Appointment
			{...restProps}
			style={{
				...style,
				backgroundColor: "gray",
				borderRadius: "8px",
			}}
		>
		</Appointments.Appointment>
	);

	return (
		<React.Fragment>
			<Paper style={{ margin: "100px" }}>
				<Scheduler data={data} height={700}>
					<ViewState currentDate={currentDate} />
					<EditingState
						onCommitChanges={onCommitChanges}
						addedAppointment={addedAppointment}
						onAddedAppointmentChange={onAddedAppointmentChange}
					/>
					<IntegratedEditing />
					<WeekView
						startDayHour={9}
						endDayHour={19}
						timeTableCellComponent={TimeTableCell}
						excludedDays={[0, 6]}
					/>

					<Appointments appointmentComponent={blackOutAppointment} />
					<AppointmentForm commandButtonComponent={CommandButton} />
					<DragDropProvider
						allowDrag={allowDrag}
						allowResize={allowResize}
					/>
				</Scheduler>
			</Paper>
		</React.Fragment>
	);
};

export default BaseCalendar;
