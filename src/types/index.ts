export interface TodoItemProps {
    item: TodoListItem
    onComplete: () => void
}

export interface TodoFormProps { 
    onAdd: (title: string) => void
}

export interface TodoListProps {
    todoList: TodoListItem[]
    setTodoList: (todoList: TodoListItem[]) => void
}

export interface TodoListItem {
    title: string
    completed: boolean
}

