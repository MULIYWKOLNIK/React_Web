import React, { useState } from "react";
import AddressForm from "./components/AddressForm";
import AddressTable from "./components/AddressTable";
import type {Book} from "./types/Book";

const App: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [editingId, setEditingId] = useState<number | null>(null);

    const handleAdd = (book: Book) => {
        setBooks([...books, book]);
    };

    const handleEdit = (updatedBook: Book) => {
        setBooks(books.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
    };

    const handleDelete = (id: number) => {
        setBooks(books.filter((b) => b.id !== id));
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">Address Book</h1>
            <AddressForm onAdd={handleAdd} />
            <AddressTable
                books={books}
                onEdit={handleEdit}
                onDelete={handleDelete}
                editingId={editingId}
                setEditingId={setEditingId}
            />
        </div>
    );
};

export default App;
