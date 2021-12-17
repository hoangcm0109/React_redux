import filterReducer from "../components/Filters/FiltersSlice"
import todoReducer from "../components/TodoList/TodoSlice"

import { combineReducers } from 'redux'

// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filterReducer(state.filters, action),
//         todoList: todoReducer(state.todoList, action)
//     }
// }


// Assgin
const rootReducer = combineReducers({
    filters: filterReducer,
    todoList: todoReducer
})

export default rootReducer