import React, {useState} from 'react';
import './Todo.css';
const Todo = (props) => {

    const handleClick = () => {
        console.log(props.todo.task, props.todo.id);
        props.handleCompleted(props.todo.id)
    }

    return (
        <h2 onClick={handleClick} className={`todo${props.todo.completed ? 'Completed' : ''}`} >{props.todo.task}</h2>
    )
}

export default Todo;