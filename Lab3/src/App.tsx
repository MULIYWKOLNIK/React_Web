import TodoList from "./components/TodoList";

function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4 text-center">My To-Do List</h1>
                <TodoList />
            </div>
        </div>
    );
}

export default App;
