import Cargo from "./Cargo"

export default interface Funcionario{
    id:number;
    nome:string;
    cpf:string;
    dataNascimento:string;
    //perguntar como funciona a data nascmento
    telefone:string;
    email:string;
    cargo: Cargo | null;
}