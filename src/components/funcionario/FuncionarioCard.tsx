import type React from "react"
import type { Funcionario } from "../../models/funcionario/Funcionario"

interface FuncionarioCardProps {
  funcionario: Funcionario
  onEdit: (id: number) => void
  onDelete: (id: number) => void
}

const FuncionarioCard: React.FC<FuncionarioCardProps> = ({ funcionario, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">{funcionario.nome}</h3>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div>
          <p className="font-medium">ID:</p>
          <p>{funcionario.id}</p>
        </div>
        <div>
          <p className="font-medium">CPF:</p>
          <p>{funcionario.cpf}</p>
        </div>
        <div>
          <p className="font-medium">Data de Nascimento:</p>
          <p>{new Date(funcionario.dataNascimento).toLocaleDateString("pt-BR")}</p>
        </div>
        <div>
          <p className="font-medium">Data de Admissão:</p>
          <p>{new Date(funcionario.dataAdmissao).toLocaleDateString("pt-BR")}</p>
        </div>
        <div>
          <p className="font-medium">Telefone:</p>
          <p>{funcionario.telefone}</p>
        </div>
        <div>
          <p className="font-medium">E-mail:</p>
          <p className="truncate">{funcionario.email}</p>
        </div>
        <div className="col-span-2">
          <p className="font-medium">Cargo:</p>
          <p>{funcionario.cargo?.nome ?? "N/A"}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={() => onEdit(funcionario.id)}
          className="bg-blue-100 text-blue-600 px-3 py-1 rounded hover:bg-blue-200 transition duration-300 ease-in-out"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(funcionario.id)}
          className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition duration-300 ease-in-out"
        >
          Excluir
        </button>
      </div>
    </div>
  )
}

export default FuncionarioCard

