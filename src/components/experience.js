import React, { Component } from "react";
import Info from "./info";

class Experience extends Component{
    constructor(props) {
        super(props);

        this.state = {
            sections: [this.createSection(0)],
            id: 0,
        };
    }

    createSection(i){
        return (
        <div className={"experience-info " + i} key={i}>
            <Info info="position" text="text"/>
            <Info info="company" text="text"/>
            <Info info="city" text="text"/>
            <Info info="from" text="date"/>
            <Info info="to" text="date"/>
            <button onClick={() => this.deleteSection(i)}>Delete</button>
        </div>);
    }

    deleteSection(val){
        let arr = this.state.sections.slice();
        for(let i = 0; i < arr.length; i++){
            if(parseInt(arr[i].key) === val){
                arr.splice(i, 1);
            }
        }
        this.setState({
            sections: arr,
            id: this.state.id,
        })
    }

    addSection(){
        this.setState({
            sections: this.state.sections.concat(this.createSection(this.state.id + 1)),
            id: this.state.id + 1,
        })
    }

    render(){
        return (
        <div className="experience-information header">
            <div className="subheader">Experience</div>
            {this.state.sections}
            <button onClick={() => this.addSection()}>Add</button>
        </div>);
    }
}

export default Experience;


