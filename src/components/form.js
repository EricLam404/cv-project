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
    handleForm(e){
        console.log(e)
    }
    render(){
        return (
        <div className="From">
            <Personal/>
            <Experience/>
            <Education/>
            <button type="submit" onClick={(e) => this.handleForm(e)}>Submit</button>
        </div>);
    }
}

export default Form;
