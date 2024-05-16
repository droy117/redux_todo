import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello world",
        },
    ],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        //state holds the entire value in this case state only has todos array check the initialState
        //action acts as a parameter to use any arguments passed to these functions we use action.payload where payload is an object
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.forEach((todo) => {
                if(todo.id === action.payload.id) {
                    todo.text = action.payload.text
                }
            })
        }
    },
});

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer
