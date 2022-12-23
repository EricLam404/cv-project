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
        return {
            position: "",
            company: "",
            city: "",
            from: "",
            to: "",
            id: i,
        };
    }
    displaySection(section){
        return (
        <div className={"experience-info " + section.id} key={section.id}>
            <label htmlFor="formPosition" className="info">Position</label>
            <input 
                type="text" 
                id="formPosition" 
                placeholder="Enter Position"
                value={section.position}
                onChange={(e) => {
                    let arr = this.state.sections.slice();
                    for(let i = 0; i < arr.length; i++){
                        if(parseInt(arr[i].id) === section.id){
                            arr[i].position = e.target.value;
                        }
                    }
                    this.setState({
                        sections: arr,
                        id: this.state.id,
                    })
                    this.props.setExperience(this.state);
                }}
            />

            <label htmlFor="formCompany" className="info">Company</label>
            <input 
                type="text" 
                id="formCompany" 
                placeholder="Enter Company"
                value={section.company}
                onChange={(e) => {
                    let arr = this.state.sections.slice();
                    for(let i = 0; i < arr.length; i++){
                        if(parseInt(arr[i].id) === section.id){
                            arr[i].company = e.target.value;
                        }
                    }
                    this.setState({
                        sections: arr,
                        id: this.state.id,
                    })
                    this.props.setExperience(this.state);
                }}
            />

            <label htmlFor="formCity" className="info">City</label>
            <input 
                type="text" 
                id="formCity" 
                placeholder="Enter City"
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
                    this.props.setExperience(this.state);
                }}
            />

            <label htmlFor="formFrom" className="info">From</label>
            <input 
                type="date" 
                id="formFrom" 
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
                    this.props.setExperience(this.state);
                }}
            />

            <label htmlFor="formTo" className="info">To</label>
            <input 
                type="date" 
                id="formTo" 
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
                    this.props.setExperience(this.state);
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
        this.props.setExperience(this.state);
    }

    addSection(){
        let arr = this.state.sections.slice();
        arr = arr.concat(this.createSection(this.state.id + 1));
        this.setState({
            sections: arr,
            id: this.state.id + 1,
        })
        this.props.setExperience(this.state);
    }

    render(){
        const displaySections = this.state.sections.map((section) => this.displaySection(section));
        return (
        <div className="experience-information header">
            <div className="subheader">Experience</div>
            {displaySections}
            <button onClick={() => {console.log(this);this.addSection()}}>Add</button>
        </div>);
    }
}

export default Experience;
