import React, { useState } from "react";
import type {Book} from "../types/Book";

interface Props {
    book: Book;
    onSave: (book: Book) => void;
    cancelEdit: () => void;
}

const EditRow: React.FC<Props> = ({ book, onSave, cancelEdit }) => {
    const [firstName, setFirstName] = useState(book.firstName);
    const [lastName, setLastName] = useState(book.lastName);
    const [phone, setPhone] = useState(book.phone);
    const [error, setError] = useState("");

    const handleSave = () => {
        if (!firstName.trim() || !lastName.trim() || !phone.trim()) {
            setError("Fields cannot be empty");
            return;
        }
        onSave({ ...book, firstName, lastName, phone });
        cancelEdit();
    };

    return (
        <tr>
            <td className="border px-4 py-2">{book.id}</td>
            <td className="border px-4 py-2">
                <input
                    className="border p-1 rounded w-full"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </td>
            <td className="border px-4 py-2">
                <input
                    className="border p-1 rounded w-full"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </td>
            <td className="border px-4 py-2">
                <input
                    className="border p-1 rounded w-full"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </td>
            <td className="border px-4 py-2 text-center">
                <button
                    onClick={handleSave}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2 hover:bg-green-600"
                >
                    Save
                </button>
                <button
                    onClick={cancelEdit}
                    className="bg-gray-400 text-white px-2 py-1 rounded hover:bg-gray-500"
                >
                    Cancel
                </button>
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </td>
        </tr>
    );
};

export default EditRow;
