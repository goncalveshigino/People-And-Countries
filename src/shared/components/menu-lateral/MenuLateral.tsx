import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { Box, useMediaQuery } from "@mui/system";

import { useDrawerContext } from "../../contexts";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IMenuComponent {
  children: React.ReactNode;
}

interface IListItemLink {
   label: string;
   icon: string;
   to: string;
   onClick: (() => void) | undefined;
}

interface IListItemLinkProps {
    children: React.ReactNode;
 }

const ListItemLink: React.FC<IListItemLink> = ({to, icon, label, onClick}) => {
const navigate = useNavigate()

//Hook que mostra qual path nos encontramos
const resovedPath = useResolvedPath(to)

//Mostra se a rota esta selecionada ou nao
const match = useMatch({ path: resovedPath.pathname, end: false})

    const handleClick = () => {
        navigate(to);
        onClick?.();
    };

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
                </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
}

export const MenuLateral: React.FC<IMenuComponent> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://avatars.githubusercontent.com/u/62660875?v=4"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
               {drawerOptions.map(drawerOption => (
                    <ListItemLink 
                    key={drawerOption.path}
                    icon = {drawerOption.icon}
                    to = '/pagina-inicial'
                    label = "Página inicial"
                    onClick={smDown ? toggleDrawerOpen : undefined}
                    />
               ))}
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
