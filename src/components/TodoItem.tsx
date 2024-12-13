import { FC } from 'react';
import { Checkbox } from 'antd';
import { TodoItemProps } from '../types';

const TodoItem: FC<TodoItemProps> = ({item: {title, completed}, onComplete}) => {
    return (
        <div>
            <Checkbox checked={completed} onChange={onComplete} style={{marginRight: '1em'}}/>
            <a>{title}</a>
        </div>
    )
};

export default TodoItem;