import { useSearchParams } from "react-router-dom";

import { LayoutBasePagina } from "../../shared/layouts";
import { FerramentasDeListagem } from "../../shared/components";
import { useMemo } from "react";



export const ListagemDeCidades: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams])

    return (
        <LayoutBasePagina 
            titulo='Listagem de cidades'
            
            barraDeFerramentas = {
              <FerramentasDeListagem
                mostrarInputBusca
                textoDaBusca= {busca}
                textoBotaoNovo="Nova"
                aoMudarTextoDeBusca={texto => setSearchParams({ busca: texto}, {replace: true})}
              />
            }                 
        >
            teste
        </LayoutBasePagina>
    );
} 