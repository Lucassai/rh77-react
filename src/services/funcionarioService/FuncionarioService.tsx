import axios from "axios";
import Funcionario, {
  FuncionarioFormData,
} from "../../models/funcionario/Funcionario";

const API_URL = "http://localhost:8080/funcionarios";

export const funcionarioService = {
  getAll: async (): Promise<Funcionario[]> => {
    const response = await axios.get<Funcionario[]>(API_URL);
    return response.data;
  },

  getById: async (id: number): Promise<Funcionario> => {
    const response = await axios.get<Funcionario>(`${API_URL}/id/${id}`);
    return response.data;
  },

  getByCpf: async (cpf: string): Promise<Funcionario> => {
    const response = await axios.get<Funcionario>(`${API_URL}/cpf/${cpf}`);
    return response.data;
  },

  create: async (data: FuncionarioFormData): Promise<Funcionario> => {
    let c = data.cargo;
    data.cargo = { id: c };
    console.log(data);
    const response = await axios.post<Funcionario>(API_URL, data);
    return response.data;
  },

  update: async (
    id: number,
    data: FuncionarioFormData
  ): Promise<Funcionario> => {
    console.log(data);
    let c = data.cargo;
    data.cargo = { id: c };
    const response = await axios.put<Funcionario>(`${API_URL}/${id}`, data);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  },
};
