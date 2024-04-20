import React from 'react';

const Pagination = ({ currentPage, perPage, totalItems, onPageChange }) => {
    const pageCount = Math.ceil(totalItems / perPage);

    const handlePageClick = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= pageCount) {
            onPageChange(pageNumber);
        }
    };

    return (
        <div className="flex justify-center mt-4">
            <ul className="flex flex-wrap justify-center -space-x-px">
                <li>
                    <button
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                        onClick={() => handlePageClick(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Anterior
                    </button>
                </li>
                {Array.from({ length: pageCount }, (_, i) => (
                    <li key={i} className="flex-shrink-0">
                        <button
                            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === i + 1 ? 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700' : ''
                                }`}
                            onClick={() => handlePageClick(i + 1)}
                        >
                            {i + 1}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                        onClick={() => handlePageClick(currentPage + 1)}
                        disabled={currentPage === pageCount}
                    >
                        Siguiente
                    </button>
                </li>
            </ul>
        </div>

    );
};

export default Pagination;