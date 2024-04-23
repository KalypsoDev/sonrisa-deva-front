import React, { useState } from 'react';

const InputSearch = ({ data, onDataFiltered, searchField }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchTerm(searchText);

    const filteredData = data.filter(item =>
      item[searchField].toLowerCase().includes(searchText)
    );

    onDataFiltered(filteredData);
  };

  return (
    <div className="pb-4 bg-white dark:bg-gray-900 font-montserratRegular text-darkGrey">
      <label htmlFor="table-search" className="sr-only">Search</label>
      <div className="relative mt-1">
        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          className="block pt-2 ps-10 text-sm text-darkGrey border border-gray-300 rounded-lg w-1/2 sm:w-48 bg-gray-50 focus:ring-primaryBlue focus:border-primaryBlue"
          placeholder="Búsqueda"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default InputSearch;

