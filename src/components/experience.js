import React, { Component } from "react";

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
            <label htmlFor="formPosition" className="info">Position</label>
            <input type="text" id="formPosition" placeholder="Enter Position" />

            <label htmlFor="formc=Company" className="info">Company</label>
            <input type="text" id="formCompany" placeholder="Enter Company" />

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
        <div className="experience-information header">
            <div className="subheader">Experience</div>
            {this.state.sections}
            <button onClick={() => this.addSection()}>Add</button>
        </div>);
    }
}

export default Experience;


