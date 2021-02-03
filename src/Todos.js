import React from 'react'

export default function Todos({todos, handleDelete }) {
    // const { todos } = this.props
    const TodoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="todo-item" key={todo.id}>
                    <li>{todo.content}
                    <button className="del-btn" onClick={ () => {handleDelete(todo.id)} }>x</button>
                    </li>
                </div>
            )   
        })
    ) : <p>You do not have any Todo</p>
    return (
        <div className="Todos">
            { TodoList } 
        </div>
    )
}
