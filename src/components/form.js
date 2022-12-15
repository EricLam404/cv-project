import React, { Component } from "react";
import Personal from "./personal";
import Experience from "./experience";
import Education from "./education";
import "../styles/info.css";

class Form extends Component{
    constructor(props) {
        super(props);

        this.state = {
            info: {}
        };
    }
    handleForm(e){
        e.preventDefault();
        let formData = new FormData(e.target);
        let formProps = Object.fromEntries(formData);

        this.setState({
            info: formProps,
        })

        console.log(this.state.info);
    }
    render(){
        return (
        <form className="Form" onSubmit={(e) => this.handleForm(e)}>
            <Personal/>
            <Experience/>
            <Education/>
            <input type="submit" value="Submit"/>
        </form>);
    }
}

export default Form;
