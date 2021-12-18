export const todoListSelector = (state) => {
    const todoFilter = state.todoList.filter((todo) => {
        if (state.filters.status === "All")
            return state.filters.priority.length
                ? todo.name.includes(state.filters.search) && state.filters.priority.includes(todo.priority)
                : todo.name.includes(state.filters.search);

        return (
            todo.name.includes(state.filters.search) &&
            (state.filters.status === "Completed" ? todo.completed : !todo.completed) && (state.filters.priority.length ? state.filters.priority.includes(todo.priority) : true)
        );
    });
    return todoFilter;
};

export const searchFilterSelector = (state) => state.filters.search;

// lib Reselect
