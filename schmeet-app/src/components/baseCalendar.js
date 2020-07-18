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
	AppointmentTooltip,
	DragDropProvider,
} from "@devexpress/dx-react-scheduler-material-ui";

import { appointments } from "../demo-data/appointments";

const currentDate = "2018-06-27";
export default () => {
	const [data, setData] = React.useState(appointments);
	const [addedAppointment, setAddedAppointment] = React.useState({});
	const [
		isAppointmentBeingCreated,
		setIsAppointmentBeingCreated,
	] = React.useState(false);

	const onCommitChanges = React.useCallback(
		({ added, changed, deleted }) => {
			if (added) {
				const startingAddedId =
					data.length > 0 ? data[data.length - 1].id + 1 : 0;
				setData([...data, { id: startingAddedId, ...added }]);
			}
			if (changed) {
				setData(
					data.map((appointment) =>
						changed[appointment.id]
							? { ...appointment, ...changed[appointment.id] }
							: appointment
					)
				);
			}
			if (deleted !== undefined) {
				setData(
					data.filter((appointment) => appointment.id !== deleted)
				);
			}
			setIsAppointmentBeingCreated(false);
		},
		[setData, setIsAppointmentBeingCreated, data]
	);
	const onAddedAppointmentChange = React.useCallback((appointment) => {
		appointment.title = "from field";
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
			{console.log(children)}
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
