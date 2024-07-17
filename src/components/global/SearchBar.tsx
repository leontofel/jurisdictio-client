import React from 'react';
import { CiSearch } from 'react-icons/ci';

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder="Consulte os doutores..."
        className="px-10 py-2 border rounded focus:outline-none focus:border-blue-500 w-full"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <CiSearch className="text-gray-500" />
      </div>
    </div>
  );
};

export default SearchBar;
