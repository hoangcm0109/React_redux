const initState = [
    { id: 1, name: "Learn React", prioriry: "Medium", completed: false },
    { id: 2, name: "Learn Next JS", prioriry: "High", completed: true },
    { id: 3, name: "Learn TypeScript", prioriry: "Low", completed: false },
];

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            return [...state, action.payload];
        case "todoList/changeCompleted":
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        default:
            return state;
    }
};

export default todoReducer;
