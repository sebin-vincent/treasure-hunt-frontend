import { createMuiTheme } from '@material-ui/core';

const Theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f89d13',
            contrastText: '#fff'
        },
        secondary: {
            main: '#ff4040',
            contrastText: '#fff'
        },
    },
    typography: {
        htmlFontSize: 10,
        fontSize: 12,
        fontFamily: 'Montserrat, Roboto, sans-serif'
    }
});

export default Theme;