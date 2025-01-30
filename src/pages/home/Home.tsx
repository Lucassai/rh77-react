import { Person } from "@phosphor-icons/react";
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
        <div className="flex space-x-6 text-center">
          <a
            href="https://www.linkedin.com/in/ivanj%C3%BAlio/"
            target="_blank"
            className="text-shadow-ice hover:text-orange-400 transition-transform transform hover:scale-120"
          >
            <Person size={80} /> Ivan
          </a>
          <a
            href="https://www.linkedin.com/in/jaqueline-valle/"
            target="_blank"
            className="text-shawdow-ice hover:text-yellow-300 transition-transform transform hover:scale-120"
          >
            <Person size={80} /> Jaqueline
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-vinicius-mendes/"
            target="_blank"
            className="text-shawdow-ice hover:text-green-500 transition-transform transform hover:scale-110"
          >
            <Person size={80} /> Lucas
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-queiroz/"
            target="_blank"
            className="text-shawdow-ice hover:text-blue-600 transition-transform transform hover:scale-110"
          >
            <Person size={80} />
            Matheus
          </a>
          <a
            href="https://www.linkedin.com/in/nina-raquel/"
            target="_blank"
            className="text-shawdow-ice hover:text-indigo-700 transition-transform transform hover:scale-110"
          >
            <Person size={80} /> Nina
          </a>
          <a
            href="https://www.linkedin.com/in/vitoria-manuela/"
            target="_blank"
            className="text-shawdow-ice hover:text-purple-700 transition-transform transform hover:scale-110"
          >
            <Person size={80} /> Vitória
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
