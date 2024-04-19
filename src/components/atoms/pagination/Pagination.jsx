import React from 'react'

const Pagination = ({currentPage, perPage, totalItems, onPageChange }) => {
    const pageCount = Math.ceil(totalItems / perPage);

    const handlePageClick = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= pageCount) {
            onPageChange(pageNumber);
        }
    };

    return (
        <div className="flex justify-center mt-4">
            <ul className="inline-flex justify-center -space-x-px text-sm">
                <li>
                    <button
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={() => handlePageClick(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Anterior
                    </button>
                </li>
                {Array.from({ length: pageCount }, (_, i) => (
                    <li key={i}>
                        <button
                            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === i + 1 ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:text-white' : ''
                                }`}
                            onClick={() => handlePageClick(i + 1)}
                        >
                            {i + 1}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                        onClick={() => handlePageClick(currentPage + 1)}
                        disabled={currentPage === pageCount}
                    >
                        Siguiente
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Pagination