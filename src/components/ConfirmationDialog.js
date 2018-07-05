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
import DialogContent from '@material-ui/core/DialogContent';
// import PersonIcon from '@material-ui/icons/Person';
// import AddIcon from '@material-ui/icons/Add';
// import EditIcon from '@material-ui/icons/Edit';
// import Typography from '@material-ui/core/Typography';
// import blue from '@material-ui/core/colors/blue';
// import Tooltip from '@material-ui/core/Tooltip';
// import IconButton from '@material-ui/core/IconButton';
// import EditOptions from './EditOptions';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Close from '@material-ui/icons/Close';
import Check from '@material-ui/icons/Check';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

// const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
  dBox: {
    padding: theme.spacing.unit * 2,
  },
  dActions: {
    margin: 0,
    padding: theme.spacing.unit * 2,
    justifyContent: 'space-between',
  },
  rightIcon: {
    paddingLeft: theme.spacing.unit,
  }
  
});

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class ConfirmDialog extends React.Component {
  state = {
    open: false
  }
  
  handleCancel = () => {
    this.props.onClose(this.props.value);
  };

  handleOk = () => {
    this.props.onClose(this.state.value);
  };
  
  handleClose = () => {
    this.setState({ open: false });
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue,  ...other } = this.props;
    // const bookedDate = this.props.booked_date;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other} TransitionComponent={Transition}>
        <DialogTitle id="simple-dialog-title" className={this.props.classes.root}>Confirm action</DialogTitle>
        <DialogContent className={this.props.classes.dBox}>
          <Typography variant="body1" gutterBottom align="center">
            Are you sure you want to cancel deliveries?
          </Typography>
        </DialogContent>
        <DialogActions className={this.props.classes.dActions}>
          <Button onClick={this.handleOk} variant="contained" color="primary" className={classes.button}>
            Confirm
            <Check className={classes.rightIcon} />
          </Button>
          <Button onClick={this.handleCancel} variant="contained" color="secondary" className={classes.button}>
            Cancel
            <Close className={classes.rightIcon} />
          </Button>
          
          
        </DialogActions>
      </Dialog>
    );
  }
}

ConfirmDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const ConfirmDialogWrapped = withStyles(styles)(ConfirmDialog);

class ConfirmDialogComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  
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
    return (
      <div>
        <ConfirmDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default ConfirmDialogComponent;
