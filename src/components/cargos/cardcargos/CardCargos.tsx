import { Link } from "react-router-dom";

function CardCargos() {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-dark-ice text-shadow-ice font-bold text-2xl">
        Cargo
      </header>

      <div className="flex">
        <Link
          to="/editar-cargo"
          className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                flex items-center justify-center py-2 font-semibold transition"
          aria-label="Editar cargo"
        >
          Editar
        </Link>

        <Link
          to="/deletar-cargo"
          className="w-full text-slate-100 bg-red-400 hover:bg-red-700 
                flex items-center justify-center py-2 font-semibold transition"
          aria-label="Deletar cargo"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCargos;
