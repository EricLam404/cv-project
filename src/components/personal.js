import React, { Component } from "react";
import "../styles/personal.css"

class Personal extends Component{
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            address: "",
            phone: "", 
            email: "",
            summary: "",
        };
    }
    render() {
        return (
          <div className="personal-information header">
    
            <div className="personal-info">
                <div>Personal Information</div>
                <label>Name:</label>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(e) => {
                        this.setState(
                            {name: e.target.value}
                        )
                        this.props.setPersonal(this.state);
                    }}
                />
                <label>Address:</label>
                <input
                    type="text"
                    value={this.state.address}
                    onChange={(e) => {
                        this.setState(
                            {address: e.target.value}
                        )
                        this.props.setPersonal(this.state);
                    }}
                />
                <label>Phone:</label>
                <input
                    type="text"
                    value={this.state.phone}
                    onChange={(e) => {
                        this.setState(
                            {phone: e.target.value}
                        )
                        this.props.setPersonal(this.state);
                    }}
                />
                <label>E-mail:</label>
                <input
                    type="email"
                    value={this.state.email}
                    onChange={(e) => {
                        this.setState(
                            {email: e.target.value}
                        )
                        this.props.setPersonal(this.state);
                    }}
                />
                <label>Summary:</label>
                <textarea
                    value={this.state.summary}
                    onChange={(e) => {
                        this.setState(
                            {summary: e.target.value}
                        )
                        this.props.setPersonal(this.state);
                    }}
                />
            </div>
          </div>
        );
    }
}

export default Personal;