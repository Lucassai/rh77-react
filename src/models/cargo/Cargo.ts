import Funcionario from "../Funcionario";

export default interface Cargo {
  id: number;
  nome: string;
  salarioBase: number;
  funcionario: Funcionario | null;
}
