import React from 'react';
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  menuItem: {
    fontSize: 14
  }
});

class AccountMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <IconButton>
          <MoreVertIcon 
            aria-owns={anchorEl ? 'simple-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick} />
        </IconButton>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          
        >
          <MenuItem className={classes.menuItem} onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem className={classes.menuItem} onClick={this.handleClose}>My account</MenuItem>
          <MenuItem className={classes.menuItem} onClick={this.handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}
export default withStyles(styles)(AccountMenu);
