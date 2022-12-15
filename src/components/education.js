import React, { Component } from "react";

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
            <label htmlFor="formUniversity" className="info">University</label>
            <input type="text" id="formUniversity" placeholder="Enter university" />

            <label htmlFor="formDegree" className="info">Degree</label>
            <input type="text" id="formDegree" placeholder="Enter degree" />

            <label htmlFor="formCity" className="info">City</label>
            <input type="text" id="formCity" placeholder="Enter city" />

            <label htmlFor="formFrom" className="info">From</label>
            <input type="date" id="formFrom" placeholder="Enter start date" />

            <label htmlFor="formTo" className="info">To</label>
            <input type="date" id="formTo" placeholder="Enter end date" />
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
        <div className="education-information header">
            <div className="subheader">Education</div>
            {this.state.sections}
            <button onClick={() => this.addSection()}>Add</button>
        </div>);
    }

}

export default Education;
