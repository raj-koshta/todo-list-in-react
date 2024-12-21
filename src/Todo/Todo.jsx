import React, { useEffect, useState } from 'react'
import { MdCheck, MdDeleteForever } from "react-icons/md";
import './Todo.css'

const Todo = () => {

    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);
    const [dateTime, setDateTime] = useState();

    const handleOnChange = (value) => {
        setInputValue(value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!inputValue) return;

        if (task.includes(inputValue)) {
            setInputValue("");
            return;
        }

        setTask((prevTask) =>
            [...prevTask, inputValue]
        )

        setInputValue("");
    }

    // todo date and time

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString();

            setDateTime(`${date} - ${time}`)

        }, 1000);

        return () => clearInterval(interval);
    }, [])

    // const handleDeleteTask = (value) =>{
    //     console.log(task)
    //     console.log(value)

    //     const updatedTask = task.filter((curTask)=>{
    //         return curTask !== value
    //     })

    //     setTask(updatedTask)
    // }

    return (
        <section className='todo-container'>
            <header>
                <h1>Todo List</h1>
                <h2 className='date-time'>{dateTime}</h2>
            </header>
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
            <section className='myUnOrdList'>
                <ul>
                    {
                        task.map((curTask, index) => {
                            return <li key={index} className='todo-item'>
                                <span>{curTask}</span>
                                <button  className='check-btn'>
                                    {<MdCheck />}
                                </button>
                                <button onClick={()=>handleDeleteTask(curTask)} className='delete-btn'>
                                    {<MdDeleteForever />}
                                </button>
                            </li>
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
