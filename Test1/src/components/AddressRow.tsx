import React from "react";
import type {Book} from "../types/Book";

interface Props {
    book: Book;
    onDelete: (id: number) => void;
    onEdit: () => void;
}

const AddressRow: React.FC<Props> = ({ book, onDelete, onEdit }) => (
    <tr>
        <td className="border px-4 py-2">{book.id}</td>
        <td className="border px-4 py-2">{book.firstName}</td>
        <td className="border px-4 py-2">{book.lastName}</td>
        <td className="border px-4 py-2">{book.phone}</td>
        <td className="border px-4 py-2 text-center">
            <button
                onClick={onEdit}
                className="bg-yellow-400 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-500"
            >
                Edit
            </button>
            <button
                onClick={() => onDelete(book.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
                Delete
            </button>
        </td>
    </tr>
);

export default AddressRow;
