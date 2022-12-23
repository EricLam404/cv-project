import React, { Component } from "react";
import "../styles/sheet.css";

class Sheet extends Component {
  render() {
    console.log("personal")
    console.table(this.props.form.personal);
    console.log("education")
    console.table(this.props.form.education.sections);
    console.log("experience")
    console.table(this.props.form.experience.sections);
    return (
      <div className="sheet">
        <div><h1>Personal Information</h1>
          <div>
              <div>{"Name: " + this.props.form.personal.name}</div>
              <div>{"Address: " + this.props.form.personal.address}</div>
              <div>{"Phone: " + this.props.form.personal.phone}</div>
              <div>{"Email: " + this.props.form.personal.email}</div>
              <div>{"Summary: " + this.props.form.personal.summary}</div>
          </div>
        </div>
        <div><h1>Education section</h1>
          <div>

          </div>
        </div>
        <div><h1>Experience section</h1>
          <div>

          </div>
        </div>
      </div>
    );
  }
}

export default Sheet;
