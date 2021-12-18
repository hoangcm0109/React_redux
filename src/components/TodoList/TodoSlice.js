const initState = [
    { id: 1, name: "Learn React", priority: "Medium", completed: false },
    { id: 2, name: "Learn Next JS", priority: "High", completed: true },
    { id: 3, name: "Learn TypeScript", priority: "Low", completed: false },
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
