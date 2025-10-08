import React, { useState } from 'react';

interface Todo {
    id: number;
    todo: string;
    completed: boolean;
}

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, newTitle: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.todo);

    const handleSave = () => {
        if (newTitle.trim()) {
            onEdit(todo.id, newTitle);
            setIsEditing(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSave();
        }
    };

    return (
        <li className={`flex items-center justify-between p-2 border-b ${todo.completed ? 'text-gray-400 line-through' : ''}`}>
            <div className="flex items-center flex-grow">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id, todo.completed)}
                    className="mr-2"
                />
                {isEditing ? (
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onBlur={handleSave}
                        autoFocus
                        className="border-b-2 border-blue-500 outline-none w-full"
                    />
                ) : (
                    <span className="flex-grow">{todo.todo}</span>
                )}
            </div>
            <div className="flex-shrink-0 ml-4">
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="mr-2 px-2 py-1 bg-yellow-500 text-white rounded"
                >
                    {isEditing ? 'Cancel' : 'Edit'}
                </button>
                <button
                    onClick={() => onDelete(todo.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoItem;