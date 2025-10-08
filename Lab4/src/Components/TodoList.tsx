import React from 'react';
import TodoItem from './TodoItem';

interface Todo {
    id: number;
    todo: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, newTitle: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete, onEdit }) => {
    if (!todos.length) {
        return <p className="text-center text-gray-500">No todos found.</p>;
    }

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </ul>
    );
};

export default TodoList;