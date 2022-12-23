import React, { Component } from "react";
import "../styles/sheet.css";

class Sheet extends Component {
  displayEducation(section){
      return (
        <div>
          <div>{"University: " + section.university}</div>
          <div>{"Degree: " + section.degree}</div>
          <div>{"City: " + section.city}</div>
          <div>{"From: " + section.from}</div>
          <div>{"To: " + section.to}</div>
        </div>
      );
  }
  displayExperience(section){
    return (
      <div>
        <div>{"Position: " + section.position}</div>
        <div>{"Company: " + section.company}</div>
        <div>{"City: " + section.city}</div>
        <div>{"From: " + section.from}</div>
        <div>{"To: " + section.to}</div>
      </div>
    );
}
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
            {this.props.form.education.sections.map((section) => this.displayEducation(section))}
          </div>
        </div>
        <div><h1>Experience section</h1>
          <div>
            {this.props.form.experience.sections.map((section) => this.displayExperience(section))}
          </div>
        </div>
      </div>
    );
  }
}

export default Sheet;
