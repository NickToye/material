import React from 'react';
// import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import DatePicker from './DatePicker';
import Divider from '@material-ui/core/Divider';
// import { lighten } from '@material-ui/core/styles/colorManipulator';

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
  state = {
    bookable: true,
    booked: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
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
            <DatePicker title="Booking Date" booked_date={this.props.booked_date} />
          </div>
      </FormControl>
    );
  }
}

export default withStyles(styles)(EditOptions);
