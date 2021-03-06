import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Checkbox from '@material-ui/core/Checkbox';
// import EditDialog from './EditDialog';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DatePicker from 'material-ui-pickers/DatePicker';
import lightBlue from '@material-ui/core/colors/lightBlue';

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: lightBlue.A200,
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: lightBlue.A200,
        // color: 'white',
      },
    },
    MuiInput: {
      root: {
        fontSize: '13'
      }
    },
    MuiPickersDay: {
      day: {
        color: lightBlue.A700,
      },
      selected: {
        backgroundColor: lightBlue['400'],
      },
      current: {
        color: lightBlue['900'],
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: lightBlue['400'],
      },
    },
  },
});

class DeliveryRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBookable: this.props.isBookable,
      isBooked: this.props.isBooked,
      bookedDate: this.props.details.booked_date,
    };
    
    this.updateBookable = this.updateBookable.bind(this);
    this.updateBooked = this.updateBooked.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  
  
  
  
  
  updateBookable() {
    this.setState(prevState => ({ isBookable: !prevState.isBookable, isBooked: false }));
    if(!this.state.isBookable) {
      this.setState({ isBooked: false });
    }
  }
  
  updateBooked() {
    this.setState(prevState => ({ isBooked: !prevState.isBooked }));
  }
  
  handleDateChange = date => {
    this.setState({ bookedDate: date });
  };

  render() {
    const details = this.props.details;
    const isSelected = this.props.isSelected;
    const isBookable = this.state.isBookable;
    const isBooked = this.state.isBooked;
    
    
    return (
        
      <TableRow key={details.id} hover selected={isSelected}>
        <TableCell padding="checkbox">
          <Checkbox checked={isSelected} onClick={this.props.selectedAction} />
        </TableCell>
        <TableCell component="th" scope="row" padding="none">
          {details.consignment}
        </TableCell>
        <TableCell>
          {details.order_ref}
        </TableCell>
        <TableCell><Checkbox checked={isBookable} onClick={this.updateBookable} /></TableCell>
        <TableCell>
          {isBookable ? <Checkbox checked={isBooked} onClick={this.updateBooked} /> : <Checkbox checked={isBooked} onClick={this.updateBooked} disabled/>}
      </TableCell>
        <TableCell>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <MuiThemeProvider theme={materialTheme}>
              <div className="picker">
                <DatePicker 
                  keyboard
                  clearable 
                  format="Do MMM YYYY" 
                  value={this.state.bookedDate} 
                  onChange={this.handleDateChange} 
                  InputProps={{ disableUnderline: true }}
                />
              </div>
            </MuiThemeProvider>
          </MuiPickersUtilsProvider>
        </TableCell>
      </TableRow>
    );
  }
}

DeliveryRow.propTypes = {
  details: PropTypes.object,
  isSelected: PropTypes.bool,
};

export default DeliveryRow;