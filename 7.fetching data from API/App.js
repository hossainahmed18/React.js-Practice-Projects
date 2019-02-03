import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
    constructor() {
        super()
        this.state = {
            loaded: null,
            character: {}
        }
    }
    
    componentDidMount() {
        this.setState({loaded: false})
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            //then(data=>console.log(data))
            .then(data =>{
                this.setState({
                    loaded:true,
                    character:data
                })
            })
    }
    
    render() {
        const text =this.state.loaded? this.state.character.name:"Loading"
        return (
            <div>
                <h1>{text}</h1>
            </div>
        )
    }
}

export default App
