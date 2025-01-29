
function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-blue-950 text-blue-100'>
                <div className="container flex justify-between text-lg">
                    <span>RH 77</span>
                    <div className='flex gap-4'>
                        <a href="#procurar-cargos" className="hover:text-gray-300">Procurar Cargos</a>
                        <a href="#procurar-funcionarios" className="hover:text-gray-300">Procurar Funcionários</a>
                        <a href="#sobre-nos" className="hover:text-gray-300">Sobre nós</a>
                        <a href="#perfil" className="hover:text-gray-300">Perfil</a>
                        <a href="#sair" className="hover:text-gray-300">Sair</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
