import type React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import type { FuncionarioFormData } from "../../models/funcionario/Funcionario"
import type Cargo from "../../models/cargo/Cargo"

interface FuncionarioFormProps {
  initialData?: FuncionarioFormData
  onSubmit: (data: FuncionarioFormData) => void
  errors: Record<string, string> // Adicionando prop para erros
}

const FuncionarioForm: React.FC<FuncionarioFormProps> = ({ 
  initialData, 
  onSubmit,
  errors
}) => {
  const [formData, setFormData] = useState<FuncionarioFormData>(
    initialData || {
      nome: "",
      cpf: "",
      dataNascimento: "",
      dataAdmissao: "",
      telefone: "",
      email: "",
      cargo: 0,
    },
  )
  const [cargos, setCargos] = useState<Cargo[]>([])
  
  useEffect(() => {
    const fetchCargos = async () => {
      try {
        const response = await axios.get<Cargo[]>("http://localhost:8080/cargos")
        setCargos(response.data)
      } catch (error) {
        console.error("Erro ao buscar cargos:", error)
      }
    }

    fetchCargos()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ 
      ...prev, 
      [name]: name === "cargo" ? Number.parseInt(value, 10) : value 
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Campo Nome */}
      <div>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome"
          required
          className={`w-full p-2 border rounded ${errors.nome ? 'border-red-500' : ''}`}
        />
        {errors.nome && (
          <span className="text-red-500 text-sm mt-1 block">{errors.nome}</span>
        )}
      </div>

      {/* Campo CPF */}
      <div>
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          placeholder="CPF"
          required
          className={`w-full p-2 border rounded ${errors.cpf ? 'border-red-500' : ''}`}
        />
        {errors.cpf && (
          <span className="text-red-500 text-sm mt-1 block">{errors.cpf}</span>
        )}
      </div>

      {/* Data Nascimento */}
      <div>
        <label className="block mb-1">Data de Nascimento</label>
        <input
          type="date"
          name="dataNascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
          required
          className={`w-full p-2 border rounded ${errors.dataNascimento ? 'border-red-500' : ''}`}
        />
        {errors.dataNascimento && (
          <span className="text-red-500 text-sm mt-1 block">{errors.dataNascimento}</span>
        )}
      </div>

      {/* Data Admissão */}
      <div>
        <label className="block mb-1">Data de Admissão</label>
        <input
          type="date"
          name="dataAdmissao"
          value={formData.dataAdmissao}
          onChange={handleChange}
          required
          className={`w-full p-2 border rounded ${errors.dataAdmissao ? 'border-red-500' : ''}`}
        />
        {errors.dataAdmissao && (
          <span className="text-red-500 text-sm mt-1 block">{errors.dataAdmissao}</span>
        )}
      </div>

      {/* Telefone */}
      <div>
        <input
          type="tel"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          placeholder="Telefone"
          required
          className={`w-full p-2 border rounded ${errors.telefone ? 'border-red-500' : ''}`}
        />
        {errors.telefone && (
          <span className="text-red-500 text-sm mt-1 block">{errors.telefone}</span>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && (
          <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>
        )}
      </div>

      {/* Cargo */}
      <div>
        <select
          name="cargo"
          value={formData.cargo}
          onChange={handleChange}
          required
          className={`w-full p-2 border rounded ${errors.cargo ? 'border-red-500' : ''}`}
        >
          <option value="">Selecione um cargo</option>
          {cargos.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nome}
            </option>
          ))}
        </select>
        {errors.cargo && (
          <span className="text-red-500 text-sm mt-1 block">{errors.cargo}</span>
        )}
      </div>

      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Salvar
      </button>
    </form>
  )
}

export default FuncionarioForm