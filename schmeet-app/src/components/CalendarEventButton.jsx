import React from "react";
import {Button} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';

class CalendarEventButton extends React.Component {
    render() {
        const isSelected = this.props.isSelected;
        const time = this.props.time;
        const onSelect = this.props.onSelect;

        if (isSelected) {
            return (
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<DoneIcon/>}
                    disabled
                    size="small"
                    style={{width: "100%", height: "100%"}}
                >{time}</Button>
            );
        } else {
            return (
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon/>}
                    size="small"
                    style={{width: "100%", height: "100%"}}
                    onClick={() => {onSelect(this.props.eventID)}}
                >{time}</Button>
            );
        }
    }
}

export default CalendarEventButton;