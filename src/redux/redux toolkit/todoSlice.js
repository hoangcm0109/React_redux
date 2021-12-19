// const initState = [
//     { id: 1, name: "Learn React", priority: "Medium", completed: false },
//     { id: 2, name: "Learn Next JS", priority: "High", completed: true },
//     { id: 3, name: "Learn TypeScript", priority: "Low", completed: false },
// ];

// const todoReducer = (state = initState, action) => {
//     switch (action.type) {
//         case "todoList/addTodo":
//             return [...state, action.payload];
//         case "todoList/changeCompleted":
//             return state.map((todo) =>
//                 todo.id === action.payload
//                     ? { ...todo, completed: !todo.completed }
//                     : todo
//             );
//         default:
//             return state;
//     }
// };

// export default todoReducer;

import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: "Learn React", priority: "Medium", completed: false },
        { id: 2, name: "Learn Next JS", priority: "High", completed: true },
        { id: 3, name: "Learn TypeScript", priority: "Low", completed: false },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        changeCompleted: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload)
            currentTodo.completed = !currentTodo.completed
        }
    }
    //Lib Immer => mutation reducer
})

export const { addTodo, changeCompleted } = todoSlice.actions
export default todoSlice.reducer