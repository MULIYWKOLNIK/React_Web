// src/hooks/useTodos.ts
import { useState, useEffect, useMemo } from 'react';

const API_URL = 'https://dummyjson.com/todos';

interface Todo {
    id: number;
    todo: string;
    completed: boolean;
}

export const useTodos = () => {
    const [allTodos, setAllTodos] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // State for search
    const [searchTerm, setSearchTerm] = useState('');

    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [limitPerPage, setLimitPerPage] = useState(10);

    // Fetch all todos initially
    useEffect(() => {
        const fetchTodos = async () => {
            setIsLoading(true);
            setError(null);

            try {
                // Fetch a large batch of todos (adjust limit as needed)
                const response = await fetch(`${API_URL}?limit=150&skip=0`);
                if (!response.ok) {
                    throw new Error('Failed to fetch todos.');
                }
                const data = await response.json();
                setAllTodos(data.todos);
            } catch (err: any) {
                setError(err.message);
                setAllTodos([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTodos();
    }, []); // Only fetch once on mount

    // Effect to reset page to 1 when search term changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    // Filter todos based on search term
    const filteredTodos = useMemo(() => {
        if (!searchTerm.trim()) {
            return allTodos;
        }
        return allTodos.filter(todo =>
            todo.todo.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [allTodos, searchTerm]);

    // Paginate filtered todos
    const paginatedTodos = useMemo(() => {
        const startIndex = (currentPage - 1) * limitPerPage;
        const endIndex = startIndex + limitPerPage;
        return filteredTodos.slice(startIndex, endIndex);
    }, [filteredTodos, currentPage, limitPerPage]);

    const totalTodos = filteredTodos.length;
    const totalPages = Math.ceil(totalTodos / limitPerPage);

    const deleteTodo = async (id: number) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Failed to delete.');
            setAllTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        } catch (err: any) {
            setError(err.message);
        }
    };

    const toggleTodo = async (id: number, completed: boolean) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed: !completed }),
            });
            if (!response.ok) throw new Error('Failed to toggle.');
            const updatedTodo = await response.json();
            setAllTodos(prevTodos =>
                prevTodos.map(todo => (todo.id === id ? updatedTodo : todo))
            );
        } catch (err: any) {
            setError(err.message);
        }
    };

    const editTodoTitle = async (id: number, newTitle: string) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ todo: newTitle }),
            });
            if (!response.ok) throw new Error('Failed to edit.');
            const updatedTodo = await response.json();
            setAllTodos(prevTodos =>
                prevTodos.map(todo => (todo.id === id ? { ...todo, todo: updatedTodo.todo } : todo))
            );
        } catch (err: any) {
            setError(err.message);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    return {
        todos: paginatedTodos,
        isLoading,
        error,
        deleteTodo,
        toggleTodo,
        editTodoTitle,
        searchTerm,
        setSearchTerm,
        currentPage,
        totalTodos,
        limitPerPage,
        setLimit: setLimitPerPage,
        goToNextPage,
        goToPrevPage,
    };
};