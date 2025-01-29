import type React from "react"
import { useState, useEffect } from "react"
import type { Funcionario, FuncionarioFormData } from "../../models/funcionario/Funcionario"
import FuncionarioForm from "../../components/funcionario/FuncionarioForm"
import FuncionarioCard from "../../components/funcionario/FuncionarioCard"
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
    <div className="container mx-auto p-4 bg-blue-50 min-h-screen shadow-2xl">
      <h1 className="text-2xl font-bold mb-6 text-blue-800 text-center">Gerenciamento de Funcionários</h1>
      <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Buscar por Nome, CPF ou ID"
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
          className="w-full sm:w-2/3 p-2 border rounded bg-white text-blue-800 placeholder-blue-300 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        <button
          onClick={() => {
            setFuncionarioSelecionado(null)
            setIsEditing(false)
            setIsDialogOpen(true)
          }}
          className="w-full sm:w-auto bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out shadow-md"
        >
          Adicionar Funcionário
        </button>
      </div>
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-900 bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
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
              className="mt-4 w-full bg-blue-100 text-blue-800 p-2 rounded hover:bg-blue-200 transition duration-300 ease-in-out"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtrarFuncionarios().map((funcionario) => (
          <FuncionarioCard
            key={funcionario.id}
            funcionario={funcionario}
            onEdit={buscarFuncionarioPorId}
            onDelete={deletarFuncionario}
          />
        ))}
      </div>
    </div>
  )
}

export default FuncionarioPage

