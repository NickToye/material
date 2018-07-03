import React, { Component } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import DeliveryTable from './components/DeliveryTable';



const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#3384F3',
      main: '#1e90e5',
      dark: '#2d93c0',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff8e61',
      main: '#e65345',
      dark: '#a62d08',
      contrastText: '#fff',
    },
    background: {
      default: "#f6f7fb",
      paper: "#fff",
    },
    
  },
});


class App extends Component {
  
  render() {
    return (
      <React.Fragment>

            <MuiThemeProvider theme={theme}>
              <CssBaseline />
                <div style={{ padding: 20 }}>
                  <Typography color="primary" variant="headline" gutterBottom align="center">
                    Delivery Management
                  </Typography>
                  
                    <DeliveryTable />
                  </div>
            </MuiThemeProvider>
          
      </React.Fragment>
    );
  }
}

export default App;
