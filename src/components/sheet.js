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
        <h1>Description</h1>
        <h1>Experience</h1>
        <h1>Education</h1>
      </div>
    );
  }
}

export default Sheet;
