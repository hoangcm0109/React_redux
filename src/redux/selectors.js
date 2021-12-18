export const todoListSelector = (state) => {

    const todoFilter = state.todoList.filter(todo => {
        if(state.filters.status === 'All') return todo.name.includes(state.filters.search)

        return todo.name.includes(state.filters.search) && (state.filters.status === 'Completed' ? todo.completed : !todo.completed)
    })
    return todoFilter

}

export const searchFilterSelector = (state) => state.filters.search

// lib Reselect