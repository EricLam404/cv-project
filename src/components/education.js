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
        return {
            university: "",
            degree: "",
            city: "",
            from: "",
            to: "",
            id: i,
        };
    }
    displaySection(section){
        return (
        <div className={"education-info " + section.id} key={section.id}>
            <label htmlFor="formUniversity" className="info">University</label>
            <input 
                type="text" 
                id="formUniversity" 
                placeholder="Enter university"
                value={section.university}
                onChange={(e) => {
                    let arr = this.state.sections.slice();
                    for(let i = 0; i < arr.length; i++){
                        if(parseInt(arr[i].id) === section.id){
                            arr[i].university = e.target.value;
                        }
                    }
                    this.setState({
                        sections: arr,
                        id: this.state.id,
                    })
                }}
            />

            <label htmlFor="formDegree" className="info">Degree</label>
            <input 
                type="text" 
                id="formDegree" 
                placeholder="Enter degree"
                value={section.degree}
                onChange={(e) => {
                    let arr = this.state.sections.slice();
                    for(let i = 0; i < arr.length; i++){
                        if(parseInt(arr[i].id) === section.id){
                            arr[i].degree = e.target.value;
                        }
                    }
                    this.setState({
                        sections: arr,
                        id: this.state.id,
                    })
                }}
            />

            <label htmlFor="formCity" className="info">City</label>
            <input 
                type="text" 
                id="formCity" 
                placeholder="Enter city"
                value={section.city}
                onChange={(e) => {
                    let arr = this.state.sections.slice();
                    for(let i = 0; i < arr.length; i++){
                        if(parseInt(arr[i].id) === section.id){
                            arr[i].city = e.target.value;
                        }
                    }
                    this.setState({
                        sections: arr,
                        id: this.state.id,
                    })
                }}
            />

            <label htmlFor="formFrom" className="info">From</label>
            <input type="date" id="formFrom" placeholder="Enter start date" />
            <input 
                type="text" 
                id="formFrom" 
                placeholder="Enter start date"
                value={section.from}
                onChange={(e) => {
                    let arr = this.state.sections.slice();
                    for(let i = 0; i < arr.length; i++){
                        if(parseInt(arr[i].id) === section.id){
                            arr[i].from = e.target.value;
                        }
                    }
                    this.setState({
                        sections: arr,
                        id: this.state.id,
                    })
                }}
            />

            <label htmlFor="formTo" className="info">To</label>
            <input 
                type="text" 
                id="formTo" 
                placeholder="Enter end date"
                value={section.to}
                onChange={(e) => {
                    let arr = this.state.sections.slice();
                    for(let i = 0; i < arr.length; i++){
                        if(parseInt(arr[i].id) === section.id){
                            arr[i].to = e.target.value;
                        }
                    }
                    this.setState({
                        sections: arr,
                        id: this.state.id,
                    })
                }}
            />

            <button onClick={() => this.deleteSection(section.id)}>Delete</button>
        </div>
        );
    }

    deleteSection(val){    
        let arr = this.state.sections.slice();
        for(let i = 0; i < arr.length; i++){
            if(parseInt(arr[i].id) === val){
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
        const displaySections = this.state.sections.map((section) => this.displaySection(section));
        return (
        <div className="experience-information header">
            <div className="subheader">Education</div>
            {displaySections}
            <button onClick={() => {console.log(this);this.addSection()}}>Add</button>
        </div>);
    }
}

export default Education;

