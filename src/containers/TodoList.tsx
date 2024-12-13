import { FC } from 'react';
import { Button, List } from 'antd';
import TodoItem from '../components/TodoItem';
import { TodoListItem, TodoListProps } from '../types';
import { setLocalTodoList } from '../utils';

const TodoList: FC<TodoListProps> = ({todoList, setTodoList}) => {

    const handleDelete = (index: number) => {
        setLocalTodoList(todoList.filter((_, i) => i !== index))
        setTodoList(todoList.filter((_, i) => i !== index));
    }
    const handleComplete = (index: number) => {
        setLocalTodoList(todoList.map((item, i) => ({...item, completed: i === index ? !item.completed : item.completed})))
        setTodoList(todoList.map((item, i) => ({...item, completed: i === index ? !item.completed : item.completed})));
    }
    const renderItem = (item: TodoListItem, index: number) => (
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '1em'}}>
            <TodoItem item={item} onComplete={() => handleComplete(index)}/>
            <Button type='primary' onClick={() => handleDelete(index)}>Delete</Button>
        </div>
    )

    return (
        <List
            dataSource={todoList}
            renderItem={renderItem}
        />
    )
};

export default TodoList;