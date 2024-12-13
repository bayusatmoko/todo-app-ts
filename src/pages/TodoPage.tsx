import { FC, useState } from 'react'
import TodoForm from '../containers/TodoForm';
import TodoList from '../containers/TodoList';
import { TodoListItem } from '../types';
import { setLocalTodoList } from '../utils';

const TodoPage: FC = () => {
    const [todoList, setTodoList] = useState<TodoListItem[]>(localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')!) : []);
    const handleAdd = (title: string) => {
        setLocalTodoList([...todoList, {title, completed: false}])
        setTodoList([...todoList, {title, completed: false}]);
    }

    return (
        <>
            <h1>Todo App</h1>
            <TodoForm onAdd={handleAdd}/>
            <TodoList todoList={todoList} setTodoList={setTodoList} />
        </>
    )
}

export default TodoPage;