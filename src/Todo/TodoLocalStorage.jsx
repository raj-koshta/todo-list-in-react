const todoKeys = "reactTodo"

export const getLocalStorageTodo = () =>{
    const rowTodos = localStorage.getItem(todoKeys);
    if(!rowTodos) return [];

    return JSON.parse(rowTodos);
}

export const setLocalStorageTodo = (task) =>{
    return localStorage.setItem(todoKeys, JSON.stringify(task))
}