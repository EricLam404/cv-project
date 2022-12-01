import React, { Component } from "react";
import Info from "./info";

class Education extends Component{
    constructor(props) {
        super(props);

        this.state = {
            sections: [this.createSection(0)],
            id: 0,
        };
    }
    createSection(i){
        return (
        <div className={"education-info " + i} key={i}>
            <Info info="university" text="text"/>
            <Info info="degree" text="text"/>
            <Info info="city" text="text"/>
            <Info info="from" text="date"/>
            <Info info="to" text="date"/>
            <button onClick={() => this.deleteSection(i)}>Delete</button>
        </div>);
    }
    deleteSection(val){
        let arr = this.state.sections.slice();
        for(let i = 0; i < arr.length; i++){
            if(arr[i].key == val){
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
        <div className="education-information header">
            <div className="subheader">Education</div>
            {this.state.sections}
            <button onClick={() => this.addSection()}>Add</button>
        </div>);
    }

}

export default Education;
