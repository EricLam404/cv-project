import React, { Component } from "react";
import "./styles/app.css"
import General from "./components/general";

class App extends Component{
    constructor() {
        super();

        this.state = {
        };
    }
    render(){
        return (<div class="container">
            <div>CV Creater</div>
            <General/>
        </div>);
    }
}

export default App;
