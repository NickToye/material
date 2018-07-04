import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DatePicker from 'material-ui-pickers/DatePicker';

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginRight: theme.spacing.unit,
//     width: 200,
//     paddingTop: theme.spacing.unit * 2,
//     marginLeft: 0
// 
//   },
// });
// 
// function DatePickers(props) {
//   const { classes, title, booked_date } = props;
//   return (
//     <div>
//       <time>{booked_date}</time>
//       <TextField
//         id="date"
//         type="date"
//         label={title}
//         defaultValue={booked_date}
//         className={classes.textField}
//         InputProps={{
//           disableUnderline: true
//         }}
//         InputLabelProps={{
//           shrink: true,
//         }}
//       />
//   </div>
//   );
// }
// 
// DatePickers.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
// 
// export default withStyles(styles)(DatePickers);

export default class DatePickers extends PureComponent {
  state = {
    selectedDate: this.props.booked_date
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="pickers">
          <Typography color="primary" variant="subheading">Delivery Date</Typography>
          <div className="picker">
            <DatePicker 
              keyboard
              clearable 
              format="D MMM YYYY" 
              value={selectedDate} 
              onChange={this.handleDateChange} 
              InputProps={{ disableUnderline: true }}
            />
          </div>
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}
