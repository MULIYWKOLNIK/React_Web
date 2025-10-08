import React from 'react';
import { useTodos } from './hooks/useTodos';
import TodoList from './Components/TodoList';
import SearchBar from './Components/SearchBar';
import Pagination from './Components/Pagination';

const App: React.FC = () => {
    const {
        todos,
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
        goToNextPage,
        goToPrevPage,
    } = useTodos();

    return (
        <div className="max-w-2xl mx-auto p-4 font-sans">
            <h1 className="text-3xl font-bold text-center mb-6">Todo List</h1>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

            {isLoading && <p className="text-center">Loading...</p>} {/* [cite: 146] */}
            {error && <p className="text-center text-red-500">Error: {error}</p>} {/* [cite: 147] */}

            {!isLoading && !error && (
                <>
                    <TodoList
                        todos={todos}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                        onEdit={editTodoTitle}
                    />
                    <Pagination
                        currentPage={currentPage}
                        totalTodos={totalTodos}
                        limitPerPage={limitPerPage}
                        onNext={goToNextPage}
                        onPrev={goToPrevPage}
                    />
                </>
            )}
        </div>
    );
};

export default App;