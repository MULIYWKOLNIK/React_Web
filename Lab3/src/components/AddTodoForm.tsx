import { useState, type FormEvent } from "react";

interface AddTodoFormProps {
    onAddTodo: (task: string) => void;
}

function AddTodoForm({ onAddTodo }: AddTodoFormProps) {
    const [task, setTask] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onAddTodo(task);
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a task..."
                className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Add
            </button>
        </form>
    );
}

export default AddTodoForm;
