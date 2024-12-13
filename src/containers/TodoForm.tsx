import { FC, useState } from 'react';
import { Button, Input } from 'antd'; 
import { TodoFormProps } from '../types';

const TodoForm: FC<TodoFormProps> = ({onAdd}) => {
    const [title, setTitle] = useState<string>('');
    const handleSubmit = () => {
        onAdd(title)
        setTitle(''); 
    }
    
    return (
        <div>
            <Input 
                value={title} 
                onChange={e => setTitle(e.target.value)}
                style={{ width: '20em', marginRight: '1em' }} 
            />
            <Button type='primary' onClick={handleSubmit}>Add</Button>
        </div>
    )
};

export default TodoForm;