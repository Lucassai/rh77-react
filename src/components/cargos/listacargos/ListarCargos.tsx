import { useEffect, useState } from "react";
import { consultar } from "../../../services/Service";

interface Cargo {
  id: number;
  nome: string;
  salarioBase: number;
}

function ListarCargos() {
  const [cargos, setCargos] = useState<Cargo[]>([]);

  useEffect(() => {
    async function fetchCargos() {
      try {
        await consultar("/cargos", setCargos);
      } catch (error: any) {
        console.error("Erro ao buscar cargos:", error);
        alert("Erro ao carregar a lista de cargos. Tente novamente.");
      }
    }

    fetchCargos();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="w-screen min-h-screen flex items-center justify-center bg-ice">
        <div className="m-15 p-6 w-3/4 bg-dark-ice rounded-2xl shadow-lg text-center">
          <h1 className="text-2xl font-bold text-shadow-ice mb-4">
            Lista de Cargos
          </h1>
          <ul className="space-y-2">
            {cargos.map((cargo) => (
              <li
                key={cargo.id}
                className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-sm"
              >
                <span className="text-gray-700 font-medium">{cargo.nome}</span>
                <span className="text-green-600 font-semibold">
                  {cargo.salarioBase.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ListarCargos;
