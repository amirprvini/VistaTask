import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput: React.FC = (): JSX.Element => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    if (query) {
      alert(`Searching for: ${query}`);
      // Here you can implement your search logic (API call, filtering, etc.)
    } else {
      alert('Please enter a search term');
    }
  };

  return (
    <div className="relative w-4/5 mx-auto bg-gray-100 rounded-xl">
      
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="w-full bg-gray-100 p-3 pl-10 border rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-center placeholder:text-black placeholder:font-bold"
      />

      <button
        onClick={handleSearch}
        className="absolute inset-y-0 left-2 flex items-center pr-3">
        <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
      </button>
      
    </div>
  );
};

export default SearchInput;
