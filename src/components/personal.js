import React, { Component } from "react";
import "../styles/personal.css"
import Info from "./info";

class Personal extends Component{
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    render(){
        return (
        <div className="personal-information header">
            <div className="subheader">Personal Information</div>
            <div className="personal-info">
                <Info info="first" text="text"/>
                <Info info="last" text="text"/>
                <Info info="title" text="text"/>
                <Info info="address" text="text"/>
                <Info info="phone" text="text"/>
                <Info info="e-mail" text="email"/>
            </div>
        </div>);
    }
}

export default Personal;
