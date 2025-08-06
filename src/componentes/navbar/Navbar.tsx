import { Link } from "react-router-dom";

function Navbar() {

    return (
        <>
            <nav className='w-full bg-[#5B6355] text-white flex justify-center py-4'>

                <div className="container flex justify-between items-center text-lg">
                    <Link to='/' className="text-3xl font-bold" style={{fontFamily: 'Playfair'}}>FarmaCare</Link>

                    <div className='flex gap-10'>
                        <Link to='/categorias'>Categorias</Link>
                        <Link to='/produtos'>Produtos</Link>
                        <Link to='/contato'>Contato</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;