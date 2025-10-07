import { useState } from "react";
import type {Todo} from "./TodoList";

interface TodoItemProps {
    task: Todo;
    onDelete: (id: number) => void;
}

function TodoItem({ task, onDelete }: TodoItemProps) {
    const [isCompleted, setIsCompleted] = useState<boolean>(false);

    return (
        <li className="flex items-center justify-between bg-gray-50 border rounded px-3 py-2">
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => setIsCompleted(!isCompleted)}
                />
                <span className={isCompleted ? "line-through text-gray-400" : ""}>
          {task.text}
        </span>
            </div>
            <button
                onClick={() => onDelete(task.id)}
                className="text-red-500 hover:text-red-700"
            >
                Delete
            </button>
        </li>
    );
}

export default TodoItem;
