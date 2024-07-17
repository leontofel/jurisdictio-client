import React from 'react';
import Button from './Button';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white p-4 flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0">
      <h1 className="text-2xl">Jurisdictio</h1>
      <div className="flex-1 mx-4 w-full sm:w-auto">
        <SearchBar className="w-full" />
      </div>
      <div className="flex space-x-2">
        <Button variant="danger">
          <a href="/login">Faça o login</a>
        </Button>
        <Button variant="accent">
          <a href="/signup">Cadastre-se</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
