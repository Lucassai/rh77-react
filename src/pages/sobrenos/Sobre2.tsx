import { useState } from "react";
import { motion } from "framer-motion";
import { FinnTheHuman } from "@phosphor-icons/react";

const Sobre = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-6 bg-ice relative ${isPopupOpen ? 'backdrop-blur-lg' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold text-silver-ice hover:text-shadow-ice mb-4 flex items-center justify-center gap-2">
          <FinnTheHuman size={55} /> Bem vindo a RH 77
        </h1>
        <p className="text-shadow-ice text-lg mb-6">
          Nosso sistema de RH são desenvolvidos para simplificar e otimizar a gestão de recursos humanos dentro de sua empresa.
          Com uma interface intuitiva e funcionalidades poderosas, ajudamos você a gerenciar colaboradores, folha de pagamento,
          benefícios e muito mais.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="backdrop-blur-lg bg-white/30 shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-shadow-ice mb-2">Nossa Missão</h2>
          <p className="text-silver-ice">
            Criar soluções intuitivas e eficientes para facilitar a organização e aumentar a produtividade na gestão de pessoas.
          </p>
        </div>
        <div className="backdrop-blur-lg bg-white/30 shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-shadow-ice mb-2">Tecnologias</h2>
          <p className="text-silver-ice">
            Utilizamos React, TypeScript, Tailwind CSS e diversas bibliotecas para criar uma experiência moderna e responsiva.
          </p>
        </div>
      </motion.div>

      <button onClick={togglePopup} className="mt-6 bg-dark-ice text-shadow-ice px-4 py-2 rounded-lg hover:text-ice transition">
        Entre em Contato
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/20 backdrop-blur-xs p-5 rounded-lg " onClick={togglePopup}>
          <div className="bg-gray-200 p-6 text-center rounded-lg shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-silver-ice mb-4">Contato</h2>
            <p className="text-silver-ice">Entre em contato pelo e-mail:</p>
            <a href="mailto:contato@rh77.com" className="text-sonic-ice underline">contato@rh77.com</a>
            <p></p>
            <button
              onClick={togglePopup}
              className="mt-4 px-4 py-2 bg-shadow-ice text-white rounded-lg hover:bg-dark-ice transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sobre;