import axios from "axios"
import type Cargo  from "../../models/cargo/Cargo"

const API_URL = "http://localhost:8080/cargos"

export const cargoService = {
  getAll: async (): Promise<Cargo[]> => {
    const response = await axios.get<Cargo[]>(API_URL)
    return response.data
  },
}

