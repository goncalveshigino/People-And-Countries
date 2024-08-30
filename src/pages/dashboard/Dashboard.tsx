import { FerramentasDeDetalhes, FerramentasDeListagem } from "../../shared/components";
import { LayoutBasePagina } from "../../shared/layouts";

export const Dashboard = () => {

    return (
        <LayoutBasePagina 
          titulo="Pagina inicial" 
          barraDeFerramentas={(
            // <FerramentasDeListagem 
            //     mostrarInputBusca
            //     textoBotaoNovo="Nova"
            // />
            <FerramentasDeDetalhes 
              mostrarBotaoSalvarEFechar 
              mostrarBotaoSalvarEFecharCarregando
              mostrarBotaoVoltar = {false}
              />
          )}
        >
            Testando
        </LayoutBasePagina>
    )
}