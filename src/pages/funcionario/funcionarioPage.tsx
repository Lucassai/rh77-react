import type React from "react"
import { useState, useEffect } from "react"
import type { Funcionario, FuncionarioFormData } from "../../models/funcionario/Funcionario"
import FuncionarioForm from "../../components/funcionarioForm/FuncionarioForm"
import { funcionarioService } from "../../services/funcionarioService/FuncionarioService"

const FuncionarioPage: React.FC = () => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([])
  const [termoBusca, setTermoBusca] = useState("")
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState<Funcionario | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    buscarFuncionarios()
  }, [])

  const buscarFuncionarios = async () => {
    try {
      const data = await funcionarioService.getAll()
      setFuncionarios(data)
      console.log(data)
    } catch (error) {
      console.error("Erro ao buscar funcionários:", error)
    }
  }

  const buscarFuncionarioPorId = async (id: number) => {
    try {
      const data = await funcionarioService.getById(id)
      setFuncionarioSelecionado(data)
      setIsEditing(true)
      setIsDialogOpen(true)
    } catch (error) {
      console.error("Erro ao buscar funcionário por ID:", error)
    }
  }

  const criarFuncionario = async (data: FuncionarioFormData) => {
    try {
      await funcionarioService.create(data)
      console.log(data)
      buscarFuncionarios()
      setIsDialogOpen(false)
    } catch (error) {
      console.error("Erro ao criar funcionário:", error)
    }
  }

  const atualizarFuncionario = async (data: FuncionarioFormData) => {
    if (!funcionarioSelecionado) return
    try {
      await funcionarioService.update(funcionarioSelecionado.id, data)
      buscarFuncionarios()
      setIsDialogOpen(false)
    } catch (error) {
      console.error("Erro ao atualizar funcionário:", error)
    }
  }

  const deletarFuncionario = async (id: number) => {
    try {
      await funcionarioService.delete(id)
      buscarFuncionarios()
    } catch (error) {
      console.error("Erro ao deletar funcionário:", error)
    }
  }

  const handleSubmit = (data: FuncionarioFormData) => {
    isEditing ? atualizarFuncionario(data) : criarFuncionario(data)
  }

  const filtrarFuncionarios = () => {
    return funcionarios.filter(
      (func) =>
        func.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
        func.cpf.includes(termoBusca) ||
        func.id.toString().includes(termoBusca),
    )
  }

  return (
    <div className="container mx-auto p-4 bg-blue-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-white bg-blue-600 p-3 rounded-lg text-center shadow-md">
        Gerenciamento de Funcionários
      </h1>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Buscar por Nome, CPF ou ID"
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
          className="w-1/2 p-2 border rounded bg-white text-blue-800 placeholder-blue-300 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        <button
          onClick={() => {
            setFuncionarioSelecionado(null)
            setIsEditing(false)
            setIsDialogOpen(true)
          }}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out shadow-md"
        >
          Adicionar Funcionário
        </button>
      </div>
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-blue-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4 text-blue-800">
              {isEditing ? "Editar Funcionário" : "Adicionar Funcionário"}
            </h2>
            <FuncionarioForm
              initialData={
                funcionarioSelecionado
                  ? {
                      ...funcionarioSelecionado,
                      cargo: funcionarioSelecionado.cargo.id,
                    }
                  : undefined
              }
              onSubmit={handleSubmit}
            />
            <button
              onClick={() => setIsDialogOpen(false)}
              className="mt-4 bg-blue-100 text-blue-800 p-2 rounded hover:bg-blue-200 transition duration-300 ease-in-out"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border-b border-blue-200 p-2">ID</th>
              <th className="border-b border-blue-200 p-2">Nome</th>
              <th className="border-b border-blue-200 p-2">CPF</th>
              <th className="border-b border-blue-200 p-2">Data de Nascimento</th>
              <th className="border-b border-blue-200 p-2">Data de Admissão</th>
              <th className="border-b border-blue-200 p-2">Telefone</th>
              <th className="border-b border-blue-200 p-2">E-mail</th>
              <th className="border-b border-blue-200 p-2">Cargo</th>
              <th className="border-b border-blue-200 p-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtrarFuncionarios().map((func, index) => (
              <tr key={func.id} className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                <td className="border-b border-blue-100 p-2 text-blue-800">{func.id}</td>
                <td className="border-b border-blue-100 p-2 text-blue-800">{func.nome}</td>
                <td className="border-b border-blue-100 p-2 text-blue-800">{func.cpf}</td>
                <td className="border-b border-blue-100 p-2 text-blue-800">
                  {new Date(func.dataNascimento).toLocaleDateString("pt-BR")}
                </td>
                <td className="border-b border-blue-100 p-2 text-blue-800">
                  {new Date(func.dataAdmissao).toLocaleDateString("pt-BR")}
                </td>
                <td className="border-b border-blue-100 p-2 text-blue-800">{func.telefone}</td>
                <td className="border-b border-blue-100 p-2 text-blue-800">{func.email}</td>
                <td className="border-b border-blue-100 p-2 text-blue-800">{func.cargo?.nome ?? null}</td>
                <td className="border-b border-blue-100 p-2 flex gap-2">
                  <button
                    onClick={() => buscarFuncionarioPorId(func.id)}
                    className="bg-blue-100 text-blue-600 p-1 rounded hover:bg-blue-200 transition duration-300 ease-in-out"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => deletarFuncionario(func.id)}
                    className="bg-red-100 text-red-600 p-1 rounded hover:bg-red-200 transition duration-300 ease-in-out"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FuncionarioPage

