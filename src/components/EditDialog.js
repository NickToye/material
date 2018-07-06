/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
// import PersonIcon from '@material-ui/icons/Person';
// import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
// import Typography from '@material-ui/core/Typography';
// import blue from '@material-ui/core/colors/blue';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import EditOptions from './EditOptions';
import Slide from '@material-ui/core/Slide';

// const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
  dBox: {
    width: '320px',    
  },

  
});

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class SimpleDialog extends React.Component {
  
  
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, bookedDate, isBookable, isBooked, ...other } = this.props;
    console.log('Simple Dialog: ' + isBookable);
    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other} TransitionComponent={Transition}>
        <DialogTitle id="simple-dialog-title" className={this.props.classes.root}>Edit Booking</DialogTitle>
        <div className={this.props.classes.dBox}>
          <EditOptions editBookedDate={bookedDate} editBookable={isBookable} editBooked={isBooked} />
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

const editDialogTheme = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

class EditDialog extends React.Component {
  state = {
    open: false,
    // selectedValue: emails[1],
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };
  
  

  render() {
    
    const bookedDate = this.props.booked_date;
    const bookable = this.props.isBookable;
    const booked = this.props.isBooked;
    const { classes } = this.props;
    console.log('Edit Dialog: ' + bookable);
    return (
      <div className={classes.root}>
        <Tooltip title="Edit" placement="right">
          <IconButton aria-label="Edit" onClick={this.handleClickOpen}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        
        <SimpleDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
          bookedDate={bookedDate}
          isBookable={bookable}
          isBooked={booked}
        />
      </div>
    );
  }
}

export default withStyles(editDialogTheme)(EditDialog);
