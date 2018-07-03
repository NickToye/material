import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import DeliveryTable from './components/DeliveryTable';
import SearchBar from './components/SearchBar';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a0f6ff',
      main: '#6ac3f3',
      dark: '#2d93c0',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff8e61',
      main: '#de5e35',
      dark: '#a62d08',
      contrastText: '#fff',
    },
  },
});

class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <MuiThemeProvider theme={theme}>
              <SearchBar />
              <DeliveryTable />
            </MuiThemeProvider>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
