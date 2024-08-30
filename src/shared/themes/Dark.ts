import { createTheme } from '@mui/material';
import { cyan, purple } from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: purple[500],
            dark: purple[600],
            light: purple[700],
            contrastText: '#ffffff'
        }, 
        secondary: {
            main: cyan[500],
            dark: cyan[800],
            light: cyan[300],
            contrastText: '#ffffff'
        }, 
        background: {
            default: '#202124',
            paper: '#303134'
        }
    },
    typography: {
        allVariants: {
            color: 'white'
        }
    }
})