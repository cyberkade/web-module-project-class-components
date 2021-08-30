import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            input: '',
        }
    }

    handleChange = e => {
        this.setState({
            input: e.target.value
        });
    }

    handleClick = e => {
        e.preventDefault();
        console.log(this.state.input)
        this.props.handleAdd(this.state.input)
        this.setState({...this.state, input: ''});
    }

    render() {
        return (
            <form>
                    <input onChange={this.handleChange} placeholder='Ex: Go for a walk' value={this.state.input} ></input>
                    <div>
                        <button onClick={this.handleClick}>Add Todo</button>
                    </div>
            </form>
        )
    }
}

export default TodoForm;