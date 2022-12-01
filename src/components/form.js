import React, { Component } from "react";
import Personal from "./personal";
import Experience from "./experience";
import Education from "./education";

class Form extends Component{
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    render(){
        return (
        <div className="From">
            <Personal/>
            <Experience/>
            <Education/>
        </div>);
    }
}

export default Form;
