import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => {
    const todoFilter = state.todoList.filter((todo) => {
        if (state.filters.status === "All")
            return state.filters.priority.length
                ? todo.name.includes(state.filters.search) &&
                state.filters.priority.includes(todo.priority)
                : todo.name.includes(state.filters.search);

        return (
            todo.name.includes(state.filters.search) &&
            (state.filters.status === "Completed"
                ? todo.completed
                : !todo.completed) &&
            (state.filters.priority.length
                ? state.filters.priority.includes(todo.priority)
                : true)
        );
    });
    return todoFilter;
};

export const searchFilterSelector = (state) => state.filters.search;

// lib Reselect

// Reselect by Redux Toolkit
export const seacrhTextSelector = (state) => state.fliters.search;
export const filterStatusSelector = (state) => state.fliters.status;
export const filterPriority = (state) => state.fliters.priority;
export const todoListSelectors = (state) => state.todoList;

export const todoFinal = createSelector(
    todoListSelectors,
    seacrhTextSelector,
    filterStatusSelector,
    filterPriority,
    (todoList, searchText, status, priority) => {
        return todoList.filter((todo) => {
            if (status === "All") {
                return priority.length
                    ? todo.name.includes(searchText) && priority.includes(todo.priority)
                    : todo.name.includes(searchText);
            }

            return (
                todo.name.includes(searchText) &&
                (status === "Completed" ? todo.completed : !todo.completed) &&
                (priority.length ? priority.includes(todo.priority) : true)
            );
        });
    }
);
