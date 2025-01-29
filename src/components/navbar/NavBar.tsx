import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-blue-950 text-blue-100'>
                <div className="container flex justify-between text-lg">
                    <span>RH 77</span>
                    <div className='flex gap-4'>
                        <Link to="/cargos" className="hover:text-gray-300">Procurar Cargos</Link>
                        <Link to="/funcionarios" className="hover:text-gray-300">Procurar Funcionários</Link>
                        <Link to="/sobrenos" className="hover:text-gray-300">Sobre nós</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
