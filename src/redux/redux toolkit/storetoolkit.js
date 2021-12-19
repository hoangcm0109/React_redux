// import { createStore } from 'redux'
// import rootReducer from './reducer'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composeEnhancers = composeWithDevTools()

// const store = createStore(rootReducer, composeEnhancers)

// // 1. Reducer 
// // 2. Init Value
// // 3. Middleware: Saga, Thunk

// export default store

import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filtersSlice'
import todoReducer from './todoSlice'

const store = configureStore({
    reducer: {
        fliters: filterReducer,
        todoList: todoReducer
    }
})

export default store