import React, { Component } from "react";
import "./styles/app.css"
import Form from "./components/form";
import Display from "./components/display";

class App extends Component{
    constructor() {
        super();

        this.state = {
        };
    }
    render(){
        return (
        <div className="container">
            <div>CV Creater</div>
            <div className="sub-container">
                <Form/>
                <Display/>
            </div>

        </div>);
    }
}

export default App;
