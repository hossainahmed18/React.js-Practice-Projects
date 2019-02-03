

import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
            //previos state e sob gula item e chole asche..akhn je id ta pathano hoise parameter e sei id er item khuje ber kore(if diye search kora hoise) sei item er complete ta reverse kore dewa hocche
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>) /* prottekta json child array(item) er akta unique key 
        dite hoy..tai key ta use kora hoise just..props key te actually item id pass hoy nai */
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App