import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLog: true
        }
        this.handleClick=this.handleClick.bind(this)
    }
    
    handleClick(){
        this.setState((prevState)=>{
            return{
                isLog: !this.state.isLog
            }
        })
        
        
    }
    
    

    
    
    render() {
        let buttonText=this.state.isLog? "Login":"Logout"
        let showText=this.state.isLog? "You LoggedOut":" You Should LogIn"
        
        //comditional style.....style varriable
        const stsyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
        }
        
        return (
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
                <h1 style={this.state.isLog? stsyle:null} >{showText}</h1>
            </div>
        )
    }
}

export default App
