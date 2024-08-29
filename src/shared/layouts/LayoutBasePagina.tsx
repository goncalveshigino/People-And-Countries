import { Icon, IconButton, Typography,useTheme, useThemeProps,useMediaQuery, Theme } from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from "../contexts";

interface ILayoutBasePagina {
    titulo: string
    children: React.ReactNode
}

export const LayoutBasePagina: React.FC<ILayoutBasePagina> = ({ children, titulo }) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const theme = useTheme();
    //const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { toggleDrawerOpen } = useDrawerContext();

    return(
        <Box height="100%" display="flex" flexDirection="column" gap={1}>

            <Box padding={1} display="flex" alignItems="center" height={theme.spacing(12)} gap={1}>

                {smDown &&(
                 <IconButton onClick={toggleDrawerOpen}>
                    <Icon>menu</Icon>
                 </IconButton>
                )}

                <Typography variant="h5">
                    {titulo}
                </Typography>
            </Box>

            <Box>
                Barra de ferramentas
            </Box>


            <Box>
              {children}
            </Box>
        </Box>
    );
}