
export const getTodos = (todos) => {
    return {type: "GET_TODOS", payload: todos}
}

export const addTodo = (todo) => {
    return {type: 'ADD_TODO', payload: todo}
}
export const deleteTodo = (id) => {
    return {type: 'DELETE_TODO', payload: id}
}


export const editTodo = (todo) => {
    return {type: 'EDIT_TODO', payload: todo}
}

export const saveTodo = (todo) => {
    return {type: 'SAVE_TODO', payload: todo}
}