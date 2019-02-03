import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        /*bairer kono function e setState() function use korte hole oi bairer function ta ke constructor e bind korte hoy */
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        this.setState((prevState)=>{
            return{
                count:prevState.count+1
            }
            
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}

export default App
