import React, { Component } from "react";
import "./styles/app.css"
import Form from "./components/form";

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
            <Form/>
        </div>);
    }
}

export default App;
