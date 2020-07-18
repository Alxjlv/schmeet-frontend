import React from "react";
import './CalendarPicker.css';
import { freeSlots } from "../demo-data/free-slots";
import CalendarEventButton from './CalendarEventButton';
import {Typography} from "@material-ui/core";

class CalendarPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
        this.findFreeSlots();
    }

    findFreeSlots() {
        // const duration = this.props.duration;
        const duration = 60;

        var start;
        var temp;
        var end;
        var freeEvent;
        var freeEvents = [];
        for (var freeSlot of freeSlots) {
            start = freeSlot.startDate;
            end = freeSlot.endDate;
            temp = this.addDurationToDate(start, duration);

            while (temp <= end) {
                freeEvent = {
                    startDate: start,
                    endDate: temp
                };
                // console.log(freeEvent);
                freeEvents.push(freeEvent);

                start = temp;
                temp = this.addDurationToDate(start, duration);
            }
        }
        this.state.freeEvents = freeEvents;
    }

    addDurationToDate(start, durationMinutes) {
        const year = start.getFullYear();
        const month = start.getMonth();
        const date = start.getDate();
        const hours = start.getHours();
        const minutes = start.getMinutes();

        return new Date(year, month, date, hours, minutes + durationMinutes);
    }

    getDateString(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? " am" : " pm";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var strTime = hours + ":" + minutes + ampm;
        return strTime;
    }

    getRowOffset(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();

        if (hours / 12 > 1) {
            hours -= 12;
        } else {
            hours += 12;
        }

        return hours * 2 + minutes/30 - 14;
    }

    getColumnOffset(date) {
        var day = date.getUTCDay();
        return day + 2;
    }

    handleEventSelection = (event) => {
        this.setState({
            selected: event
        });
    }

    render() {
        return (
            <div className="container">
                <div className="item date">
                    <Typography variant="button">SUN</Typography>
                    <Typography variant="h5" gutterBottom>19</Typography>
                </div>
                <div className="item month">
                    <Typography variant="h4" gutterBottom>July</Typography>
                </div>
                <div className="item date">
                    <Typography variant="button">MON</Typography>
                    <Typography variant="h5" gutterBottom>20</Typography>
                </div>
                <div className="item date">
                    <Typography variant="button">TUE</Typography>
                    <Typography variant="h5" gutterBottom>21</Typography>
                </div>
                <div className="item date">
                    <Typography variant="button">WED</Typography>
                    <Typography variant="h5" gutterBottom>22</Typography>
                </div>
                <div className="item date">
                    <Typography variant="button">THU</Typography>
                    <Typography variant="h5" gutterBottom>23</Typography>
                </div>
                <div className="item date">
                    <Typography variant="button">FRI</Typography>
                    <Typography variant="h5" gutterBottom>24</Typography>
                </div>
                <div className="item date">
                    <Typography variant="button">SAT</Typography>
                    <Typography variant="h5" gutterBottom>25</Typography>
                </div>
                <div className="item time"><Typography variant="button">8 AM</Typography></div>
                <div className="item time"><Typography variant="button">9 AM</Typography></div>
                <div className="item time"><Typography variant="button">10 AM</Typography></div>
                <div className="item time"><Typography variant="button">11 AM</Typography></div>
                <div className="item time"><Typography variant="button">12 PM</Typography></div>
                <div className="item time"><Typography variant="button">1 PM</Typography></div>
                <div className="item time"><Typography variant="button">2 PM</Typography></div>
                <div className="item time"><Typography variant="button">3 PM</Typography></div>
                <div className="item time"><Typography variant="button">4 PM</Typography></div>
                <div className="item time"><Typography variant="button">5 PM</Typography></div>
                {this.state.freeEvents.map((event) => {
                    return (
                        <div className="item event event-60" style={{gridRowStart: this.getRowOffset(event.startDate), gridColumnStart: this.getColumnOffset(event.startDate)}}>
                            <CalendarEventButton time={this.getDateString(event.startDate)} eventID={event} isSelected={this.state.selected == event} onSelect={this.handleEventSelection}/>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CalendarPicker;