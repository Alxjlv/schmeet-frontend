import React from "react";
import "../App.css";
import { TextField, Chip } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";

class InviteField extends React.Component {
  state = {
    value: "",
    emails: [],
  };

  handleChange = (evt) => {
    this.setState({
      value: evt.target.value,
    });
  };

  handleKeyDown = (evt) => {
    if (["Enter", "Tab", ","].includes(evt.key)) {
      evt.preventDefault();

      var email = this.state.value.trim();

      if (email) {
        this.setState({
          emails: [...this.state.emails, email],
          value: "",
        });
      }
    }
  };

  render() {
    return (
      <React.Fragment style={{ alignContent: "bottom" }}>
        {this.state.emails.map((email) => (
          <Chip key={email} label={email} deleteIcon={<ClearIcon />}></Chip>
        ))}

        <TextField
          label="Invitees"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          autofocus={true}
        />
      </React.Fragment>
    );
  }
}

export default InviteField;
