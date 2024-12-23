import React from 'react'
import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({index, data, onHandleDeleteTodo}) => {
    return (
        <li key={index} className='todo-item'>
            <span>{data}</span>
            <button className='check-btn'>
                {<MdCheck />}
            </button>
            <button onClick={() => onHandleDeleteTodo(data)} className='delete-btn'>
                {<MdDeleteForever />}
            </button>
        </li>
    )
}

export default TodoList
