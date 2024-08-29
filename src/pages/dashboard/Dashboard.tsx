import { BarraDeFerramentas } from "../../shared/components";
import { LayoutBasePagina } from "../../shared/layouts";

export const Dashboard = () => {

    return (
        <LayoutBasePagina 
          titulo="Pagina inicial" 
          barraDeFerramentas={(
            <BarraDeFerramentas 
                mostrarInputBusca
                //textoBotaoNovo="Nova"
            />
          )}
        >
            Testando
        </LayoutBasePagina>
    )
}