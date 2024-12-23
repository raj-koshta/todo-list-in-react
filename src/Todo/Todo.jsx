import React, { useState } from 'react'
import './Todo.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';

const Todo = () => {

   
    const [task, setTask] = useState([]);

    const handleFormSubmit = (inputValue) => {
        const {id, content, checked} = inputValue;

        console.log(!inputValue.content)
        console.log(inputValue.content)
        if (!inputValue.content) return;

        // if (task.includes(inputValue.content)) return;

        const ifTodoContentMatched = task.find((curTask)=>curTask.content.toUpperCase() === content.toUpperCase());
        if(ifTodoContentMatched){
            return;  
        } 

        setTask((prevTask) =>
            // in new ES6 If the Id and valus are same so we do not need to write it two time
            [...prevTask, {id, content, checked}]
        
            // [...prevTask, {id: id, content: content, checked: checked}]
        )

    }

    const handleDeleteTask = (value) =>{

        const updatedTask = task.filter((curTask)=>{
            return curTask.content !== value
        })

        setTask(updatedTask)
    }

    const handleCheckedTodo = (content) =>{
        const updatedTask = task.map((curTask)=>{
            if(curTask.content === content){
                return { ...curTask, checked: !curTask.checked };
            } else {
                return curTask;
            }
        })

        setTask(updatedTask);
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
                        task.map((curTask) => {
                            return <TodoList 
                                key={curTask.id} 
                                data={curTask.content}
                                checked={curTask.checked}
                                onHandleDeleteTodo={handleDeleteTask}
                                onHandleCheckedTodo={handleCheckedTodo}
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