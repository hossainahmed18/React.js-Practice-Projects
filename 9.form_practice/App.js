import React, {Component} from "react"

// Challenge:
// Given an incomplete class-based component without a constructor, 
// add a constructor and initialize state to fix the broken component.

class App extends Component {
    constructor() {
        console.log("constructor is calling")
        super()
        this.state = {
            
            firstName: "",
            lastName: "",
            age:0,
            isFriendly:false,
            gender:"",
            favColor:"",
            isFb:false

        }
        this.handleChange=this.handleChange.bind(this)
        
    }

    handleChange(event){
        const{name, value,type,checked}=event.target
        type==="checkbox"?this.setState({[name]:checked}):this.setState({[name]:value})

        /*
        if(event.target.type=="checkbox"){
            this.setState({[event.target.name]:event.target.checked})
        }
        else{
            this.setState({[event.target.name]:event.target.value})
        }

        */
    }
    
    
    
    
    render() {

        return (

            <form>
                    First name:<br/>
                   <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange}/> <br/>
                   <br/>
                   Last name:<br/>
                   <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
                   <br/>
                   <br/>

                    <input 
                        name="age" 
                        value={this.state.age}
                        onChange={this.handleChange} 
                        placeholder="Age" 
                    />
                    <br />

                     
                     <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender=="male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>
                    <br />


                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>

                    <br/>
                    <br/>

                   <label>
                        <input 
                            type="checkbox" 
                            name="isFriendly"
                            checked={this.state.isFriendly}
                            onChange={this.handleChange}
                        /> Is friendly?
                    </label>
                    <br />

                    <label>
                        <input 
                            type="checkbox" 
                            name="isFb"
                            checked={this.state.isFb}
                            onChange={this.handleChange}
                        /> Have facebook?
                    </label>
                    <br />


                    
                   
                   <br />




                   
                <label>Favorite Color:</label>
                <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                </select>



                  

                   <hr />
                  <h2>Entered information:</h2>
                  <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                  <p>Your age: {this.state.age}</p>
                  <p>Friendly: {this.state.isFriendly ? "Yes" : "No"}</p>
                  <p>Facebook: {this.state.isFb ? "Yes" : "No"}</p>
                   <button>Submit</button>
            </form>
            
            
        )
    }
}

export default App
