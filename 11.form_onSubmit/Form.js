import React, {Component} from "react"

class CustomForm extends Component {
    
    handleFormSubmit(event, requestType, articleID){
        const title= event.target.elements.title.value 
        const content= event.target.elements.content.value  
       
        console.log(title+content)
    }
    
    
    render() {
        return (
            
               
           <form  onSubmit={(event) =>
                    this.handleFormSubmit(
                        event,
                        this.props.requestType,
                        this.props.articleID
                    )
                }>
                <input name="title" placeholder="input title" />
                <br />
                <br />
                <input name="content" placeholder="input Content" />
                <br/>
                <button type="submit">Button</button>
            </form>



            
        )
    }
}

export default CustomForm