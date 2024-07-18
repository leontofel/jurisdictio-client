import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="h-screen flex-col flex items-center justify-center">
      <h1 className="text-3xl">Página não encontrada</h1>
      <h5>
        <Link to="/" className="cursor-pointer text-blue-500 ml-2">Voltar para o inicio</Link>
      </h5>
    </div>
  );
};
