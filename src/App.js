import React, { Component } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import DeliveryManagementTable from './components/DeliveryManagementTable';
// import BottomNav from "./components/BottomNav";



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
    MuiInput: {
      root: {
        fontSize: 13
      }
    },
    MUIDataTableToolbarSelect: {
      root: {
        backgroundColor: '#1e90e5',
        color: 'white'
      },
      title: {
        color: 'white'
      },
      deleteIcon: {
        color: 'white'
      }
    },
    MuiBottomNavigationAction: {
      root: {
        backgroundColor: 'blue',
        '&$selected': {
          color: 'red'
        }
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
                  <DeliveryManagementTable />
                </div>
            </MuiThemeProvider>
          
      </React.Fragment>
    );
  }
}

export default App;
