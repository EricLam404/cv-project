import React, { Component } from "react";
import "../styles/personal.css"

class Personal extends Component{
    constructor(props) {
        super(props);

        this.state = {
            personalInfo: {
                firstName: "",
                lastName: "",
                address: "",
                phone: "", 
                email: "",
                summary: "",
            }
        };
    }
    render() {
        return (
          <div className="personal-information header">
    
            <div className="personal-info">
              <h3>Personal Information</h3>
              <label>
                Name:
                <input
                  type="text"
                  value={this.state.personalInfo.name}
                  onChange={e => this.setState({ personalInfo: { ...this.state.personalInfo, name: e.target.value }})}
                />
              </label>
              <label>
                Contact Details:
                <input
                  type="text"
                  value={this.state.personalInfo.contactDetails}
                  onChange={e => this.setState({ personalInfo: { ...this.state.personalInfo, contactDetails: e.target.value }})}
                />
              </label>
              <label>
                Summary:
                <textarea
                  value={this.state.personalInfo.summary}
                  onChange={e => this.setState({ personalInfo: { ...this.state.personalInfo, summary: e.target.value }})}
                />
              </label>
            </div>
          </div>
        );
    }
}

export default Personal;

/*
<h1>{this.state.personalInfo.name}</h1>
            <p>{this.state.personalInfo.contactDetails}</p>
            <p>{this.state.personalInfo.summary}</p>
*/
