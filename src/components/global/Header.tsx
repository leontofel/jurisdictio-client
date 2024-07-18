import React from 'react';
import Button from './Button';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@stores/store';

const Header: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <header className="bg-primary text-white p-4 flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0">
      <h1 className="text-2xl cursor-pointer">
        <Link to="/">Jurisdictio</Link>
      </h1>
      <div className="flex-1 mx-4 w-full sm:w-auto">
        <SearchBar className="w-full" />
      </div>
      <div className="flex space-x-2">
        <Button variant="danger">
          {token ? (
            <Link to="/logout">Sair</Link>
          ) : (
            <Link to="/login">Faça o login</Link>
          )}
        </Button>
        <Button variant="accent">
          <Link to="/signup">Cadastre-se</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
