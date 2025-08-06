import { buscar } from "../../../services/Service";
import { useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import CardCategoria from "../cardcategoria/CardCategorias";
import { DNA } from "react-loader-spinner";


function ListaCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias)
        } catch (error: any) {
            console.error('deu ruim');
        }
    }

    useEffect(() => {
        buscarCategorias()    
    }, [categorias.length])
    
    return (
        <>
            {
                categorias.length === 0 && (
                    <DNA
                    visible={true}
                    height="100"
                    width="100"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                    />
                )
            }
                <div className="flex justify-center w-full my-4">
                    <div className="container flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categorias.map((categoria) => (
                                <CardCategoria key={categoria.id} categoria={categoria} />
                            ))}
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ListaCategorias;