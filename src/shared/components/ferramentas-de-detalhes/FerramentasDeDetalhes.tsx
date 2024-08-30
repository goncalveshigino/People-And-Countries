import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";

interface IFerramentasDeDetalhesProps {
    textoBotaoNovo?: string;

    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;

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
           {mostrarBotaoSalvar && (
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

           {mostrarBotaoNovo && (
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

          {mostrarBotaoSalvarEFechar && (
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

         {mostrarBotaoApagar && (
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

          <Divider variant="middle" orientation="vertical"/>
          {mostrarBotaoVoltar && (
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
        </Box>
    );
} 