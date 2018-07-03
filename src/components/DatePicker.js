import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginRight: theme.spacing.unit,
    width: 200,
    paddingTop: theme.spacing.unit * 2,
    marginLeft: 0
    
  },
});

function DatePickers(props) {
  const { classes, title, booked_date } = props;

  return (
    
      <TextField
        id="date"
        type="date"
        label={title}
        defaultValue={booked_date}
        className={classes.textField}
        InputProps={{
          disableUnderline: true
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
  );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);
