import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";

import { FerramentasDeListagem } from "../../shared/components";

import { LayoutBasePagina } from "../../shared/layouts";
import { PessoasService } from "../../shared/services/Api/pessoas/PessoasService";



export const ListagemDePessoas: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams])


    useEffect(() => {
        
        PessoasService.getAll(1, busca)
            .then((result) => {
                if(result instanceof Error) {
                    alert(result.message);
                } else {
                    console.log(result)
                }
            })
    }, [busca]);

    return (
        <LayoutBasePagina 
            titulo='Listagem de pessoas'

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