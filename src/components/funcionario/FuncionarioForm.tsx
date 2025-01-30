import type React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import type { FuncionarioFormData } from "../../models/funcionario/Funcionario"
import Cargo from "../../models/cargo/Cargo"

interface FuncionarioFormProps {
  initialData?: FuncionarioFormData
  onSubmit: (data: FuncionarioFormData) => void
}

const FuncionarioForm: React.FC<FuncionarioFormProps> = ({ initialData, onSubmit }) => {
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
    setFormData((prev) => ({ ...prev, [name]: name === "cargoId" ? Number.parseInt(value, 10) : value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          placeholder="CPF"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <input
          type="date"
          name="dataNascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <input
          type="date"
          name="dataAdmissao"
          value={formData.dataAdmissao}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <input
          type="tel"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          placeholder="Telefone"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <select
          name="cargo"
          value={formData.cargo}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Selecione um cargo</option>
          {cargos.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nome}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="w-full p-2 bg-ice text-shadow-ice rounded hover:bg-blue-600">
        Salvar
      </button>
    </form>
  )
}

export default FuncionarioForm

