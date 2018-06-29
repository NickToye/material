import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
// import CustomizedInputs from './components/ButtonsCard';
import green from '@material-ui/core/colors/green';

// import Grid from '@material-ui/core/Grid';

import EnhancedTable from './components/EnhancedTable';
import SearchBar from './components/SearchBar';


const theme = createMuiTheme({
  palette: {
    primary: green,
  }
});

function App() {
  
    return (
            <MuiThemeProvider theme={theme}>

              <SearchBar />
              <EnhancedTable />
            </MuiThemeProvider>

    );
}

export default App;
