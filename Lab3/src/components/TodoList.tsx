import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";

export interface Todo {
    id: number;
    text: string;
}

function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (task: string) => {
        if (!task.trim()) return;
        setTodos([...todos, { id: Date.now(), text: task }]);
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((t) => t.id !== id));
    };

    return (
        <div>
            <AddTodoForm onAddTodo={addTodo} />
            <ul className="mt-4 space-y-2">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} task={todo} onDelete={deleteTodo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
