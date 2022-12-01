import React, { Component } from "react";
import "../styles/general.css"
import Info from "./info";

class General extends Component{
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    render(){
        return (<div class="personal-information">
            <div class="subheader">Personal Information</div>
            <div class="personal-info">
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

export default General;
