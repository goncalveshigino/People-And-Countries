import { ReactNode } from "react";
import { Icon, IconButton, Typography,useTheme,useMediaQuery, Theme } from "@mui/material";
import { Box } from "@mui/system";

import { useDrawerContext } from "../contexts";


interface ILayoutBasePagina {
    titulo: string
    barraDeFerramentas?: ReactNode
    children: React.ReactNode
}

export const LayoutBasePagina: React.FC<ILayoutBasePagina> = ({ children, titulo, barraDeFerramentas }) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const theme = useTheme();

    const { toggleDrawerOpen } = useDrawerContext();

    return(
        <Box height="100%" display="flex" flexDirection="column" gap={1}>

            <Box padding={1} display="flex" alignItems="center" gap={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>

                {smDown &&(
                 <IconButton onClick={toggleDrawerOpen}>
                    <Icon>menu</Icon>
                 </IconButton>
                )}

                <Typography 
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                    variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
                >
                    {titulo}
                </Typography>
            </Box>

            {barraDeFerramentas && (
                <Box>
                {barraDeFerramentas}
                </Box>
            )}


            <Box flex={1} overflow="auto">
              {children}
            </Box>
        </Box>
    );
}