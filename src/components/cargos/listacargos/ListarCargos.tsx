import { useEffect, useState } from "react";
import {
  consultar,
  cadastrar,
  atualizar,
  deletar,
} from "../../../services/Service";
import { Pencil, Trash } from "@phosphor-icons/react";

interface Cargo {
  id?: number;
  nome: string;
  salarioBase: number;
}

function ListarCargos() {
  const [cargos, setCargos] = useState<Cargo[]>([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [cargoSelecionado, setCargoSelecionado] = useState<Cargo | null>(null);

  useEffect(() => {
    fetchCargos();
  }, []);

  async function fetchCargos() {
    try {
      await consultar("/cargos", setCargos);
    } catch (error) {
      console.error("Erro ao buscar cargos:", error);
      alert("Erro ao carregar a lista de cargos.");
    }
  }

  function abrirModal(cargo?: Cargo) {
    setCargoSelecionado(cargo || { nome: "", salarioBase: 0 });
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
    setCargoSelecionado(null);
  }

  async function salvarCargo() {
    if (!cargoSelecionado) return;
    try {
      let novoCargo:any;
      if (cargoSelecionado.id) {
        // Atualiza o cargo e retorna o objeto atualizado
        novoCargo = await atualizar(`/cargos`, cargoSelecionado);
        // Atualiza o estado substituindo o cargo antigo pelo novo
        setCargos(prevCargos =>
          prevCargos.map(cargo => 
            cargo.id === novoCargo?.id ? novoCargo : cargo
          )
        );
      } else {
        // Cadastra o novo cargo e retorna o objeto criado
        novoCargo = await cadastrar("/cargos", cargoSelecionado);
        // Adiciona o novo cargo ao estado existente
        setCargos(prevCargos => [...prevCargos, novoCargo]);
      }
      fecharModal();
      // Opcional: Recarrega a lista para garantir sincronia com o servidor
      fetchCargos(); // Descomente se necessário
    } catch (error) {
      console.error("Erro ao salvar cargo:", error);
      alert("Erro ao salvar cargo.");
    }
  }

  async function excluirCargo(id: number) {
    try {
      await deletar(`/cargos/${id}`);
      setCargos(cargos.filter((cargo) => cargo.id !== id));
    } catch (error) {
      console.error("Erro ao excluir cargo:", error);
      alert("Erro ao excluir cargo.");
    }
  }

  return (
    <div className="flex flex-col text-center gap-4">
      <div className="w-screen min-h-screen flex items-center justify-center bg-ice">
        <div className="m-15 p-6 w-3/4 bg-dark-ice rounded-2xl shadow-lg text-center">
          <h1 className="text-2xl font-bold text-shadow-ice mb-4">
            Lista de Cargos
          </h1>
          <div className="p-5">
            <button
              onClick={() => abrirModal()}
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Adicionar Cargo
            </button>
          </div>
          <ul className="space-y-2">
            {cargos?.map((cargo) => (
              <li
                key={cargo?.id}
                className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-sm"
              >
                <span className="text-gray-700 font-medium w-1/3">
                  {cargo?.nome}
                </span>
                <span className="text-green-600 font-semibold flex-1 text-center">
                  {cargo?.salarioBase.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
                <div className="flex gap-2">
                  <button onClick={() => excluirCargo(cargo.id!)}>
                    <Trash size={25} className="text-red-500 cursor-pointer" />
                  </button>
                  <button onClick={() => abrirModal(cargo)}>
                    <Pencil
                      size={25}
                      className="text-blue-500 cursor-pointer"
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {modalAberto && (
        <div className="fixed inset-0 bg-ice bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">
              {cargoSelecionado?.id ? "Editar Cargo" : "Adicionar Cargo"}
            </h2>
            <input
              type="text"
              value={cargoSelecionado?.nome || ""}
              onChange={(e) =>
                setCargoSelecionado({
                  ...cargoSelecionado!,
                  nome: e.target.value,
                })
              }
              placeholder="Nome do Cargo"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="number"
              value={cargoSelecionado?.salarioBase || ""}
              onChange={(e) =>
                setCargoSelecionado({
                  ...cargoSelecionado!,
                  salarioBase: Number(e.target.value),
                })
              }
              placeholder="Salário Base"
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={fecharModal}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancelar
              </button>
              <button
                onClick={salvarCargo}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListarCargos;
