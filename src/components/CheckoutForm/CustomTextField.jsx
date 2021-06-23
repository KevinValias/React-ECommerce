import React, { Component, useState } from "react";
import { Redirect } from "react-router";
import { TextField, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
// import cookie from "cookie";
// import HandleLogin from "./HandleLogin";

class FormInput extends Component {
  state = {
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    city: "",
    zip: "",
  };

  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };


  render() {
    
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Container>
            <form>

              <TextField
                variant="outlined"
                fullWidth="700"
                required
                onChange={this.handleTextChange}
                value={this.state.firstName}
                name="firstName"
                label="First Name"
                type="text"
              />

              <TextField
                variant="outlined"
                fullWidth="700"
                required
                onChange={this.handleTextChange}
                value={this.state.lastName}
                name="lastName"
                label="Last Name"
                type="text"
              />
              <TextField
                variant="outlined"
                fullWidth="700px"
                required
                onChange={this.handleTextChange}
                value={this.state.address}
                name="address"
                label="Address"
                type="text"
              />
              <TextField
                variant="outlined"
                fullWidth="700px"
                required
                onChange={this.handleTextChange}
                value={this.state.email}
                name="email"
                label="Email"
                type="text"
              />
              <TextField
                variant="outlined"
                fullWidth="700px"
                required
                onChange={this.handleTextChange}
                value={this.state.city}
                name="city"
                label="City"
                type="text"
              />
              <TextField
                variant="outlined"
                fullWidth="700px"
                required
                onChange={this.handleTextChange}
                value={this.state.zip}
                name="zip"
                label="ZIP / Postal Code"
                type="text"
              />
            </form>
          </Container>
        </div>
      </div>
    );
  }
}

export default FormInput;
