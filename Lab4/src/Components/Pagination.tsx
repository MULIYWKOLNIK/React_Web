import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalTodos: number;
    limitPerPage: number;
    onNext: () => void;
    onPrev: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalTodos, limitPerPage, onNext, onPrev }) => {
    const totalPages = Math.ceil(totalTodos / limitPerPage);

    return (
        <div className="flex items-center justify-between mt-4">
            <button
                onClick={onPrev}
                disabled={currentPage === 1} // Disable "Previous" on page 1
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
                Previous
            </button>
            <span className="text-gray-700">
                Page {currentPage} of {totalPages} (Total: {totalTodos})
            </span>
            <button
                onClick={onNext}
                disabled={currentPage >= totalPages} // Disable "Next" on the last page
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;