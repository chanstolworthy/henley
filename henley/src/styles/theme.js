import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#289DE0',
            main: '#289DE0',
            dark: '#289DE0',
            contrastText: '#FFF',
        },
        secondary: {
            light: '#289DE0',
            main: '#289DE0',
            dark: '#289DE0',
            contrastText: '#FFF'
        },
    },
    overrides: {
        MuiCardActions: {
            root: {
                display: 'flex',
            },
        },
    },
    typography: {
        fontFamily: ['Source Sans Pro'].join(),
        headline: {
            fontSize: 20,
            fontWeight: 600,
            lineHeight: 1.35417,
            color: 'red',
        }
    },
});

export default theme


