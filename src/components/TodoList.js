import React, {useEffect} from 'react';
import Todo from './Todo';
const TodoList = props => {
    
    useEffect(() => {
        console.log(props.todoList)
    }, [])

    const handleClick = () => {
       props.handleClear();
    }

    return (
        <div className='todoList'>
            {props.todoList.map((todo, index) => (
                <Todo key={index} handleCompleted={props.handleCompleted} todo={todo} />
            ))}
            <button onClick={handleClick} >Clear completed</button>
        </div>
    )
}

export default TodoList;