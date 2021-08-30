import React from 'react';
import Todo from './Todo';

const TodoList = props => {

    const handleClick = () => {
       props.handleClear();
    }

    return (
        <div>
            {props.todoList.map((todo, index) => (
                <Todo key={index} handleCompleted={props.handleCompleted} todo={todo} />
            ))}
            <button onClick={handleClick} >Clear completed</button>
        </div>
    )
}

export default TodoList;