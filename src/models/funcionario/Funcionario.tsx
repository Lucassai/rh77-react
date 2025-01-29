export interface Cargo {
    id: number
    nome: string
    salarioBase: number
  }
  
  export interface Funcionario {
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
  