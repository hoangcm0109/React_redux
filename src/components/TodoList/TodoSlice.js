const initState = [
    { id: 1, name: 'Learn React', prioriry: 'Medium', completed: false }
]

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [
                ...state, action.payload
            ]
        default:
            return state;
    }
}

export default todoReducer