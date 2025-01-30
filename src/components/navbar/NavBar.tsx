import { Link } from "react-router-dom";
import { FinnTheHuman } from "@phosphor-icons/react";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 gradiente drop-shadow-lg text-shadow-ice text-center">
        <div className="container flex justify-between text-lg">
          <Link to={"/"} className="hover:text-ice">
            RH 77
            <FinnTheHuman size={48} />
          </Link>
          <div className="flex gap-4">
            <Link to="/cargos" className="hover:text-gray-300">
              Procurar Cargos
            </Link>
            <Link to="/funcionarios" className="hover:text-gray-300">
              Procurar Funcionários
            </Link>
            <Link to="/sobrenos" className="hover:text-gray-300">
              Sobre nós
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
