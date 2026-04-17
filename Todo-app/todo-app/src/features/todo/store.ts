import type { Todo } from "./types";
import { create } from "zustand";
import { persist } from 'zustand/middleware';

type NewTodoInput = Omit<Todo, "id" | "completed">;
type TodoUpdates = Partial<Omit<Todo, "id">>;

type TodoStore = {
    // 状態
    todos: Todo[];

    // 操作
    addTodo: (todo: NewTodoInput) => void;
    editTodo: (id: string, updates: TodoUpdates) => void;
    toggleCompleted: (id: string) => void;
    deleteTodo: (id: string) => void;
    reorderTodos: (newTodos: Todo[]) => void;
}

export const useTodoStore = create<TodoStore>(
    persist(
        (set) => ({
            todos: [],
            addTodo: (todo) => {
                set(state => ({
                    todos: [...state.todos, { ...todo, id: crypto.randomUUID(), completed: false }],
                }));
            },
            editTodo: (id, updates) => {
                set(state => ({
                    todos: state.todos.map(todo => {
                        if (todo.id === id) {
                            return {
                                ...todo,
                                ...updates,
                            }
                        }
                        return todo;
                    })
                }))
            },
            toggleCompleted: (id) => {
                set(state => ({
                    todos: state.todos.map(todo => {
                        if (todo.id === id) {
                            return {
                                ...todo,
                                completed: !todo.completed,
                            }
                        }
                        return todo;
                    })
                }))
            },
            deleteTodo: (id) => {
                set(state => ({
                    todos: state.todos.filter(todo => todo.id !== id),
                }))
            },
            reorderTodos: (newTodos) => {
                set({
                    todos: newTodos,
                })
            },
        }),
        { name: "todo-storage" }
    )
);