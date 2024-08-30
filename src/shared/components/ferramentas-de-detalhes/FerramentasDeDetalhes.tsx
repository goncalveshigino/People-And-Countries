import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from "@mui/material";

interface IFerramentasDeDetalhesProps {
    textoBotaoNovo?: string;

    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;

    mostrarBotaoSalvarCarregando?: boolean;
    mostrarBotaoNovoCarregando?: boolean;
    mostrarBotaoVoltarCarregando?: boolean;
    mostrarBotaoApagarCarregando?: boolean;
    mostrarBotaoSalvarEFecharCarregando?: boolean;

    aoClicarEmNovo?: () => void;
    aoClicarEmSalvar?: () => void;
    aoClicarEmApagar?: () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhes: React.FC<IFerramentasDeDetalhesProps> = ({
  textoBotaoNovo = 'Novo',

  mostrarBotaoNovo = true, 
  mostrarBotaoApagar = true, 
  mostrarBotaoSalvar = true, 
  mostrarBotaoVoltar = true,
  mostrarBotaoSalvarEFechar = false,

  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,

  aoClicarEmNovo,
  aoClicarEmSalvar,
  aoClicarEmApagar,
  aoClicarEmVoltar,
  aoClicarEmSalvarEFechar
}) => {
    const theme = useTheme()
    
    return(
        <Box 
            gap={1}
            marginX={1}
            padding={1}
            paddingX={2}
            display="flex"
            alignItems="center"
            height={theme.spacing(5)}
            component={Paper}
        >
           {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
                <Button
                color="primary"
                disableElevation
                variant="contained"
                onClick={aoClicarEmSalvar}
                startIcon={<Icon>save</Icon>}
               >
                Salvar
              </Button>
           )}

          {mostrarBotaoSalvarCarregando &&(
             <Skeleton width={110} height={60}/>
          )}

           {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando) && (
                <Button
                color="primary"
                disableElevation
                variant="outlined"
                onClick={aoClicarEmNovo}
                startIcon={<Icon>add</Icon>}
               >
                {textoBotaoNovo}
              </Button>
           )}

            {mostrarBotaoNovoCarregando &&(
                <Skeleton width={110} height={60}/>
            )}

          {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando) && (
                <Button
                color="primary"
                disableElevation
                variant="outlined"
                onClick={aoClicarEmSalvarEFechar}
                startIcon={<Icon>save</Icon>}
               >
                Salvar e fechar
              </Button>
          )}

          {mostrarBotaoSalvarEFecharCarregando &&(
            <Skeleton width={180} height={60}/>
          )}

         {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
             <Button
             color="primary"
             disableElevation
             variant="outlined"
             onClick={aoClicarEmApagar}
             startIcon={<Icon>delete</Icon>}
            >
             Apagar
           </Button>
         )}
            {mostrarBotaoApagarCarregando &&(
                <Skeleton width={110} height={60}/>
            )}

          <Divider variant="middle" orientation="vertical"/>

          {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
                <Button
                color="primary"
                disableElevation
                variant="outlined"
                onClick={aoClicarEmVoltar}
                startIcon={<Icon>arrow_back</Icon>}
               >
                Voltar
              </Button>
          )}

          {mostrarBotaoVoltarCarregando &&(
            <Skeleton width={110} height={60}/>
          )}

        </Box>
    );
} 