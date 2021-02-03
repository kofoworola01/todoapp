import React, { Component } from 'react'

export default class AddTodo extends Component {
  
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        })
    }


    render() {
        return (
            <div>
                <form>
                    <label> Add Todo: </label>
                    <input className="add-todo" type='text' onChange={this.handleChange} value={this.state.content}/>
                    <button onClick={this.handleSubmit}> Submit </button>
                </form>
            </div>
        )
    }
}
