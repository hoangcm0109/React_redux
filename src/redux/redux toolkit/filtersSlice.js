// const initState = {
//     search: '',
//     status: 'All',
//     priority: []
// }

// const filterReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         case 'filters/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         case 'filters/priorityFilterChange':
//             return {
//                 ...state,
//                 priority: action.payload
//             }
//         default:
//             return state;
//     }
// }

// export default filterReducer

import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: 'fliters',
    initialState: {
        search: '',
        status: 'All',
        priority: []
    },
    reducers: {
        searchFilterChange: (state, action) => {
            state.search = action.payload
        }, // => create new { type: 'name/key_reducer' }
        statusFilterChange: (state, action) => {
            state.status = action.payload
        },
        priorityFilterChange: (state, action) => {
            state.priority = action.payload
        }
    }
    //Lib Immer => mutation reducer
})

export const { searchFilterChange, statusFilterChange, priorityFilterChange } = filtersSlice.actions
export default filtersSlice.reducer