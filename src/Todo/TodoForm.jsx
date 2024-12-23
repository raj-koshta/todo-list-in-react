import React, { useState } from 'react'

const TodoForm = ({onAddTodo}) => {

    const [inputValue, setInputValue] = useState("");

    const handleOnChange = (value) => {
        setInputValue(value);
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue("");
    }

    return (
        <section className='form'>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type='text' className='todo-input' autoComplete='off'
                        value={inputValue} onChange={(event) => { handleOnChange(event.target.value) }} />
                </div>
                <div>
                    <button type='submit' className='todo-btn'>
                        Add Task
                    </button>
                </div>
            </form>
        </section>
    )
}

export default TodoForm
