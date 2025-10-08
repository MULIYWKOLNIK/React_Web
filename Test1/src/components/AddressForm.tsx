import React, { useState } from "react";
import type {Book} from "../types/Book";

interface Props {
    onAdd: (book: Book) => void;
}

const AddressForm: React.FC<Props> = ({ onAdd }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!firstName.trim()) newErrors.firstName = "The first name is required";
        if (!lastName.trim()) newErrors.lastName = "The last name is required";
        if (!phone.trim()) newErrors.phone = "The phone is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        onAdd({ id: Date.now(), firstName, lastName, phone });
        setFirstName("");
        setLastName("");
        setPhone("");
        setErrors({});
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow p-4 rounded-lg flex flex-col gap-3"
        >
            <input
                className="border p-2 rounded"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}

            <input
                className="border p-2 rounded"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}

            <input
                className="border p-2 rounded"
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}

            <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Add Contact
            </button>
        </form>
    );
};

export default AddressForm;
