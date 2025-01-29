import React from "react";
import { AppleLogo, LinkedinLogo, Person } from "@phosphor-icons/react";
function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-ice p-6">
        {/* Título */}
        <h1 className="text-4xl font-bold text-shadow-ice mb-6">
          Recursos Humanos 77
        </h1>

        {/* Imagem */}
        <div className="bg-ice shadow-lg rounded-2xl p-4 w-1/2 flex justify-center mb-6">
          <img
            src="https://ik.imagekit.io/lkxant9gz/rb_5473.png?updatedAt=1738188987196"
            alt="Logo RH"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Ícones */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/school/generationbrasil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-shawdow-ice hover:text-red-800 transition-transform transform hover:scale-110"
          >
            <Person size={80} weight="bold" />
          </a>
          <a
            href="https://www.linkedin.com/school/generationbrasil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-shawdow-ice hover:text-orange-400 transition-transform transform hover:scale-110"
          >
            <Person size={80} weight="bold" />
          </a>
          <a
            href="https://www.linkedin.com/school/generationbrasil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-shawdow-ice hover:text-yellow-300 transition-transform transform hover:scale-110"
          >
            <Person size={80} weight="bold" />
          </a>
          <a
            href="https://www.linkedin.com/school/generationbrasil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-shawdow-ice hover:text-green-500 transition-transform transform hover:scale-110"
          >
            <Person size={80} weight="bold" />
          </a>
          <a
            href="https://www.linkedin.com/school/generationbrasil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-shawdow-ice hover:text-blue-600 transition-transform transform hover:scale-110"
          >
            <Person size={80} weight="bold" />
          </a>
          <a
            href="https://www.linkedin.com/school/generationbrasil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-shawdow-ice hover:text-indigo-700 transition-transform transform hover:scale-110"
          >
            <Person size={80} weight="bold" />
          </a>
          <a
            href="https://www.linkedin.com/school/generationbrasil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-shawdow-ice hover:text-purple-700 transition-transform transform hover:scale-110"
          >
            <Person size={80} weight="bold" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
