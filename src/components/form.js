import React, { Component } from "react";
import Personal from "./personal";
import Experience from "./experience";
import Education from "./education";
import "../styles/info.css";

class Form extends Component{
    constructor(props) {
        super(props);

        this.state = {
            personal: {},
            education: {},
            experience: {}
        };

        this.setPersonal = this.setPersonal.bind(this);
        this.setEducation = this.setEducation.bind(this);
        this.setExperience = this.setExperience.bind(this);
    }
    handleForm(e){
        e.preventDefault();
    }

    setPersonal(newState){
        this.setState({personal: newState})
    }
    setEducation(newState){
        this.setState({education: newState})
    }
    setExperience(newState){
        this.setState({experience: newState})
    }

    render(){
        return (
        <form className="Form" onSubmit={(e) => this.handleForm(e)}>
            <Personal setPersonal={this.setPersonal}/>
            <Experience setExperience={this.setExperience}/>
            <Education setEducation={this.setEducation}/>
            <input type="submit" value="Submit"/>
        </form>);
    }
}

export default Form;
