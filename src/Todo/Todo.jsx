import React, { useState } from 'react'
import './Todo.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';

const Todo = () => {

   
    const [task, setTask] = useState([]);

    const handleFormSubmit = (inputValue) => {

        if (!inputValue) return;

        if (task.includes(inputValue)) {
            return;
        }

        setTask((prevTask) =>
            [...prevTask, inputValue]
        )

    }

    const handleDeleteTask = (value) =>{
        console.log(task)
        console.log(value)

        const updatedTask = task.filter((curTask)=>{
            return curTask !== value
        })

        setTask(updatedTask)
    }

    return (
        <section className='todo-container'>
            <header>
                <h1>Todo List</h1>
                <TodoDate />
            </header>
            <TodoForm onAddTodo={handleFormSubmit}/>
            <section className='myUnOrdList'>
                <ul>
                    {
                        task.map((curTask, index) => {
                            return <TodoList key={index} data={curTask}
                                onHandleDeleteTodo={handleDeleteTask}
                             />
                        })
                    }
                </ul>
            </section>
            <section>
                <button onClick={()=>{setTask([])}} className='clear-btn'>Clear All</button>
            </section>
        </section>
    )
}

export default Todo