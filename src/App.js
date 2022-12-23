import React, { Component } from "react";
import "./styles/app.css"
import Form from "./components/form";
import Sheet from "./components/sheet";

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            form: {
                personal: {},
                education: {},
                experience: {}
            },
        };

        this.setForm = this.setForm.bind(this);
    }
    setForm(newState){
        this.setState({form: newState});
    }
    render(){
        return (
        <div className="container">
            <div>CV Creater</div>
            <div className="sub-container">
                <Form setForm={this.setForm}/>
                <Sheet form={this.state.form}/>
            </div>

        </div>);
    }
}

export default App;
