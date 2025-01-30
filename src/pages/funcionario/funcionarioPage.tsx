import type React from "react";
import { useState, useEffect } from "react";
import type {
  Funcionario,
  FuncionarioFormData,
} from "../../models/funcionario/Funcionario";
import FuncionarioForm from "../../components/funcionario/FuncionarioForm";
import FuncionarioCard from "../../components/funcionario/FuncionarioCard";
import { funcionarioService } from "../../services/funcionarioService/FuncionarioService";
import { isAxiosError } from "axios";


const FuncionarioPage: React.FC = () => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [termoBusca, setTermoBusca] = useState("");
  const [funcionarioSelecionado, setFuncionarioSelecionado] =
    useState<Funcionario | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    buscarFuncionarios();
  }, []);

  const buscarFuncionarios = async () => {
    try {
      const data = await funcionarioService.getAll();
      setFuncionarios(data);
    } catch (error) {
      console.error("Erro ao buscar funcionários:", error);
    }
  };

  const buscarFuncionarioPorId = async (id: number) => {
    try {
      const data = await funcionarioService.getById(id);
      setFuncionarioSelecionado(data);
      setIsEditing(true);
      setIsDialogOpen(true);
    } catch (error) {
      console.error("Erro ao buscar funcionário por ID:", error);
    }
  };

  const criarFuncionario = async (data: FuncionarioFormData) => {
    try {
      await funcionarioService.create(data);
      buscarFuncionarios();
      setIsDialogOpen(false);
      setFormErrors({});
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMap: Record<string, string> = {};
        
        // Tratamento específico para erro de CPF duplicado
        if (error.response?.status === 500 && error.response.data.message) {
          const message: string = error.response.data.message;
          
          // Verifica se é erro de constraint do CPF
          if (message.includes('Duplicate entry')) {
            errorMap.cpf = "CPF já está em uso";
          }
        }
        // Tratamento genérico para erros de validação
        else if (error.response?.data?.errors) {
          const errors = error.response.data.errors;
          errors.forEach((err: any) => {
            const field = err.code.toLowerCase();
            errorMap[field] = err.message || `${field} inválido`;
          });
        }

        // Tratamento genérico para outros erros
        if (Object.keys(errorMap).length === 0) {
          errorMap.general = "Erro ao salvar funcionário. Tente novamente mais tarde.";
        }

        setFormErrors(errorMap);
      }
    }
  };
  
  const atualizarFuncionario = async (data: FuncionarioFormData) => {
    if (!funcionarioSelecionado) return;
    try {
      await funcionarioService.update(funcionarioSelecionado.id, data);
      buscarFuncionarios();
      setIsDialogOpen(false);
      setFormErrors({}); // Limpa erros ao sucesso
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMap: Record<string, string> = {};
        
        // Tratamento específico para erro de CPF duplicado
        if (error.response?.status === 500 && error.response.data.message) {
          const message: string = error.response.data.message;
          
          // Verifica se é erro de constraint do CPF
          if (message.includes('Duplicate entry')) {
            errorMap.cpf = "CPF já está em uso";
          }
        }
        // Tratamento genérico para erros de validação
        else if (error.response?.data?.errors) {
          const errors = error.response.data.errors;
          errors.forEach((err: any) => {
            const field = err.code.toLowerCase();
            errorMap[field] = err.message || `${field} inválido`;
          });
        }

        // Tratamento genérico para outros erros
        if (Object.keys(errorMap).length === 0) {
          errorMap.general = "Erro ao salvar funcionário. Tente novamente mais tarde.";
        }

        setFormErrors(errorMap);
      }
    }
  };

  const deletarFuncionario = async (id: number) => {
    try {
      await funcionarioService.delete(id);
      buscarFuncionarios();
    } catch (error) {
      console.error("Erro ao deletar funcionário:", error);
    }
  };

  const handleSubmit = (data: FuncionarioFormData) => {
    isEditing ? atualizarFuncionario(data) : criarFuncionario(data);
  };

  const filtrarFuncionarios = () => {
    return funcionarios.filter(
      (func) =>
        func.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
        func.cpf.includes(termoBusca) ||
        func.id.toString().includes(termoBusca)
    );
  };

  return (
    <div className="container mx-auto p-4 bg-blue-50 min-h-screen shadow-2xl">
      <h1 className="text-2xl font-bold mb-6 text-shadow-ice text-center">
        Gerenciamento de Funcionários
      </h1>
      <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Buscar por Nome, CPF ou ID"
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
          className="w-full sm:w-2/3 p-2 border rounded bg-white text-blue-800 placeholder-black border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        <button
          onClick={() => {
            setFuncionarioSelecionado(null);
            setIsEditing(false);
            setIsDialogOpen(true);
            setFormErrors({});
          }}
          className="w-full sm:w-auto bg-dark-ice text-white p-2 rounded hover:bg-blue-500 transition duration-300 ease-in-out shadow-md"
        >
          Adicionar Funcionário
        </button>
      </div>
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-ice bg-opacity-50 p-4">
          <div className="bg-ice p-6 rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-blue-800">
              {isEditing ? "Editar Funcionário" : "Adicionar Funcionário"}
            </h2>
            <FuncionarioForm
              initialData={
                funcionarioSelecionado
                  ? {
                      ...funcionarioSelecionado,
                      cargo: funcionarioSelecionado?.cargo?.id ?? 0
                    }
                  : undefined
              }
              onSubmit={handleSubmit}
              errors={formErrors}
            />
            <button
              onClick={() => {setIsDialogOpen(false);setFormErrors({});}}
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
  );
};

export default FuncionarioPage;
