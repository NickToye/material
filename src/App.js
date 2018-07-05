<<<<<<< HEAD
import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
// import CustomizedInputs from './components/ButtonsCard';
import green from '@material-ui/core/colors/green';

// import Grid from '@material-ui/core/Grid';
=======
import React, { Component } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import DeliveryTable from './components/DeliveryTable';
import ApplicationBar from './components/ApplicationBar';
>>>>>>> 5b4055246edc6d620293a60e8fed452764cffb7f



const theme = createMuiTheme({
  palette: {
<<<<<<< HEAD
    primary: green,
  }
});

function App() {
=======
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
>>>>>>> 5b4055246edc6d620293a60e8fed452764cffb7f
  
    return (
<<<<<<< HEAD
            <MuiThemeProvider theme={theme}>

              <SearchBar />
              <EnhancedTable />
            </MuiThemeProvider>

=======
      <React.Fragment>

            <MuiThemeProvider theme={theme}>
              <CssBaseline />
                <div style={{ padding: 20 }}>      
                  <ApplicationBar />
                  <DeliveryTable />
                </div>
            </MuiThemeProvider>
          
      </React.Fragment>
>>>>>>> 5b4055246edc6d620293a60e8fed452764cffb7f
    );
}

export default App;
