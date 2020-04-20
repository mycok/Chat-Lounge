import { createMuiTheme } from '@material-ui/core/styles';

export const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffa500',
    },
    secondary: {
      main: '#4caf50',
    },
    error: {
      main: '#ff0000',
    },
    action: {
      active: '#ffa500',
      hover: '#4c4c4c',
      selected: '#ffa500',
    },
    typography: {
      fontFamily: [
        'Roboto',
        '"Segoe UI"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    type: 'dark',
  },
});
