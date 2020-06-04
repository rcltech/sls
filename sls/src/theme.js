import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: '#3AB6CC'
      },
      secondary: {
        main: '#25727F'
      }
    }
  })
);
