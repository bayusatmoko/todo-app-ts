import { TodoListItem } from "../types";

export const getLocalTodoList = () => JSON.parse(localStorage.getItem('todoList') || '[]');
export const setLocalTodoList = (todoList: TodoListItem[]) => localStorage.setItem('todoList', JSON.stringify(todoList))