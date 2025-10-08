import React from "react";
import type {Book} from "../types/Book";
import AddressRow from "./AddressRow";
import EditRow from "./EditRow";

interface Props {
    books: Book[];
    onEdit: (book: Book) => void;
    onDelete: (id: number) => void;
    editingId: number | null;
    setEditingId: (id: number | null) => void;
}

const AddressTable: React.FC<Props> = ({
                                           books,
                                           onEdit,
                                           onDelete,
                                           editingId,
                                           setEditingId,
                                       }) => {
    return (
        <div className="mt-4">
            {books.length === 0 ? (
                <p className="text-center text-gray-500">No data to display</p>
            ) : (
                <table className="min-w-full bg-white shadow rounded">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-4 border">ID</th>
                        <th className="py-2 px-4 border">First Name</th>
                        <th className="py-2 px-4 border">Last Name</th>
                        <th className="py-2 px-4 border">Phone</th>
                        <th className="py-2 px-4 border">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map((book) =>
                        editingId === book.id ? (
                            <EditRow
                                key={book.id}
                                book={book}
                                onSave={onEdit}
                                cancelEdit={() => setEditingId(null)}
                            />
                        ) : (
                            <AddressRow
                                key={book.id}
                                book={book}
                                onDelete={onDelete}
                                onEdit={() => setEditingId(book.id)}
                            />
                        )
                    )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AddressTable;
