import React, { Component } from "react";
import "../styles/info.css";

class Info extends Component{
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    render(){
        return (<div class={this.props.info + " info"}>
            <label for={this.props.info}>{this.props.info[0].toUpperCase() + this.props.info.substring(1)}</label>
            <input type={this.props.text} id={this.props.info} name={this.props.info}></input>
        </div>);
    }
}

export default Info;
