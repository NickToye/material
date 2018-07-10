import React, { Component } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// import DeliveryTable from './components/DeliveryTable';
// import ApplicationBar from './components/ApplicationBar';
import TestTable from './components/TestTable';



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
  overrides: {
    root: {
      backgroundColor: 'pink'
    },
    MUIDataTableSelectCell: {
      checkboxRoot: {
        '&$checked': {
          color: '#1e90e5'
        }
      },
    },
    MuiMenuItem: {
      root: {
        fontSize: 13
      }
    },
    MuiSvgIcon: {
      root: {
        color: 'primary',
      },
    },
    MuiInput: {
      root: {
        fontSize: 13
      }
    }
    
  }
  
});




class App extends Component {
render() {
    return (
      <React.Fragment>

            <MuiThemeProvider theme={theme}>
              <CssBaseline />
                <div style={{ padding: 20 }}>   
                  <TestTable />   
                  
                  
                </div>
            </MuiThemeProvider>
          
      </React.Fragment>
    );
  }
}

export default App;
