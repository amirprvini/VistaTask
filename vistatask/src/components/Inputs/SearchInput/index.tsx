import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../../context/store';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useApplicationSelector } from '../../../redux/store';
import { filterProducts } from '../../../redux/features/tasks/productsSlice';

const SearchInput: React.FC = (): JSX.Element => {

  const [query, setQuery] = useState<string>('');
  const {setSerachInputValue,setIsFocuced} = useContext(AppContext);
  const location = useLocation(); 
  const currentPath = location.pathname;
  const filterProductsDispatch = useAppDispatch();
  const reduxState = useApplicationSelector(state=>state);
 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
    setSerachInputValue(e.target.value);
    filterProductsDispatch(filterProducts({
      categoryName: currentPath.slice(10) , 
      searchInputVal: e.target.value
    }))


    console.log('redx state: ' , reduxState);
  };

  const handleSearch = () => {
    if (query) {
      alert(`Searching for: ${query}`);
    } else {
      alert('Please enter a search term');
    }

  };

  const handleFocus = () => {
    setIsFocuced(true)
  };

  const handleBlur = () => {
    setIsFocuced(false);
  };

  return (
    <div className="relative w-4/5 mx-auto bg-gray-100 rounded-xl">
      
      <input
        type="text"
        value={query}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
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
