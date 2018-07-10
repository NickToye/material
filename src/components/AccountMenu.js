import React from 'react';
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

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

          <Avatar aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          alt="Nick Toye" src="https://lh3.googleusercontent.com/-09zlnLAagT4/Wlxpk_-dHGI/AAAAAAAACkg/ukSgWEqq6PEWymiCeWfY_5qY5VjrPi8lwCEwYBhgL/w280-h280-p/familyguy.png" className={classes.avatar} />


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
