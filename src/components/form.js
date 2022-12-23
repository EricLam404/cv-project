import React, { Component } from "react";
import Personal from "./personal";
import Experience from "./experience";
import Education from "./education";
import "../styles/form.css";

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

    setPersonal(newState){
        this.setState({personal: newState});
        this.props.setForm(this.state);
    }
    setEducation(newState){
        this.setState({education: newState});
        this.props.setForm(this.state);
    }
    setExperience(newState){
        this.setState({experience: newState});
        this.props.setForm(this.state);
    }

    render(){
        return (
        <form className="form" onSubmit={(e) => {e.preventDefault();}}>
            <Personal setPersonal={this.setPersonal}/>
            <Experience setExperience={this.setExperience}/>
            <Education setEducation={this.setEducation}/>
        </form>);
    }
}

export default Form;
