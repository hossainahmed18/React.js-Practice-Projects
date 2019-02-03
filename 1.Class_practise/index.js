/*

Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug

*/

import React from "react"
import ReactDOM from "react-dom"

// #1
class App extends React.Component {
    //ai function ta class er render theke call kora hobe
    MainContent(){
        return(
            <main> This is Content of a function  </main>
        )
   }
    
    render(){
        return (
            <div>
                <h1>Hey I  Junayed</h1>
                <this.MainContent/>
                
                <Header username="Labiba"/>
                <Greeting/>
            </div>
        )
    }
}

//ai class gulai kora hobe
class Header extends React.Component {
    render(){
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
       )
    }
    
}


class Greeting extends React.Component {
    render(){
        //return er baire sob logic-togic check kora kora hobe
        //return just final valu ta return korbe
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        
        
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )

           ///
    }
}
ReactDOM.render(<App />, document.getElementById("root"))
