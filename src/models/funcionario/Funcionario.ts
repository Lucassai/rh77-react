import Cargo from "../cargo/Cargo"
  
  export default interface Funcionario {
    id: number
    nome: string
    cpf: string
    dataNascimento: string
    dataAdmissao: string
    telefone: string
    email: string
    cargo: Cargo
  }
  
  export interface FuncionarioFormData {
    nome: string
    cpf: string
    dataNascimento: string
    dataAdmissao: string
    telefone: string
    email: string
    cargo: any
  }
  