import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        console.log("This component did mount")
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 5000)
    }
    
    render() {
        return (
            <div>
                <Conditional isLoading={this.state.isLoading}/>
            </div>
        )
    }
}

export default App
