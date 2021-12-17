export const todoListSelector = (state) => {

    const todoFilter = state.todoList.filter(todo => todo.name.includes(state.filters.search))
    return todoFilter

}

export const searchFilterSelector = (state) => state.filters.search

// lib Reselect