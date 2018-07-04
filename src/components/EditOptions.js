import React from 'react';
// import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
// import DatePicker from './DatePicker';
import Divider from '@material-ui/core/Divider';
// import { lighten } from '@material-ui/core/styles/colorManipulator';

import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DatePicker from 'material-ui-pickers/DatePicker';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
    width: '100%',
    boxSizing: 'border-box',
  },

  datePickerContainer: {
    marginTop: theme.spacing.unit * 2,
  }
});



class EditOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookable: this.props.editBookable,
      booked: this.props.editBooked,
      bookedDate: this.props.editBookedDate
    };
    console.log('Constructor: ' + this.state.bookable);
  }
  
  

  handleChange = name => event => {
    console.log('handleChange: ' + this.state.bookable);
    // this.setState({ [name]: event.target.checked });
    this.setState(prev => ({ [name]: !prev.bookable }));
    // this.setState(prev => ({ showDropletsPopover: !prev.showDropletsPopover }));
    console.log('handleChange: ' + this.state.bookable);
  };
  
  handleDateChange = date => {
    this.setState({ bookedDate: date });
  };
  
  

  render() {
    
    return (
      <FormControl component="fieldset" className={this.props.classes.root}>
        
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.bookable}
                onChange={this.handleChange('bookable')}
                value="bookable"
              />
            }
            label="Bookable?"
          />
          </FormGroup>
          <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.booked}
                onChange={this.handleChange('booked')}
                value="booked"
              />
            }
            label="Booked?"
          />
          </FormGroup>
          <Divider light />
          <div className={this.props.classes.datePickerContainer}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker 
                keyboard
                clearable 
                format="D MMM YYYY" 
                value={this.state.bookedDate} 
                onChange={this.handleDateChange} 
                InputProps={{ disableUnderline: true }}
              />
            </MuiPickersUtilsProvider>
          </div>
      </FormControl>
    );
  }
}

export default withStyles(styles)(EditOptions);
